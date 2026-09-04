# Walk Everyone to a Chair

## Description

A room holds `n` chairs and `n` students, all placed on a number line. The
array `seats` of length `n` gives each chair's position, and the array
`students` of length `n` gives each student's current position.

A single step moves one student from position `x` to `x - 1` or `x + 1`.
Every student must end up standing at a chair, with at most one student per
chair. Several chairs — or several students — may start at the same
position.

Return the smallest total number of steps that seats everyone.

### Example 1

```text
Input: seats = [6,2,9], students = [8,3,5]
Output: 3
Explanation: Seat the student at 3 on the chair at 2, the student at 5 on
the chair at 6, and the student at 8 on the chair at 9 — one step each.
```

### Example 2

```text
Input: seats = [4,10,15,20], students = [5,12,14,21]
Output: 5
Explanation: The students walk 1 + 2 + 1 + 1 steps: 5 to 4, 12 to 10,
14 to 15, and 21 to 20.
```

### Example 3

```text
Input: seats = [7,7,3], students = [3,3,8]
Output: 5
Explanation: Two chairs share position 7 and two students share position 3.
One student stays at 3, another walks four steps to a 7, and the student at
8 walks one step to the remaining 7.
```

### Constraints

- `n == seats.length == students.length`
- `1 <= n <= 100`
- `1 <= seats[i], students[j] <= 100`

## Hints

### Hint 1

Chairs are interchangeable except for their positions, so the only choice is
which student walks to which chair.

### Hint 2

Sort both arrays and pair them up position by position — swapping any two
pairings never shortens the total distance.
