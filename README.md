

# Endpoints

Endpint available at <code>http://34.176.187.55:3000/</code>

## Authorization

All API requests require the use of a generated API key.  To authenticate an API request, you should provide your API key in the url 


# Admin

<details>
 <summary><code>POST</code> <code><b>/admin/createCompany</b></code> <code>(Create a company)</code></summary>

##### Parameters

| name      |  type     | description                                                           |
 |-----------|-----------|-----------------------------------------------------------------|
 | company_name      |  string |  Required. Name of the company  |


##### Responses

 | http code     | content-type                      | response                                                            |
 |---------------|-----------------------------------|---------------------------------------------------------------------|
 | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
 | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

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



# Sensor

<details>
 <summary><code>POST</code> <code><b>/sensor_data</b></code> <code>Insert a sensor data</code></summary>

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
 <summary><code>GET</code> <code><b>/sensor_data/{company_api_key}/{from}/{to}/{array_sensors}</b></code> <code>Get sensors data</code></summary>

##### Parameters 

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `company_api_key` | `string` | **Required**. API Key of the company to authorize |
| `from` | `int` | **Required**. Lower bound of Epoch timne to filter |
| `to` | `int` | **Required**. Upper bound of Epoch timne to filter |
| `array_sensor` | `int[]` | **Required**. Array of sensors id to get data|


##### Responses

 | http code     | content-type                      | response                                                            |
 |---------------|-----------------------------------|---------------------------------------------------------------------|
 | `201`         | `text/plain;charset=UTF-8`        | `Created successfully`                                |
 | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

</details>


