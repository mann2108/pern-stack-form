CREATE DATABASE demoapp;

CREATE TABLE user_data (
    uId SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNo NUMERIC NOT NULL,
    email TEXT NOT NULL,
    dob DATE NOT NULL,
    bio TEXT NOT NULL,
    pwd TEXT NOT NULL,
    securityQue TEXT NOT NULL,
    answer TEXT NOT NULL
);