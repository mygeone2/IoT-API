PRAGMA foreign_keys = ON;

CREATE TABLE Admin (
	username VARCHAR ,
	password VARCHAR 
);

CREATE TABLE Company (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	company_name VARCHAR ,
    company_api_key VARCHAR 
);


CREATE TABLE Location (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    location_name VARCHAR ,
    location_country VARCHAR ,
    location_city VARCHAR ,
    location_meta VARCHAR ,
    FOREIGN KEY(company_id) REFERENCES Company(id)
);

CREATE TABLE Sensor (
    sensor_id INTEGER PRIMARY KEY AUTOINCREMENT,
    location_id INT ,
    sensor_name VARCHAR ,
    sensor_category VARCHAR ,
    sensor_meta VARCHAR ,
    sensor_api_key VARCHAR,
    FOREIGN KEY(location_id) REFERENCES Location(id)
);

CREATE TABLE Sensor_data(
    value1 INTEGER,
    value2 INTEGER,
    value3 INTEGER,
    sensor_api_key VARCHAR,
    time_epoch INTEGER,
    sensor_id INTEGER
);



insert into Admin values ('miguel','miguel');

insert into Company (company_name,company_api_key) values ('Google','2543hkjH');
insert into Company (company_name,company_api_key) values ('Facebook','4Rg6HJr3S1S');

insert into Location (company_id,location_name,location_country,location_city,location_meta) values (2,'CL', 'Chile', 'Santiago', 'nometa');
insert into Location (company_id,location_name,location_country,location_city,location_meta) values (2,'PER', 'Peru', 'Lima', 'nometa');

insert into Sensor  (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (1,'Planta1','Humedad','nometa','gSDf53DFG');
insert into Sensor  (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (1,'Planta2','Humedad','nometa','jfHGrt6gfg4DF');
insert into Sensor (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (1,'Planta1','Luz','nometa','jf%hGd@yg');

insert into Sensor (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (2,'Planta1','Humedad','nometa','gSDf53DFG');
insert into Sensor (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (2,'Planta2','Humedad','nometa','jfHGrt6gfg4DF');
insert into Sensor (location_id,sensor_name,sensor_category,sensor_meta,sensor_api_key) values (2,'Planta1','Luz','nometa','jf%hGd@yg');


insert into Sensor_data values (2,23,123,'jf%hGd@yg', strftime('%s', 'now'));