# Territories Worth Backing

## Description

Table: `Subscribers`

| Column | Type    |
| ------ | ------- |
| id     | int     |
| name   | varchar |
| phone  | varchar |

`id` is the primary key (column with unique values) for this table.
Each row holds one subscriber's name and phone number, written as
`'xxx-yyyyyyy'`: a three-digit territory dialing code followed by a
seven-digit local number, either part allowed to carry leading zeros.

Table: `Territories`

| Column  | Type    |
| ------- | ------- |
| name    | varchar |
| dialing | varchar |

`dialing` is the primary key (column with unique values) for this
table. Each row pairs a territory's name with its three-digit dialing
code, digits only.

Table: `Dials`

| Column      | Type |
| ----------- | ---- |
| dialer_id   | int  |
| receiver_id | int  |
| minutes     | int  |

Duplicate rows may appear. Each row records one call: the dialer's id,
the receiver's id, and the call's length in minutes. The two ids are
never equal.

A fund screens territories before a communications investment. A call
counts toward a territory when either participant's phone carries that
territory's dialing code, and a call between two subscribers of the
same territory counts toward it from both ends. Back a territory when
its average call length is strictly greater than the average length of
every call in the data.

Report every territory worth backing.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds `Subscribers`,
`Territories`, and `Dials` with that testcase's rows before your query
runs. The result format is in the following example.

### Example 1

```text
Input: the Subscribers, Territories, and Dials tables from the dataset below.
Subscribers rows:
id | name | phone
1  | Ana  | 591-7712345
2  | Ben  | 591-7722334
3  | Cleo | 254-1002233
4  | Dov  | 254-1004455
5  | Eva  | 047-9001122
Territories rows:
name    | dialing
Bolivia | 591
Kenya   | 254
Norway  | 047
Ghana   | 233
Dials rows:
dialer_id | receiver_id | minutes
1         | 2           | 40
1         | 3           | 2
2         | 4           | 3
5         | 1           | 6
3         | 4           | 1
Output:
territory
Bolivia
Explanation: Counted from both ends, Bolivia's calls average (40 + 40 + 2 + 3 + 6) / 5 = 18.2 minutes. Kenya averages (2 + 3 + 1 + 1) / 4 = 1.75 and Norway averages 6. The global average over all ten call sides is 104 / 10 = 10.4, so Bolivia is the only territory that clears it.
```

### Example 2

```text
Input: the Subscribers, Territories, and Dials tables from the dataset below.
Subscribers rows:
id | name  | phone
1  | Nia   | 504-3000001
2  | Omar  | 504-3000002
3  | Pia   | 358-1000001
4  | Quin  | 358-1000002
5  | Raj   | 880-7000001
6  | Fay   | 880-7000002
Territories rows:
name      | dialing
Honduras  | 504
Finland   | 358
Bhutan    | 880
Dials rows:
dialer_id | receiver_id | minutes
1         | 2           | 50
3         | 4           | 40
5         | 6           | 1
1         | 3           | 2
Output:
territory
Finland
Honduras
Explanation: Honduras averages (50 + 50 + 2) / 3 = 34 minutes and Finland averages (40 + 40 + 2) / 3 = 27.333333, while Bhutan averages 1. The global average is (102 + 82 + 2) / 8 = 23.25, which both Honduras and Finland exceed.
```

Write your solution as a single `SELECT` query returning one column —
`territory` — one row for every territory whose average call length
strictly exceeds the average across all calls.
