# Most Courses Before Deadlines

## Description

Each entry `[duration, deadline]` describes a course requiring `duration`
consecutive days and completion no later than `deadline`. Study begins at day
one, and courses cannot overlap.

Return the greatest number of courses that can be completed.

### Example 1

```text
Input: courses = [[4,5],[2,6],[3,7],[1,8]]
Output: 3
Explanation: Replacing the four-day course with the three-day course leaves room for three courses total.
```

### Example 2

```text
Input: courses = [[2,2]]
Output: 1
```

### Example 3

```text
Input: courses = [[5,3],[6,4],[9,8]]
Output: 0
Explanation: Every course lasts longer than its own deadline permits.
```

### Constraints

- `1 <= courses.length <= 10^4`
- Every duration and deadline is between `1` and `10^4`, inclusive.

## Hints

### Hint 1

Process courses by increasing deadline; any feasible chosen set can be ordered
that way.

### Hint 2

Track chosen durations in a max-heap and keep their total time.

### Hint 3

When a new course does not fit, replacing the longest chosen course with a
shorter one preserves the count and creates the most room for later choices.
