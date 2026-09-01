# Staff Under the Company Head

## Description

Table: `Staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| staff_name  | varchar |
| reports_to  | int     |

`staff_id` is the column of unique values for this table.
Each row records one staff member: the person with ID `staff_id` and name
`staff_name` answers directly to the colleague whose ID is `reports_to`.
The head of the company is the member whose `staff_id` is `1`.

List the `staff_id` of every member who answers to the head, whether the
line is direct or runs through several levels of management above them.

No reporting line in this company passes through more than three managers
before reaching the head.

The answer may be listed in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Staff table:
+----------+------------+------------+
| staff_id | staff_name | reports_to |
+----------+------------+------------+
| 1        | Nadia      | 1          |
| 4        | Omar       | 4          |
| 9        | Priya      | 4          |
| 12       | Quinn      | 9          |
| 20       | Rosa       | 1          |
| 31       | Sami       | 20         |
| 44       | Tara       | 31         |
| 50       | Umar       | 1          |
+----------+------------+------------+
Output:
+----------+
| staff_id |
+----------+
| 20       |
| 31       |
| 44       |
| 50       |
+----------+
Explanation: The head is Nadia, the member with staff_id 1.
Rosa (20) and Umar (50) answer to her directly.
Sami (31) reaches her through Rosa, and Tara (44) through Sami and then
Rosa.
Omar (4) answers only to himself, and Priya (9) and Quinn (12) sit under
Omar, so none of the three ever reaches the head.
```
