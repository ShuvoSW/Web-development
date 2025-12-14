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