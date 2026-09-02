# Fixing Potholes On A Budget

## Description

A road is given as the string `road`, built from just two characters: `"x"`
marks a pothole and `"."` marks intact pavement. Alongside it you are given
an integer `budget`.

A crew works one contiguous stretch at a time: repairing `n` consecutive
potholes as a single job costs `n + 1`.

Return the largest number of potholes that can be repaired without the
combined price of all chosen jobs exceeding `budget`.

### Example 1

```text
Input: road = "x.x", budget = 3
Output: 1
Explanation: Each of the two one-pothole jobs costs 2, so only one of them
fits within a budget of 3.
```

### Example 2

```text
Input: road = ".xxx.xxxx", budget = 8
Output: 6
Explanation: Taking the whole run of four potholes costs 5, leaving 3. That
cannot pay for the other run outright, but one final job can repair a
two-pothole prefix of it for 2 + 1 = 3 — six potholes in total.
```

### Example 3

```text
Input: road = "xx..xx", budget = 100
Output: 4
Explanation: Every pothole is affordable: two jobs at 3 each come to 6,
well under the budget.
```

### Constraints

- `1 <= road.length <= 10⁵`
- `1 <= budget <= 10⁵ + 1`
- `road` contains only the characters `.` and `x`.

## Hints

### Hint 1

Break the road into maximal runs of consecutive potholes and note each
run's length.

### Hint 2

Order the runs from longest to shortest.

### Hint 3

Buy whole runs while they still fit; whatever budget remains is best spent
on one partial run — a leftover `b` buys `b - 1` further potholes.
