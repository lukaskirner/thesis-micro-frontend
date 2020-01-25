package handler

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

// Handler simple test
func Handler(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://mf-backend-service.lukaskirner.now.sh/data")
	if err != nil {
		fmt.Fprintf(w, string(err.Error()))
	}

	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, string(bodyBytes))
}
