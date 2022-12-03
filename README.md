# Endpoints

## Authorization

All API requests require the use of a generated API key.  To authenticate an API request, you should provide your API key in the url 


# Admin

<details>
 <summary><code>POST</code> <code><b>/admin/createCompany</b></code> <code>(Create a company)</code></summary>

##### Parameters

> | name      |  type     | description                                                           |
> |-----------|-----------|-----------------------------------------------------------------|
> | company_name      |  string |  Required. Name of the company  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>



# Locations

<details>
    <summary><code>GET</code> <code><b>/location/{company_api_key}/get/{company_id}</b></code> <code>Get a location</code></summary>

    ##### Parameters

    | Parameter | Type | Description |
    | :--- | :--- | :--- |
    | `company_api_key` | `string` | **Required**. API Key of the company to authorize |
    | `company_id` | `int` | **Required**. ID of the company |


    ##### Responses

    | http code     | content-type                      | response                                                            |
    |---------------|-----------------------------------|---------------------------------------------------------------------|
    | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
    | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>

<details>
 <summary><code>GET</code> <code><b>/location/{company_api_key}/getAll/{company_id}</b></code> <code>Get all locations</code></summary>

##### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `company_id` | `int` | **Required**. ID of the company |


##### Responses

 | http code     | content-type                      | response                                                            |
 |---------------|-----------------------------------|---------------------------------------------------------------------|
 | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
 | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>



<details>
 <summary><code>PUT</code> <code><b>/location/{company_api_key}/modify/{company_id}</b></code> <code>Modify a locations</code></summary>

##### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `company_id` | `int` | **Required**. ID of the company |


##### Responses

 | http code     | content-type                      | response                                                            |
 |---------------|-----------------------------------|---------------------------------------------------------------------|
 | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
 | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>

<details>
 <summary><code>DELETE</code> <code><b>/location/{company_api_key}/delete/{company_id}</b></code> <code>Delete a locations</code></summary>

##### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `company_id` | `int` | **Required**. ID of the company |


##### Responses

 | http code     | content-type                      | response                                                            |
 |---------------|-----------------------------------|---------------------------------------------------------------------|
 | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
 | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>




<!-- 
```http
POST 
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
``` -->


