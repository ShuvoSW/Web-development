-- Create employee table
create table employe (
  id serial,
  name varchar(100),
  age int
)

-- Rename table name
alter table
  employe
rename to
  employee

-- Add a column
alter table
  employee
add column
  email varchar(50);  

-- Drop a column
alter table
  employee
drop column
  email;

-- Rename a column name  
alter table
  employee
rename column
  name to user_name;