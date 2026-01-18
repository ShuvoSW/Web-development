-- create_database.sql
create database ecommerce;

-- create_table.sql
-- create table table name(
--   column_name datatype constant
-- )
create table
    products (
        product_id serial primary key,
        product_code integer unique,
        product_name varchar(50) not null,
        product_description text,
        price numeric(10, 2) check (price > 0),
        discount_price real,
        stock integer check (stock > 0),
        is_available boolean default true
    );

-- insert_data.sql
insert into
    products (
        product_code,
        product_name,
        product_description,
        price,
        discount_price,
        stock,
        is_available
    )
values
    (
        100,
        'Laptop Pro',
        'High-ene performance laptop',
        95000.00,
        90000.00,
        8,
        true
    ),
    (
        1002,
        'Gaming Mouse',
        'RGB gaming mouse',
        2500.00,
        2200.00,
        40,
        true
    ),
    (
        1003,
        'Office Chair',
        'Ergonomic office chair',
        12000.00,
        10000.00,
        15,
        true
    ),
    (
        1004,
        'USB Hub',
        '4 port USB hub',
        1200.00,
        NULL,
        60,
        false
    ),
    (
        1005,
        'Mechanical Keyboard',
        'Blue switch keyboard',
        5500.00,
        5000.00,
        25,
        true
    );

select
    *
from
    products;

select
    product_code,
    product_name,
    price,
    stock
from
    products;

-- alter_table.sql / table, column name change
alter table products_items
rename to products;

alter table products
add column total_price integer check (total_price > 0);

alter table products
drop column total_price;

alter table products
alter column total_price type numeric(5, 2);

alter table products add constraint total_price check (total_price > 100);

-- filtering_distinct_where.sql
select distinct
    is_available
from
    products;

select
    *
from
    products
where
    is_available = true;

select
    *
from
    products
where
    is_available = false;

select
    *
from
    products
where
    not is_available;

select
    *
from
    products
where
    price between 2000 and 10000;

select
    *
from
    products
where
    price in (2500.00);

select
    *
from
    products
where
    product_code in (1004, 1002);

select
    *
from
    products
where
    product_name like 'laptop%';

select
    *
from
    products
where
    product_name like 'usb%';

-- scalar_function.sql
select
    upper(product_name) as product_upper_name,
    lower(product_name) as product_lower_name
from
    products;

select
    length (product_name)
from
    products;

-- aggregation_function.sql
select
    max(price) as max_price,
    min(price) as min_price,
    avg(price) as avg_price
from
    products;

select
    sum(price) as total_price
from
    Products;

select
    count(*)
from
    products;

-- drop_table.sql
drop table products