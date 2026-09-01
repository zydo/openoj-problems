# Students Busy at a Moment

## Description

Each of `n` students works on homework during one stretch of time:
student `i` starts at `startTime[i]`, keeps going until `endTime[i]`, and
counts as working at both of those endpoints.

Given a moment `queryTime`, report how many students are in the middle of
their homework right then — the number of indices `i` for which
`startTime[i] <= queryTime <= endTime[i]`.

### Example 1

```text
Input: startTime = [2,4,6,8], endTime = [5,7,9,11], queryTime = 6
Output: 2
Explanation: The second student, working from 4 through 7, and the third
student, working from 6 through 9, are both busy at moment 6. The first
student finished at 5 and the fourth does not start until 8, so only
those two count.
```

### Example 2

```text
Input: startTime = [7], endTime = [7], queryTime = 7
Output: 1
Explanation: A session that both starts and ends exactly at the queried
moment still counts, because the endpoints are inclusive.
```

### Example 3

```text
Input: startTime = [1,2], endTime = [2,3], queryTime = 10
Output: 0
Explanation: Both sessions are long over by moment 10, so no student is
working.
```

### Constraints

- `startTime.length == endTime.length`
- `1 <= startTime.length <= 100`
- `1 <= startTime[i] <= endTime[i] <= 1000`
- `1 <= queryTime <= 1000`

## Hints

### Hint 1

Treat each pair `startTime[i]`, `endTime[i]` as the closed interval
`[startTime[i], endTime[i]]`.

### Hint 2

The answer is just how many of those closed intervals contain
`queryTime` — one comparison pair per student.
