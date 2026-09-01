# Best Five Scores Per Student

## Description

You are given `items`, a list of score records where
`items[i] = [IDi, scorei]` is one score earned by the student whose id
is `IDi`. Work out every student's best-five average: the sum of their
five highest scores, divided by `5` with integer division.

Return the answers as an array of pairs `result`, where
`result[j] = [IDj, topFiveAveragej]` pairs the student id `IDj` with
that student's best-five average, ordered so the ids increase from left
to right.

### Example 1

```text
Input: items = [[3,80],[1,70],[3,90],[1,60],[3,85],[1,95],[3,40],[1,55],[3,100],[1,65]]
Output: [[1,69],[3,79]]
Explanation:
Student 1 scored 70, 60, 95, 55, and 65. Their best five are all of
them, and (95 + 70 + 65 + 60 + 55) / 5 = 69.
Student 3 scored 80, 90, 85, 40, and 100, and
(100 + 90 + 85 + 80 + 40) / 5 = 79.
```

### Example 2

```text
Input: items = [[2,50],[2,100],[2,100],[2,100],[2,100],[2,20],[4,10],[4,60],[4,70],[4,62],[4,65],[4,68]]
Output: [[2,90],[4,65]]
Explanation:
Student 2 has six scores; the best five are 100, 100, 100, 100, and
50, giving 450 / 5 = 90.
Student 4 also has six scores; the best five are 70, 68, 65, 62, and
60, giving 325 / 5 = 65.
```

### Constraints

- `1 <= items.length <= 1000`
- `items[i].length == 2`
- `1 <= IDi <= 1000`
- `0 <= scorei <= 100`
- Every id has at least five scores attached to it.

## Hints

### Hint 1

Think about a single student first: order that student's scores from
high to low and average the first five.

### Hint 2

Then scale up — group the records by id, apply the same per-student
computation inside each group, and walk the ids in ascending order to
assemble the answer.
