package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
)

type info struct {
	Collection string   `json:"collection"`
	Color      string   `json:"color"`
	Size       []string `json:"size"`
}

type product struct {
	ID     int      `json:"id"`
	Name   string   `json:"name"`
	Price  int      `json:"price"`
	Gender string   `json:"gender"`
	Info   info     `json:"info"`
	Images []string `json:"images"`
}

// Handler simple test
func Handler(w http.ResponseWriter, r *http.Request) {
	// get param id
	ID, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil {
		w.WriteHeader(400)
		fmt.Fprintf(w, "Inavlid id given")
	}

	// get data
	resp, err := http.Get("https://mf-backend-service.lukaskirner.now.sh/data")
	if err != nil {
		fmt.Fprintf(w, string(err.Error()))
	}

	//parse & filter data
	products := make([]product, 0)
	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	json.Unmarshal(bodyBytes, &products)
	filteredProducts := filter(products, func(v product) bool {
		return v.ID == ID
	})

	if len(filteredProducts) > 0 {
		product, _ := json.Marshal(filteredProducts[0])
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, string(product))
	} else {
		w.WriteHeader(204)
		fmt.Fprintf(w, "Product not present")
	}
}

func filter(vs []product, f func(product) bool) []product {
	vsf := make([]product, 0)
	for _, v := range vs {
		if f(v) {
			vsf = append(vsf, v)
		}
	}
	return vsf
}
