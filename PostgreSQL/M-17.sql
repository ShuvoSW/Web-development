-- Create database
create database school;

-- Delate database
drop database school;

-- Create table
create table students (
  id serial,
  name varchar(50),
  age int,
  isActive boolean,
  dob date
);

-- Delate table
drop table students;

-- Delete exists table
drop table if exists students;