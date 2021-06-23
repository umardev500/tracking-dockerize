package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"

	"github.com/umardevid/go-resi-ongkir/entity"
)

type CostService struct {
	Key string
}

var apiBASEURL = "https://pro.rajaongkir.com/api"

type resultInterface map[string]interface{}

func (cs *CostService) Province() (resultInterface, error) {
	var client = &http.Client{}
	var result resultInterface

	req, err := http.NewRequest("GET", apiBASEURL+"/province", nil)
	req.Header.Set("key", cs.Key)
	if err != nil {
		fmt.Println("error req")
		fmt.Println(err)
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("error do")
		fmt.Println(err)
		return nil, err
	}

	defer resp.Body.Close()

	// Decode the response
	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		fmt.Println("error decode")
		fmt.Println(err)
		return nil, err
	}

	return result, nil
}

// Service for city by id
func (cs *CostService) CityById(id string) (resultInterface, error) {
	var client = &http.Client{}
	var result resultInterface

	req, err := http.NewRequest("GET", apiBASEURL+"/city?province="+id, nil)
	req.Header.Set("key", cs.Key)

	if err != nil {
		fmt.Println("Error req")
		fmt.Println(err)
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("error req")
		fmt.Println(err)
		return nil, err
	}

	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		fmt.Println("error decode")
		fmt.Println(err)
		return nil, err
	}

	return result, nil
}

// Service to get subdistrict
func (cs *CostService) SubDistrictById(id string) (resultInterface, error) {
	var client = &http.Client{}
	var result resultInterface

	req, err := http.NewRequest("GET", apiBASEURL+"/subdistrict?city="+id, nil)
	req.Header.Set("key", cs.Key)

	if err != nil {
		fmt.Println("Error req")
		fmt.Println(err)
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		return nil, err
	}

	return result, nil
}

// => Get cost data
func (cs *CostService) Cost(costData entity.CostEntity) (resultInterface, error) {
	var client = &http.Client{}
	var result resultInterface

	fmt.Println(costData)

	var params = url.Values{}
	params.Set("origin", costData.Origin)
	params.Set("originType", "subdistrict")
	params.Set("destination", costData.Destination)
	params.Set("destinationType", "subdistrict")
	params.Set("weight", costData.Weight)
	params.Set("courier", costData.Courier)
	var payload = bytes.NewBufferString(params.Encode())

	req, err := http.NewRequest("POST", apiBASEURL+"/cost", payload)
	req.Header.Set("key", cs.Key)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	if err != nil {
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		fmt.Println("error decode")
		fmt.Println(err)
		return nil, err
	}

	return result, nil
}
