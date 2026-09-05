# Consecutive Seat Number Runs

## Description

Table: `Seats`

| Column Name | Type |
| ----------- | ---- |
| seat_id     | int  |

`seat_id` is the column of unique values for this table.
Each row of this table holds the number of one seat that exists in the
auditorium; numbers were handed out in arbitrary chunks, so the set has
gaps.

Write a solution to report the first and the last seat number of every
maximal block of consecutive numbers in the table `Seats`.

Return the result table ordered by `first_seat`.

The result format is shown in the following example.

### Example 1

```text
Input:
Seats table:
+---------+
| seat_id |
+---------+
| 4       |
| 5       |
| 6       |
| 7       |
| 11      |
| 24      |
| 25      |
| 26      |
+---------+
Output:
+------------+------------+
| first_seat | last_seat  |
+------------+------------+
| 4          | 7          |
| 11         | 11         |
| 24         | 26         |
+------------+------------+
Explanation: The result table should contain every block of consecutive
seat numbers in the table.
Numbers 4 through 7 all exist, so they form one block.
Numbers 8 through 10 are missing.
Number 11 exists on its own, so it forms a block that starts and ends at
11.
Numbers 12 through 23 are missing.
Numbers 24 through 26 form the last block.
```
