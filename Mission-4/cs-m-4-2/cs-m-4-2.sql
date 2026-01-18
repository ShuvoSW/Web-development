-- create_table.sql
create table
    products (
        product_id serial primary key,
        product_code integer unique,
        product_name varchar(50) not null,
        product_description text,
        price numeric(10, 2) check (price >= 0),
        discount_price real,
        stock integer check (stock >= 0),
        is_available boolean default true
    );

INSERT INTO
    products (
        product_code,
        product_name,
        product_description,
        price,
        discount_price,
        stock,
        is_available
    )
VALUES
    (
        1001,
        'Laptop',
        'High performance gaming laptop',
        75000.00,
        72000.50,
        15,
        true
    ),
    (
        1002,
        'Smartphone',
        'Android smartphone with AMOLED display',
        42000.00,
        39999.99,
        30,
        true
    ),
    (
        1003,
        'Tablet',
        '10-inch tablet for work and entertainment',
        28000.00,
        26500.00,
        20,
        true
    ),
    (
        1004,
        'Wireless Mouse',
        'Ergonomic wireless mouse',
        1500.00,
        1350.00,
        50,
        true
    ),
    (
        1005,
        'Keyboard',
        'Mechanical keyboard with RGB lighting',
        4500.00,
        4200.00,
        0,
        false
    ),
    (
        1006,
        'Monitor',
        '27-inch full HD LED monitor',
        22000.00,
        21000.00,
        12,
        true
    ),
    (
        1007,
        'Headphones',
        'Noise cancelling over-ear headphones',
        8500.00,
        7999.00,
        18,
        true
    ),
    (
        1008,
        'Webcam',
        'HD webcam for video conferencing',
        3800.00,
        3600.00,
        22,
        true
    ),
    (
        1009,
        'Desk Lamp',
        'LED desk lamp with adjustable brightness',
        2500.00,
        2300.00,
        14,
        true
    ),
    (
        1010,
        'External SSD',
        'Portable 1TB external SSD',
        16000.00,
        15500.00,
        0,
        false
    );

-- group_by.sql
select
    is_available,
    count(*) as total_products
from
    products
group by
    is_available;

select
    is_available,
    sum(stock) as total_stock
from
    products
group by
    is_available;

-- having.sql
select
    is_available,
    sum(stock) as total_stock
from
    products
group by
    is_available
having
    sum(stock) > 50;

-- foreign_key.sql
-- Child Table (Orders Table) --
create table
    orders (
        order_id serial primary key,
        user_id integer references users (user_id),
        order_amount numeric(10, 2),
        order_date date,
        order_status varchar(20)
    );

-- Parent Table (Users Table) --
create table
    users (
        user_id serial primary key,
        full_name varchar(100) not null,
        email varchar(100),
        city varchar(50),
        created_date date
    );

-- Insert Values for Users --
INSERT INTO
    users (full_name, email, city, created_date)
VALUES
    (
        'Rahim Uddin',
        'rahim@gmail.com',
        'Dhaka',
        '2024-01-05'
    ),
    (
        'Karim Hasan',
        'karim@gmail.com',
        'Chittagong',
        '2024-01-10'
    ),
    ('Salma Akter', NULL, 'Dhaka', '2024-01-12'),
    (
        'Nusrat Jahan',
        'nusrat@gmail.com',
        NULL,
        '2024-01-15'
    ),
    (
        'Imran Hossain',
        'imran@gmail.com',
        'Khulna',
        '2024-01-18'
    ),
    ('Tania Rahman', NULL, NULL, '2024-01-20'),
    (
        'Sabbir Ahmed',
        'sabbir@gmail.com',
        'Sylhet',
        '2024-01-22'
    ),
    (
        'Farhana Islam',
        'farhana@gmail.com',
        'Rajshahi',
        '2024-01-25'
    ),
    ('Arif Khan', NULL, 'Dhaka', '2024-01-28'),
    (
        'Mehedi Hasan',
        'mehedi@gmail.com',
        NULL,
        '2024-01-30'
    );

-- Insert Values for Orders --
INSERT INTO
    orders (user_id, order_amount, order_date, order_status)
VALUES
    (1, 2500.00, '2024-02-01', 'Completed'),
    (2, 1800.00, '2024-02-02', 'Pending'),
    (3, 3200.00, '2024-02-03', 'Completed'),
    (1, 1500.00, '2024-02-05', 'Cancelled'),
    (5, 4200.00, '2024-02-06', 'Completed'),
    (NULL, 3000.00, '2024-02-07', 'Pending'),
    (7, 2100.00, '2024-02-08', 'Completed'),
    (2, NULL, '2024-02-09', 'Pending'),
    (8, 5000.00, NULL, 'Completed'),
    (NULL, NULL, NULL, 'Draft');

-- join.sql
-- Inner join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    orders
    inner join users on users.user_id = orders.user_id;

-- Left join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    orders
    left join users on users.user_id = orders.user_id;

-- Right join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    orders
    right join users on users.user_id = orders.user_id;

-- full join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    orders
    full join users on users.user_id = orders.user_id;

-- Cross join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    users
    cross join orders;

-- Natural join
select
    users.full_name,
    orders.order_amount,
    orders.order_status
from
    users
    natural join orders;

-- subqueries.sql / query in query or nasted query
select
    order_id,
    order_amount
from
    orders
where
    order_amount > (
        select
            avg(order_amount)
        from
            orders
    );