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