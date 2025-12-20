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