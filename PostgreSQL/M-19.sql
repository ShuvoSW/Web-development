 --  Handling NULL With COALESCE
select * from students where email is null;
  
select * from students where email is not null;

select coalesce(null, null, 2, 1);
  
select coalesce(email, 'Not Provided'), * from students;

select first_name, age, coalesce(email, 'Not Provided') from students;

select first_name, age, coalesce(email, 'Not Provided') as email from students;