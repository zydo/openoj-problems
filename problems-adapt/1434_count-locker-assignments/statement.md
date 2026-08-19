# Count Locker Assignments

## Description

A corridor has `40` lockers numbered `1` to `40`. Each of `n` students has
written down the lockers they would be happy to use: `lockers[i]` is the list
acceptable to student `i`.

Count the ways to hand every student one locker from that student's own list,
such that no two students are given the same locker.

The count can be very large, so return it modulo `10^9 + 7`.

### Example 1

```text
Input: lockers = [[6,7,8],[6,7,8],[6,7,8]]
Output: 6
Explanation: Every ordering of the three lockers among the three students
works, and there are 3! = 6 orderings.
```

### Example 2

```text
Input: lockers = [[5,6,7],[5,6],[6,7]]
Output: 3
```

### Example 3

```text
Input: lockers = [[2,3],[2,3],[3]]
Output: 0
Explanation: Student 3 must take locker 3, leaving locker 2 for only one of
the first two students, so someone is always stranded.
```

### Constraints

- `n == lockers.length`
- `1 <= n <= 10`
- `1 <= lockers[i].length <= 40`
- `1 <= lockers[i][j] <= 40`
- Each `lockers[i]` lists distinct integers.

## Hints

### Hint 1

Only `n` matters on one side (at most 10) while the locker ids run to 40. Which
side should therefore become the exponential dimension of your state, and which
side should become the loop?

### Hint 2

Walk the locker ids in increasing order, keeping `dp[mask]` = the number of
ways to have already served exactly the students whose bits are set in `mask`,
using only the lockers handled so far.

### Hint 3

At each locker, every already-counted way may either leave it empty or give it
to one of the students who accept it and who is not yet served. Updating from
the old table into a fresh copy is what stops a locker being used twice.
