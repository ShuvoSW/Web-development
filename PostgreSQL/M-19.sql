 --  Handling NULL With COALESCE
select * from students where email is null;
  
select * from students where email is not null;

select coalesce(null, null, 2, 1);
  
select coalesce(email, 'Not Provided'), * from students;

select first_name, age, coalesce(email, 'Not Provided') from students;

select first_name, age, coalesce(email, 'Not Provided') as email from students;


-- LIMIT, OFFSET Pagination
select * from students limit 2
  
select * from students limit 2 offset 1
  
select * from students limit 2 offset 2 * 0
select * from students limit 2 offset 2 * 1
select * from students limit 2 offset 2 * 2
