CREATE TYPE user_role AS ENUM ('Customer', 'Admin');

CREATE TABLE
    users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR(50) not null,
        email VARCHAR(50) unique not null,
        phone VARCHAR(20) not null,
        role user_role NOT NULL
    );

INSERT INTO
    users (name, email, phone, role)
values
    (
        'Alice',
        'alice@example.com',
        '1234567890',
        'Customer'
    ),
    ('Bob', 'bob@example.com', '0987654321', 'Admin'),
    (
        'Charlie',
        'charlie@example.com',
        '1122334455',
        'Customer'
    );

CREATE TYPE vehicle_type AS ENUM ('car', 'bike', 'truck');

CREATE TYPE vehicle_status AS ENUM ('available', 'rented', 'maintenance');

CREATE TABLE
    vehicles (
        vehicle_id SERIAL PRIMARY KEY,
        name VARCHAR(50) not null,
        type vehicle_type not null,
        model text not null,
        registration_number text unique not null,
        rental_price int not null,
        status vehicle_status not null
    );

INSERT INTO
    vehicles (
        name,
        type,
        model,
        registration_number,
        rental_price,
        status
    )
values
    (
        'Toyota Corolla',
        'car',
        '2022',
        'ABC-123',
        50,
        'available'
    ),
    (
        'Honda Civic',
        'car',
        '2021',
        'DEF-456',
        60,
        'rented'
    ),
    (
        'Yamaha R15',
        'bike',
        '2023',
        'GHI-789',
        30,
        'available'
    ),
    (
        'Ford F-150',
        'truck',
        '2020',
        'JKL-012',
        100,
        'maintenance'
    );


CREATE TYPE
  booking_status AS ENUM('completed', 'confirmed', 'pending');

CREATE TABLE
  booking (
    booking_id SERIAL PRIMARY KEY,
    user_id INT references users (user_id),
    vehicle_id INT references vehicles (vehicle_id),
    start_date date,
    end_date date,
    status booking_status not null,
    total_cost int not null
  );