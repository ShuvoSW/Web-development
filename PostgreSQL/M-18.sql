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


-- Crete students table
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) not null,
  last_name VARCHAR(50) not null,
  age INT,
  grade CHAR(2),
  course VARCHAR(100) unique,
  email VARCHAR(50) unique,
  dob DATE,
  blood_group VARCHAR(5),
  country VARCHAR(50)
)

-- Insert data
INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country) values
  ('Shuvo', 'Majumder', '20', 'A+', 'Computer Science', 'shuvo@gmail.com', '2001-12-10', 'B+', 'Bangladesh');

-- Using select
select * from students;
select first_name, age from students;  

--Column Alias
select first_name as FirstName from students;
select first_name as "First Name" from students;
select first_name as "First Name", age as user_age from students;

--Sorting data
select first_name, blood_group, country, age from students;
select first_name, blood_group, country, age from students order by age desc;
select first_name, blood_group, country, age from students order by age asc;


-- Distinct
select distinct country from students;

-- Filtering 
select * from students
where country = 'Bangladesh';

select first_name, age, course from students
where country = 'Bangladesh';

select first_name, age, course, country from students
where grade = 'A+';


-- Select students from the Nepal or Bangladesh
select * from students
where country = 'Nepal' or country = 'Bangladesh';

select first_name, country from students
where country = 'Nepal' or country = 'Bangladesh';

-- Select students with a grade 'A+' or 'B' in Computer Science or Physics
select first_name, course, grade, country from students
where (grade = 'A+' or grade = 'B') and (course = 'Computer Science' or course = 'Physics');

select * from students
where country = 'Nepal' and age = 20

select first_name, age from students
where (country = 'Bangladesh' or country = 'Nepal') and age = 20;


-- Comparison operators
select * from students
where age > 19;

select * from students
where age >= 20;

select * from students
where age < 21;

select * from students
where age <= 20;

select * from students
where country != 'Nepal';

select first_name, country from students
where country <> 'Nepal'; -- not equal != or <>

select * from students
where age between 20 and 22


















