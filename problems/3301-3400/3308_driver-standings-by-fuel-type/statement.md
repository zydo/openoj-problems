# Driver Standings By Fuel Type

## Description

A rideshare operator keeps three tables: the captains who drive, the
cars in the fleet, and one row per completed ride.

Table: `Captains`

| Column Name  | Type    |
| ------------ | ------- |
| captain_id   | int     |
| captain_name | varchar |
| age          | int     |
| experience   | int     |
| incidents    | int     |

`captain_id` is the unique key of this table. Each row describes one
captain: their id, name, age, years behind the wheel, and how many
accidents are on their record.

Table: `Fleet`

| Column Name | Type    |
| ----------- | ------- |
| car_id      | int     |
| captain_id  | int     |
| model       | varchar |
| engine_type | varchar |
| mileage     | int     |

(`car_id`, `captain_id`, `engine_type`) is the unique key of this table.
Each row describes one car: its id, the captain who drives it, the
model, the engine type it runs on, and its total mileage.

Table: `Rides`

| Column Name | Type |
| ----------- | ---- |
| ride_id     | int  |
| car_id      | int  |
| miles       | int  |
| minutes     | int  |
| stars       | int  |

`ride_id` is the unique key of this table. Each row records one ride:
its id, the car that performed it, the distance covered (in miles), how
long it took (in minutes), and the passenger's star rating (1-5).

The operator wants a leaderboard per engine type. A captain's score is
their average star rating over all of their rides, rounded to two
decimal places. Within one engine type, captains are ranked from best
to worst:

- higher average rating comes first;
- on an equal rating, the captain with the greater total distance
  ridden comes first;
- if those tie as well, the captain with fewer incidents on record
  comes first.

Report the full standings: one row per engine type and captain, showing
`engine_type`, `captain_id`, the rounded average rating, and the total
miles. Only captains with at least one ride appear, so only engine
types with at least one ride appear. Rows are ordered by `engine_type`
ascending, and within an engine type from the top of the ranking down.

Each testcase supplies its own `dataset`: the script seeds the
`Captains`, `Fleet`, and `Rides` tables before your query runs. The
result format is shown in the following examples.

### Example 1

```text
Input:
Captains table:
+------------+--------------+-----+------------+-----------+
| captain_id | captain_name | age | experience | incidents |
+------------+--------------+-----+------------+-----------+
| 11         | Nadia        | 41  | 12         | 2         |
| 12         | Omar         | 29  | 4          | 0         |
| 13         | Priya        | 36  | 9          | 1         |
+------------+--------------+-----+------------+-----------+
Fleet table:
+--------+------------+-----------+-------------+---------+
| car_id | captain_id | model     | engine_type | mileage |
+--------+------------+-----------+-------------+---------+
| 410    | 11         | Hatchback | Petrol      | 54000   |
| 411    | 12         | Van       | Electric    | 22000   |
| 412    | 13         | Hatchback | Petrol      | 18000   |
+--------+------------+-----------+-------------+---------+
Rides table:
+---------+--------+-------+---------+-------+
| ride_id | car_id | miles | minutes | stars |
+---------+--------+-------+---------+-------+
| 701     | 410    | 45    | 35      | 4     |
| 702     | 410    | 60    | 50      | 5     |
| 703     | 411    | 80    | 65      | 4     |
| 704     | 411    | 70    | 55      | 4     |
| 705     | 412    | 30    | 25      | 5     |
| 706     | 412    | 55    | 40      | 4     |
+---------+--------+-------+---------+-------+
Output:
+-------------+------------+-------+-------+
| engine_type | captain_id | stars | miles |
+-------------+------------+-------+-------+
| Electric    | 12         | 4.00  | 150   |
| Petrol      | 11         | 4.50  | 105   |
| Petrol      | 13         | 4.50  | 85    |
+-------------+------------+-------+-------+
Explanation: Both petrol captains average 4.50 stars. Nadia has ridden
105 miles in total against Priya's 85, so Nadia takes the higher
standing. Omar is the only electric captain, averaging 4.00 stars over
his 150 miles.
```

### Example 2

```text
Input:
Captains table:
+------------+--------------+-----+------------+-----------+
| captain_id | captain_name | age | experience | incidents |
+------------+--------------+-----+------------+-----------+
| 21         | Quinn        | 52  | 25         | 3         |
| 22         | Rosa         | 33  | 8          | 0         |
+------------+--------------+-----+------------+-----------+
Fleet table:
+--------+------------+-----------+-------------+---------+
| car_id | captain_id | model     | engine_type | mileage |
+--------+------------+-----------+-------------+---------+
| 520    | 21         | Sedan     | Diesel      | 90000   |
| 521    | 22         | Sedan     | Diesel      | 31000   |
+--------+------------+-----------+-------------+---------+
Rides table:
+---------+--------+-------+---------+-------+
| ride_id | car_id | miles | minutes | stars |
+---------+--------+-------+---------+-------+
| 801     | 520    | 90    | 70      | 5     |
| 802     | 520    | 60    | 45      | 4     |
| 803     | 521    | 120   | 95      | 5     |
| 804     | 521    | 30    | 20      | 4     |
+---------+--------+-------+---------+-------+
Output:
+-------------+------------+-------+-------+
| engine_type | captain_id | stars | miles |
+-------------+------------+-------+-------+
| Diesel      | 22         | 4.50  | 150   |
| Diesel      | 21         | 4.50  | 150   |
+-------------+------------+-------+-------+
Explanation: Quinn and Rosa both average 4.50 stars and have both
ridden 150 diesel miles, so the third criterion settles it: Rosa has
no incidents on record while Quinn has three, placing Rosa first.
```

Write your solution as a single `SELECT` query returning four columns —
`engine_type`, `captain_id`, the rounded average rating, and the total
miles — one row per engine type and captain, ordered by `engine_type`
in ascending order.
