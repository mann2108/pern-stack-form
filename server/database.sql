CREATE DATABASE programmers;

CREATE TABLE user_data (
    uId SERIAL PRIMARY KEY NOT NULL,
    fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL,
    phNo NUMERIC NOT NULL,
    email TEXT NOT NULL,
    dob DATE NOT NULL,
    pwd TEXT NOT NULL,
    gender VARCHAR(10),
    languages TEXT,
    dateAdded TIMESTAMPTZ NOT NULL
);