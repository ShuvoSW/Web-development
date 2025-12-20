-- Inner join
CREATE TABLE
  employees (
    employee_id SERIAL PRIMARY key,
    employee_name VARCHAR(50),
    department_id INT REFERENCES departments (department_id),
    salary DECIMAL(10, 2),
    hire_date DATE
  );

CREATE TABLE
  departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(50)
  );

INSERT INTO
  departments (department_name)
VALUES
  ('HR'),
  ('Marketing'),
  ('IT'),
  ('Sales'),
  ('Engineering'),
  ('Adminstration'),
  ('Research'),
  ('Quality Assurance');

INSERT INTO
  employees (employee_name, department_id, salary, hire_date)
VALUES
  ('John doe', 1, 60000.00, '2022-01-10'),
  ('John do', 2, 60000.00, '2022-01-10'),
  ('John d', 3, 60000.00, '2022-01-10'),
  ('John ', 4, 60000.00, '2022-01-10'),
  ('Joh', 5, 60000.00, '2022-01-10'),
  ('Jo', 6, 60000.00, '2022-01-10'),
  ('J', 7, 60000.00, '2022-01-10'),
  ('Jj', 8, 60000.00, '2022-01-10'),
  ('Jk', 1, 60000.00, '2022-01-10'),
  ('Jl', 2, 60000.00, '2022-01-10');

select
  *
from
  employees as e
  inner join departments as d on e.department_id = d.department_id;

select
  *
from
  employees 
  inner join departments using (department_id);

-- Group by with join
select
  department_name, round(avg(salary))
from
  employees 
  inner join departments using (department_id)
  group by department_name;

  select
  department_name, count(*)
from
  employees 
  inner join departments using (department_id)
  group by department_name;

select department_name, round(avg(salary)) as avg_salary from employees
join departments using(department_id)
group by department_name order by avg_salary desc limit 1 


-- Extract date function
select extract(year from '2025-12-25'::date)

select extract (year from hire_date) as hired_year, count(*) from employees
group by hired_year


-- Subquery Basics
CREATE TABLE
  employees (
    id SERIAL PRIMARY key,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT
  );

INSERT INTO
  employees (name, department, salary)
VALUES
  ('John doe', 'IT', 60000.00),
  ('John do', 'HR', 70000.00),
  ('John d', 'IT', 80000.00),
  ('John ', 'Finance', 60000.00),
  ('Joh', 'HR', 60000.00);
  
select max(salary) from employees;

select * from employees
where salary = (select max(salary) from employees);

select * from employees
where salary > (select avg(salary) from employees);

select * from employees
where salary = (
  select max(salary) from employees
  where department = 'HR'
);


-- Postgres Functions
create function emp_count()
returns int
language sql
as 
$$
  select count(*) from employees
$$;
  
select emp_count();

create function delete_emp_id(emp_id int)
returns void
language  sql
as 
$$
 delete from employees where id = emp_id  
$$;

select delete_emp_id(5);


-- Procedures 

create procedure delete_emp_byid (emp_id int)
language plpgsql
as 
$$
 begin
  delete from employees where id = emp_id;
 end; 
$$;

call delete_emp_byid(4);

create procedure increase_low_salary (department_name VARCHAR(50))
language plpgsql
as 
$$
  declare
  avg_salary int;
 begin
  -- first step
  select avg(salary) into avg_salary from employees
  where department = department_name;

  -- second step
  update employees set salary = salary * 1.1
  where department = department_name and salary < avg_salary;
 end; 
$$;

call increase_low_salary('HR');

