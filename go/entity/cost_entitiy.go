package entity

type CostEntity struct {
	Origin      string `json:"origin"`
	Destination string `json:"destination"`
	Weight      string `json:"weight"`
	Courier     string `json:"courier"`
}
