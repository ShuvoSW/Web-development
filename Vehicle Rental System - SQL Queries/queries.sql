CREATE TYPE
  user_role AS ENUM('Customer', 'Admin');

CREATE TABLE
  users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) not null,
    email VARCHAR(50) unique not null,
    phone VARCHAR(20) not null,
    role user_role NOT NULL
  );

INSERT INTO
  users (user_name, email, phone, role)
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