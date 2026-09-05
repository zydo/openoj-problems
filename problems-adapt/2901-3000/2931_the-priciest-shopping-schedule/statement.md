# The Priciest Shopping Schedule

## Description

A market street holds `m` stalls selling `m * n` goods in total: stall
`i` stocks `n` goods, where the jth good of stall `i` is valued
`values[i][j]`, and every stall lines its goods up from most to least
valuable, so `values[i][j] >= values[i][j + 1]`. All goods are distinct
even when two stalls carry the same value.

The market runs for `m * n` days and you buy exactly one good each day,
paying its value multiplied by that day's number. A purchase must take
the cheapest good still left on its stall: on day `d` you pick a stall
`i` and buy its rightmost remaining good `j` for `values[i][j] * d`.

Return the largest total you can spend across all `m * n` days.

### Example 1

```text
Input: values = [[4,1],[3,2]]
Output: 30
Explanation: Day 1 takes stall 0's 1 for 1 * 1 = 1, day 2 takes stall
1's 2 for 2 * 2 = 4, day 3 takes stall 1's 3 for 3 * 3 = 9, and day 4
takes stall 0's 4 for 4 * 4 = 16. The total 1 + 4 + 9 + 16 = 30 is the
most that can be spent.
```

### Example 2

```text
Input: values = [[9,8,7]]
Output: 50
Explanation: A single stall fixes the order: 7 on day 1 earns 7, 8 on
day 2 earns 16, and 9 on day 3 earns 27, adding up to 50.
```

### Example 3

```text
Input: values = [[10,9,3],[8,7,2]]
Output: 166
Explanation: Cheap goods leave early and expensive ones wait for the
expensive late days: 2*1 + 3*2 + 7*3 + 8*4 + 9*5 + 10*6 = 166, the
largest possible total.
```

### Constraints

- `1 <= m == values.length <= 10`
- `1 <= n == values[i].length <= 10⁴`
- `1 <= values[i][j] <= 10⁶`
- Each `values[i]` is sorted in non-increasing order.

## Hints

### Hint 1

Walk the days forward from 1 to `m * n`, one purchase per day.

### Hint 2

Each stall only ever releases goods from its cheap end, so the
cheapest remaining good anywhere is always sitting at some stall's
tail — buy that one today.
