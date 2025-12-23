-- Query 1: JOIN
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

-- Query 2: EXISTS
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

-- Query 3: WHERE
select
    *
from
    vehicles
where
    type = 'car'
    and status = 'available';

-- Query 4: GROUP BY and HAVING
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