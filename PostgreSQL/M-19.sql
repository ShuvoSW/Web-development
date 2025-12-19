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