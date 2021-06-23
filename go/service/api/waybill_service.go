package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"

	"github.com/umardevid/go-resi-ongkir/entity"
)

type WaybillService struct{}

type resultType map[string]interface{}

var (
	apiURL = "https://pro.rajaongkir.com/api/waybill"
)

func (ws *WaybillService) WaybillCheck(key string, waybillData entity.WaybillInfo) (resultType, error) {
	var client = &http.Client{}
	var result resultType

	var params = url.Values{}
	// Set params
	params.Set("waybill", waybillData.Waybill)
	params.Set("courier", waybillData.Courier)
	var payload = bytes.NewBufferString(params.Encode())

	req, err := http.NewRequest("POST", apiURL, payload)
	// Set request header
	req.Header.Set("key", key)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	if err != nil {
		fmt.Println("error req")
		return nil, err
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("error do")
		fmt.Println(err)
		return nil, err
	}

	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		fmt.Println("error decoding")
		return nil, err
	}

	return result, nil

}
