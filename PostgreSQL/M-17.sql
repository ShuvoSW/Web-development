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

-- Multiple Constraints 
create table students (
  id serial,
  username varchar(100) not null,
  email varchar(100),
  age smallint check (age >= 18),
  isActive boolean default true,
  primary key(id),
  unique(username, email) 
);

-- Person table
create table person (
  id serial primary key,
  username varchar(50) unique,
  email varchar(50) unique,
  age int check (age >= 20),
  isActive boolean default true
);

-- Insert data into person table
insert into
  person (id, username, email, age, isActive)
values
  (1, 'shuvo', 'shuvo@gmail.com', 28, true);

-- Show inserted data
select * from person;