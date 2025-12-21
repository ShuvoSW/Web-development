CREATE TABLE
  users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) not null,
    email VARCHAR(50) unique not null,
    phone VARCHAR(20) not null,
    role user_role NOT NULL
  );