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

-- Modifying constraint
alter table
  employee
alter column
  user_name
type
  varchar(50);  

-- Add constraint
alter table employee
alter column email set not null;  

-- Drop constraint
alter table employee
alter column email drop not null;

-- Set default value
insert into employee (user_name, age) values ('shuvo', 25)
alter table employee

alter column email set default 'test@email.com'

-- Remove default value
alter table employee
alter column email drop default;

-- Add constraint (table level constraint)
alter table employee
  add constraint unique_employee_email unique(email);

alter table employee
  add constraint pk_employee_id primary key(id);  

-- Drop constraint (table level constraint)
alter table employee
  drop constraint unique_employee_email;  