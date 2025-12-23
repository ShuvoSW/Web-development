# 🚓 Vehicle Rental System - Database Design & SQL Queries

## 🎯 Overview  
This project implements a simplified **Vehicle Rental System** database using **PostgreSQL**.  
The system manages **Users (Admins & Customers)**, **Vehicles**, and **Bookings**.

---

## 🎰 Database Schema

## 1️⃣ Users Table
Stores user information with role-based access control.
```sql
Copy code
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
```
## 2️⃣ Vehicles Table
Stores vehicle details including availability and unique registration number.

```sql
Copy code
CREATE TYPE
  vehicle_type AS ENUM('car', 'bike', 'truck');

CREATE TYPE
  vehicle_status AS ENUM('available', 'rented', 'maintenance');

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
```
## 3️⃣ Bookings Table
Records rental bookings by linking users and vehicles.

```sql
Copy code
CREATE TYPE
  booking_status AS ENUM('completed', 'confirmed', 'pending');

CREATE TABLE
  bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT references users (user_id),
    vehicle_id INT references vehicles (vehicle_id),
    start_date date,
    end_date date,
    status booking_status not null,
    total_cost int not null
  );

```
## 🔗 Relationships
One User → Many Bookings

One Vehicle → Many Bookings

Each Booking belongs to exactly one User and one Vehicle

## 📊 SQL Queries
### 🔹 Query 1: Booking details with user & vehicle names
```sql
Copy code
select
  b.booking_id,
  u.user_name as customer_name,
  v.name,
  b.start_date,
  b.end_date,
  b.status
from
  bookings as b
  join users as u on b.user_id = u.user_id
  join vehicles as v on b.user_id = v.vehicle_id;
```
### 🔹 Query 2: Vehicles that have never been booked
```sql
SELECT
  *
FROM
  vehicles
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      bookings
    WHERE
      bookings.vehicle_id = vehicles.vehicle_id
  );
```
### 🔹 Query 3: Available cars only
```sql
Copy code
select
  *
from
  vehicles
where
type
  = 'car'
  and status = 'available';
  ```
###  🔹 Query 4: Vehicles with at least 2 bookings
```sql
Copy code
SELECT
  v.name AS vehicle_name,
  count(*) AS total_bookings
FROM
  bookings AS b
  JOIN vehicles AS v ON b.vehicle_id = v.vehicle_id
GROUP BY
  v.name
HAVING
  count(*) >= 2;
```
## ✅ Features & Constraints
Unique email & registration number

Role validation (Admin / Customer)

Vehicle type restriction

Booking & vehicle status validation

Foreign key relationships

📐 ER Diagram
🔗 https://drawsql.app/teams/shuvo-majumder/diagrams/vehicle-rental-system

