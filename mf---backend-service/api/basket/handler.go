package handler

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type basket struct {
	ID      int      `json:"id"`
	Content []string `json:"content"`
}

// Handler for interacting with basket
func Handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		getHandler(w, r)
		break
	case "POST":
		postHandler(w, r)
		break
	default:
		fmt.Fprintf(w, "Method not supported")
	}
}

func getHandler(w http.ResponseWriter, r *http.Request) {
	cookieData := make([]string, 0)
	cookie, err := r.Cookie("basket")
	if err == nil {
		decoded, err := base64.StdEncoding.DecodeString(cookie.Value)
		if err == nil {
			json.Unmarshal([]byte(decoded), &cookieData)
		}
	}

	basket := basket{
		ID:      0,
		Content: cookieData,
	}
	respData, _ := json.Marshal(basket)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", r.Header.Get("Origin"))
	fmt.Fprintf(w, string(respData))
}

func postHandler(w http.ResponseWriter, r *http.Request) {
	bodyBytes, _ := ioutil.ReadAll(r.Body)

	body := make([]string, 0)
	err := json.Unmarshal(bodyBytes, &body)
	if err != nil {
		fmt.Fprintf(w, "Invalid body")
	}

	cookieData := make([]string, 0)
	cookie, err := r.Cookie("basket")
	if err == nil {
		decoded, err := base64.StdEncoding.DecodeString(cookie.Value)
		if err == nil {
			json.Unmarshal([]byte(decoded), &cookieData)
		}
	}

	cookieData = append(cookieData, body...)
	responseCookieData, _ := json.Marshal(cookieData)
	respCookie := http.Cookie{
		Name:  "basket",
		Value: base64.StdEncoding.EncodeToString(responseCookieData),
		Path:  "/",
	}
	http.SetCookie(w, &respCookie)
	w.WriteHeader(204) // No Content
	w.Header().Set("Access-Control-Allow-Origin", r.Header.Get("Origin"))
}
