CREATE TABLE `Admin` (
	`username` VARCHAR DEFAULT NULL,
	`password` VARCHAR DEFAULT NULL
);

CREATE TABLE `Company` (
	`id` INTEGER DEFAULT NULL,
	`company_name` VARCHAR DEFAULT NULL,
    `company_api_key` VARCHAR DEFAULT NULL
);


CREATE TABLE `Location` (
    'company_id' INT DEFAULT NULL,
    'location_name' VARCHAR DEFAULT NULL,
    'location_country' VARCHAR DEFAULT NULL,
    'location_city' VARCHAR DEFAULT NULL,
    'location_meta' VARCHAR DEFAULT NULL
);

CREATE TABLE 'Sensor' (
    'location_id' INT DEFAULT NULL,
    'sensor_id' INT DEFAULT NULL,
    'sensor_name' VARCHAR DEFAULT NULL,
    'sensor_category' VARCHAR DEFAULT NULL,
    'sensor_meta' VARCHAR DEFAULT NULL,
    'sensor_api_key' VARCHAR DEFAULT NULL
);

CREATE TABLE 'Sensor_data'(
    'state' INT DEFAULT NULL
);