# The Honor Roll

## Description

Table: `Cadets`

| Column Name | Type    |
| ----------- | ------- |
| cadet_id    | int     |
| name        | varchar |
| track       | varchar |

cadet_id is the primary key (column with unique values) for this table.
Each row of this table contains a cadet's identifier, their name, and the
track they are pursuing.

Table: `Modules`

| Column Name | Type    |
| ----------- | ------- |
| module_id   | int     |
| name        | varchar |
| units       | int     |
| track       | varchar |

module_id is the primary key (column with unique values) for this table.
Each row of this table contains a module's identifier, its name, how many
units it is worth, and the track it belongs to.

Table: `Registrations`

| Column Name | Type    |
| ----------- | ------- |
| cadet_id    | int     |
| module_id   | int     |
| term        | varchar |
| grade       | varchar |

(cadet_id, module_id, term) is the primary key (combination of columns with
unique values) for this table.
Each row of this table contains the cadet identifier, the module
identifier, the term the registration was taken in, and the grade received.

Write a solution to find the cadets who have registered for every module
offered in their track and earned a grade of A on every such registration.

Return the result table ordered by cadet_id in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
the `Cadets`, `Modules`, and `Registrations` tables with that testcase's
rows. The result format is in the following example.

### Example 1

```text
Input:
Cadets table:
+----------+------+-----------+
| cadet_id | name | track     |
+----------+------+-----------+
| 501      | Ada  | Circuitry |
| 502      | Ben  | Circuitry |
| 503      | Cy   | Optics    |
| 504      | Dee  | Acoustics |
+----------+------+-----------+
Modules table:
+-----------+---------+-------+-----------+
| module_id | name    | units | track     |
+-----------+---------+-------+-----------+
| 101       | Gates   | 3     | Circuitry |
| 102       | Signals | 2     | Circuitry |
| 103       | Lenses  | 4     | Optics    |
| 105       | Pottery | 2     | Ceramics  |
+-----------+---------+-------+-----------+
Registrations table:
+----------+-----------+-------------+-------+
| cadet_id | module_id | term        | grade |
+----------+-----------+-------------+-------+
| 501      | 101       | Winter 2024 | A     |
| 501      | 102       | Winter 2024 | A     |
| 502      | 101       | Winter 2024 | B     |
| 502      | 102       | Winter 2024 | A     |
| 503      | 103       | Winter 2024 | A     |
| 503      | 105       | Winter 2024 | C     |
+----------+-----------+-------------+-------+
Output:
+----------+
| cadet_id |
+----------+
| 501      |
| 503      |
| 504      |
+----------+
Explanation: Ada (cadet_id 501) is a Circuitry cadet and has registered
for both "Gates" and "Signals", earning an 'A' in each. Ben (cadet_id 502)
covered the same two modules but took a 'B' in "Gates", so he is out.
Cy (cadet_id 503) registered for the only Optics module with an 'A'; his
'C' in "Pottery" does not hurt him because Ceramics is not his track.
Dee (cadet_id 504) pursues Acoustics, a track that offers no modules at
all, so she qualifies vacuously.

Note: Output table is ordered by cadet_id in ascending order.
```

### Example 2

```text
Input:
Cadets table:
+----------+------+---------+
| cadet_id | name | track   |
+----------+------+---------+
| 601      | Eve  | Weaving |
| 602      | Fay  | Weaving |
| 603      | Gus  | Masonry |
+----------+------+---------+
Modules table:
+-----------+-------+-------+---------+
| module_id | name  | units | track   |
+-----------+-------+-------+---------+
| 111       | Warp  | 3     | Weaving |
| 112       | Weft  | 3     | Weaving |
| 113       | Stone | 4     | Masonry |
+-----------+-------+-------+---------+
Registrations table:
+----------+-----------+-------------+-------+
| cadet_id | module_id | term        | grade |
+----------+-----------+-------------+-------+
| 601      | 111       | Autumn 2023 | C     |
| 601      | 111       | Spring 2024 | A     |
| 601      | 112       | Spring 2024 | A     |
| 602      | 111       | Spring 2024 | A     |
| 603      | 113       | Autumn 2023 | A     |
+----------+-----------+-------------+-------+
Output:
+----------+
| cadet_id |
+----------+
| 603      |
+----------+
Explanation: Eve (cadet_id 601) retook "Warp" and scored an 'A' the second
time, but her earlier 'C' registration for the same module still stands,
and a single non-A grade on an own-track module disqualifies her. Fay
(cadet_id 602) never registered for "Weft" at all, so her coverage is
incomplete. Gus (cadet_id 603) registered for the one Masonry module and
holds an 'A' — he makes the roll.
```

Write your solution as a single `SELECT` query returning one column,
`cadet_id`, listing every cadet who (a) has a registration for every module
whose `track` equals theirs, and (b) holds a grade of exactly `'A'` in each
of their registrations that belong to such modules — registrations in other
tracks are ignored; retaking a module never rescues an earlier non-A;
cadets whose track offers no modules qualify vacuously. Return the rows
ordered by ascending `cadet_id`.
