CREATE TYPE
  user_role AS ENUM('Customer', 'Admin');

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

  CREATE TABLE
  vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    name VARCHAR(50) not null,
    type
      vehicle_type not null,
      model text not null,
      registration_number text unique not null,
      rental_price int not null,
      status vehicle_status not null
  );
