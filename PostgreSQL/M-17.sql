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

-- Delete table
drop table students;