# Ordering the Podium Board

## Description

Table: `Podium`

| Column Name | Type    |
| ----------- | ------- |
| nation      | varchar |
| firsts      | int     |
| seconds     | int     |
| thirds      | int     |

In SQL, `nation` is the primary key for this table.
Each row shows a nation and how many times it has finished first,
second, and third on the international stage.

The podium board is ordered by the following rules:

- The nation with more first-place finishes comes first.
- If two nations tie on firsts, the one with more seconds comes first.
- If they also tie on seconds, the one with more thirds comes first.
- If they tie on thirds as well, the tied nations are ordered by their
  names in ascending lexicographic order.

Write a solution to output the board in that order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Podium table:
+--------+--------+---------+--------+
| nation | firsts | seconds | thirds |
+--------+--------+---------+--------+
| Kenya  | 4      | 1       | 0      |
| Aral   | 4      | 1       | 0      |
| Boves  | 3      | 5       | 1      |
| Dellis | 3      | 5       | 0      |
| Ennet  | 0      | 2       | 2      |
+--------+--------+---------+--------+
Output:
+--------+--------+---------+--------+
| nation | firsts | seconds | thirds |
+--------+--------+---------+--------+
| Aral   | 4      | 1       | 0      |
| Kenya  | 4      | 1       | 0      |
| Boves  | 3      | 5       | 1      |
| Dellis | 3      | 5       | 0      |
| Ennet  | 0      | 2       | 2      |
+--------+--------+---------+--------+
Explanation: Aral and Kenya tie on every counter, so their names decide
the order — "Aral" sorts before "Kenya" lexicographically. Boves edges
out Dellis on thirds (1 versus 0) after the two tie on firsts and
seconds. Ennet trails with no firsts.
```

### Example 2

```text
Input:
Podium table:
+--------+--------+---------+--------+
| nation | firsts | seconds | thirds |
+--------+--------+---------+--------+
| Zeta   | 2      | 0       | 0      |
| Alps   | 2      | 3       | 1      |
| Mira   | 1      | 9       | 9      |
+--------+--------+---------+--------+
Output:
+--------+--------+---------+--------+
| nation | firsts | seconds | thirds |
+--------+--------+---------+--------+
| Alps   | 2      | 3       | 1      |
| Zeta   | 2      | 0       | 0      |
| Mira   | 1      | 9       | 9      |
+--------+--------+---------+--------+
Explanation: Alps and Zeta tie on firsts, and Alps' larger seconds
count breaks the tie. Mira's single first places it last despite its
large seconds and thirds counts.
```
