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

-- Create table with constraints
create table students (
  id serial primary key,
  username varchar(100) not null,
  email varchar(100) unique,
  age smallint check (age >= 18),
  isActive boolean default true
)

-- Delate database
drop database students;