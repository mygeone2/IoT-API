# Endpoints

## Authorization

All API requests require the use of a generated API key.  To authenticate an API request, you should provide your API key in the url 


# Admin

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>(overwrites all in-memory stub and/or proxy-config)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8889/
> ```

</details>
```http
POST /admin/createCompany
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_name` | `string` | **Required**. Name of the company |

# Locations
## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `company_id` | `int` | **Required**. ID of the company |


## Get all locations
```http
GET /location/company_api_key/getAll/company_id
```
## Get one location
```http
GET /location/company_api_key/get/company_id
```
## Modify one location
```http
PUT /location/company_api_key/modify/company_id
```

## Delete one location
```http
DELETE /location/company_api_key/modify/company_id
```


# Sensor
## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `from` | `int` | **Required**. Lower bound of Epoch timne to filter |
| `to` | `int` | **Required**. Upper bound of Epoch timne to filter |
| `array_sensor` | `int[]` | **Required**. Array of sensors id to get data|


## Insert sensor data
```http
POST /sensor_data/
```
## Get one location
```http
GET /location/company_api_key/get/company_id
```
## Modify one location
```http
PUT /location/company_api_key/modify/company_id
```

## Delete one location
```http
DELETE /location/company_api_key/modify/company_id
```


