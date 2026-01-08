 --  Handling NULL With COALESCE
select * from students where email is null;
  
select * from students where email is not null;

select coalesce(null, null, 2, 1);
  
select coalesce(email, 'Not Provided'), * from students;

select first_name, age, coalesce(email, 'Not Provided') from students;

select first_name, age, coalesce(email, 'Not Provided') as email from students;


-- LIMIT, OFFSET Pagination
select * from students limit 2;
  
select * from students limit 2 offset 1;
  
select * from students limit 2 offset 2 * 0;
select * from students limit 2 offset 2 * 1;
select * from students limit 2 offset 2 * 2;


-- Updating Data
select * from students; 

update students set email = 'default@gmail.com' where email is null;

update students set email = 'default@gmail.com' where email like 'a%';

update students set first_name = 'Pronoy', age = 25 where student_id = 1
  
update students set grade = 'C' where student_id in (1, 3);


-- Deleting Data
select * from students where age > 19 and grade = 'C';
  
delete from students where age > 19 and grade = 'C';
  
delete from students where grade = 'A+';


-- GROUP BY Explained
select country  from students
 group by country;

-- count students by country
select country, avg(age)  from students group by country;

-- count students by grade
select grade, count(*)  from students group by grad


-- GROUP BY With HAVING
-- Course with more than 4 students
select course, count(*) from students group by coursec having count(*) > 4;

-- Countries where average student age is greater than 21
select country, count(*) avg(age) from students group by country having avg(age) > 21;

select country, avg(age) from students group by country having avg(age) > 21;


-- Adding Foreign Key Constraint
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL
);

-- Post table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INT references users(id)
);

INSERT INTO users (username) VALUES 
('akash'),
('batash'),
('sagor'),
('nodi');

drop table posts

INSERT INTO posts (title, user_id) VALUES 
('akash', 2),
('batash', 1),
('sagor', 4),
('nodi', 4);


-- Understanding Inner Join
select title, username from posts
join users on posts.user_id = users.id;

select * from posts
join users on posts.user_id = users.id;

select posts.id, title, username from posts
join users on posts.user_id = users.id;

select p.id, title, username from posts as p
join users as u on p.user_id = u.id;

select p.id, title, username from posts as p
inner join users as u on p.user_id = u.id;

select * from users as u
inner join posts as p on p.user_id = u.id;


-- Left join
select * from posts as p
left join users as u on p.user_id = u.id;

select * from posts as p
left outer join users as u on p.user_id = u.id;


-- Right join
select * from posts as p
right join users as u on p.user_id = u.id;

select * from posts as p
right outer join users as u on p.user_id = u.id;

-- Full join
select * from posts as p
full join users as u on p.use


-- Cross join
CREATE TABLE  employees (
  emp_id INT,
  emp_name VARCHAR(50),
  dept_id INT
);

CREATE TABLE departments (
  dept_id INT,
  dept_name VARCHAR(50)
);

INSERT INTO employees VALUES (1, 'John Doe', 101);
INSERT INTO employees VALUES (2, 'jane smith', 102);

INSERT INTO departments VALUES (101, 'Human Resources');
INSERT INTO departments VALUES (102, 'Marketing');

SELECT * from employees;
SELECT * from departments;
-- Main cross join 
select * from employees
cross join departments;

-- Natural join
select * from employees
natural join departments;
