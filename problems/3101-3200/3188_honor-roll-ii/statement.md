# The Honor Roll II

## Description

Table: `Cadets`

| Column Name | Type    |
| ----------- | ------- |
| cadet_id    | int     |
| name        | varchar |
| track       | varchar |

`cadet_id` is the primary key for this table.
Each row contains a cadet's identifier, their name, and the track they are
pursuing.

Table: `Modules`

| Column Name | Type    |
| ----------- | ------- |
| module_id   | int     |
| name        | varchar |
| units       | int     |
| track       | varchar |
| required    | enum    |

`module_id` is the primary key for this table.
`required` is an enum type of ('yes', 'no').
Each row contains a module's identifier, its name, how many units it is
worth, the track it belongs to, and whether the module is a required one.

Table: `Registrations`

| Column Name | Type    |
| ----------- | ------- |
| cadet_id    | int     |
| module_id   | int     |
| term        | varchar |
| grade       | varchar |
| GPA         | decimal |

(`cadet_id`, `module_id`, `term`) is the primary key (combination of columns
with unique values) for this table.
Each row contains the cadet identifier, the module identifier, the term the
registration was taken in, the grade received, and the GPA points earned
for that registration.

Write a solution to find the cadets who meet all of the following criteria:

- Have registered for every required module and at least two elective
  modules offered in their track.
- Earned a grade of A on every registration for a required module of their
  track, and at least B on every registration for an elective module of
  their track.
- Maintained an average GPA of at least 2.5 across all their registrations
  (including those outside their track).

Return the result table ordered by `cadet_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
the three tables with that testcase's rows. In every dataset the `required`
flag is stored in lowercase — `'yes'` or `'no'` — exactly as the examples
show; grades are single capital letters `'A'` through `'F'`; "at least B"
means the letter grades `'A'` or `'B'`; the required-module condition holds
only when every registration row the cadet has for each own-track required
module is an `'A'`; the elective conditions look only at registrations for
elective modules offered in the cadet's own track, of which there must be
at least two distinct ones, each of whose registration rows carries at
least a `'B'`; and the average GPA is the arithmetic mean of the
registration `GPA` values over all of the cadet's registration rows,
own-track or not. No test sits closer than `0.05` to the 2.5 cut except
those averaging exactly `2.5`, which do qualify. The result format is in
the following examples.

### Example 1

```text
Input:
Cadets table:
+----------+------+-------------+
| cadet_id | name | track       |
+----------+------+-------------+
| 701      | Iris | Robotics    |
| 702      | Jon  | Robotics    |
| 703      | Kel  | Robotics    |
| 704      | Lou  | Cartography |
| 705      | Meg  | Cartography |
| 706      | Ned  | Poetry      |
+----------+------+-------------+
Modules table:
+-----------+------------+-------+-------------+----------+
| module_id | name       | units | track       | required |
+-----------+------------+-------+-------------+----------+
| 201       | Kinematics | 3     | Robotics    | yes      |
| 202       | Control    | 3     | Robotics    | yes      |
| 203       | Vision     | 3     | Robotics    | no       |
| 204       | Planning   | 3     | Robotics    | no       |
| 205       | Sensors    | 3     | Robotics    | no       |
| 206       | Projection | 4     | Cartography | yes      |
| 207       | Terrain    | 3     | Cartography | no       |
| 208       | Atlas      | 3     | Cartography | no       |
| 210       | Verse      | 2     | Poetry      | no       |
+-----------+------------+-------+-------------+----------+
Registrations table:
+----------+-----------+-------------+-------+-----+
| cadet_id | module_id | term        | grade | GPA |
+----------+-----------+-------------+-------+-----+
| 701      | 201       | Winter 2024 | A     | 4.0 |
| 701      | 202       | Winter 2024 | A     | 4.0 |
| 701      | 203       | Winter 2024 | A     | 4.0 |
| 701      | 204       | Spring 2024 | B     | 3.0 |
| 701      | 205       | Spring 2024 | B     | 3.0 |
| 701      | 210       | Spring 2024 | C     | 1.0 |
| 702      | 201       | Winter 2024 | A     | 4.0 |
| 702      | 202       | Winter 2024 | B     | 3.0 |
| 703      | 201       | Winter 2024 | A     | 4.0 |
| 703      | 202       | Winter 2024 | A     | 4.0 |
| 703      | 203       | Winter 2024 | A     | 4.0 |
| 703      | 204       | Spring 2024 | C     | 2.0 |
| 704      | 206       | Winter 2024 | A     | 4.0 |
| 704      | 207       | Winter 2024 | A     | 3.0 |
| 704      | 208       | Spring 2024 | B     | 3.0 |
| 705      | 206       | Winter 2024 | A     | 4.0 |
| 705      | 207       | Winter 2024 | A     | 3.0 |
| 705      | 208       | Spring 2024 | A     | 3.0 |
| 705      | 210       | Spring 2024 | F     | 0.0 |
+----------+-----------+-------------+-------+-----+
Output:
+----------+
| cadet_id |
+----------+
| 701      |
| 704      |
| 705      |
+----------+
Explanation: Iris (cadet_id 701) holds an A in both Robotics required
modules, three Robotics electives each carrying at least a B, and her
out-of-track C in "Verse" only drags her average to 3.17 — still well
above 2.5, so she qualifies. Jon (cadet_id 702) took a B in the required
"Control", so he is out. Kel (cadet_id 703) finished his required modules
with straight A's but his elective "Planning" carries a C. Lou (cadet_id
704) covers her one required module and two electives with grades of A or
B. Meg (cadet_id 705) does the same, and her off-track F pulls her average
down to exactly 2.5 — which still counts. Ned (cadet_id 706) has no
registrations at all, so he cannot show two electives.
```

### Example 2

```text
Input:
Cadets table:
+----------+------+------------+
| cadet_id | name | track      |
+----------+------+------------+
| 801      | Oli  | Beekeeping |
| 802      | Pia  | Beekeeping |
| 803      | Quo  | Mosaic     |
| 804      | Rex  | Mosaic     |
+----------+------+------------+
Modules table:
+-----------+----------+-------+------------+----------+
| module_id | name     | units | track      | required |
+-----------+----------+-------+------------+----------+
| 221       | Hives    | 3     | Beekeeping | yes      |
| 222       | Swarms   | 3     | Beekeeping | no       |
| 223       | Honey    | 3     | Beekeeping | no       |
| 224       | Tesserae | 2     | Mosaic     | yes      |
| 225       | Grout    | 2     | Mosaic     | no       |
| 226       | Pattern  | 2     | Mosaic     | no       |
| 230       | Chant    | 2     | Choral     | no       |
| 231       | Round    | 2     | Choral     | no       |
+-----------+----------+-------+------------+----------+
Registrations table:
+----------+-----------+-------------+-------+-----+
| cadet_id | module_id | term        | grade | GPA |
+----------+-----------+-------------+-------+-----+
| 801      | 221       | Autumn 2023 | B     | 3.0 |
| 801      | 221       | Spring 2024 | A     | 4.0 |
| 802      | 221       | Spring 2024 | A     | 4.0 |
| 802      | 222       | Spring 2024 | A     | 4.0 |
| 802      | 223       | Autumn 2023 | B     | 3.0 |
| 803      | 224       | Winter 2024 | A     | 4.0 |
| 803      | 225       | Winter 2024 | A     | 4.0 |
| 803      | 226       | Spring 2024 | B     | 3.0 |
| 804      | 224       | Winter 2024 | A     | 4.0 |
| 804      | 225       | Winter 2024 | A     | 4.0 |
| 804      | 226       | Spring 2024 | B     | 3.0 |
| 804      | 230       | Spring 2024 | F     | 0.0 |
| 804      | 231       | Spring 2024 | F     | 0.0 |
+----------+-----------+-------------+-------+-----+
Output:
+----------+
| cadet_id |
+----------+
| 802      |
| 803      |
+----------+
Explanation: Oli (cadet_id 801) retook "Hives" and scored an A the second
time, but the earlier B row for that required module still stands and
disqualifies him. Pia (cadet_id 802) holds an A on the required module and
two electives graded A and B. Quo (cadet_id 803) satisfies every grade
rule as well. Rex (cadet_id 804) is clean on all of his Mosaic modules,
but the two off-track F's drag his average to 2.2, below the 2.5 cut.
```

Write your solution as a single `SELECT` query returning one column —
`cadet_id` — containing exactly the qualifying cadets in ascending
order. Return the result table in that order.
