# Most Capital From k Projects

## Description

You begin with capital `w`. There are `n` projects, and project `i` pays a
profit of `profits[i]` once finished, but demands at least `capital[i]` on
hand before it can be started.

You may finish at most `k` distinct projects, one at a time, in any order —
each finished project adds its profit to your capital immediately, which can
bring further projects within reach. Projects whose requirement exceeds your
capital at the moment of choosing cannot be picked yet.

Choose an achievable sequence of at most `k` projects that leaves you with
the largest possible capital, and return that capital.

### Example 1

```text
Input: k = 2, w = 0, profits = [2,4,1,3], capital = [0,1,2,1]
Output: 6
Explanation: With 0 on hand only project 0 (requirement 0) is startable;
finishing it brings capital to 2. Projects 1 and 3 now both qualify, and
taking project 1 adds 4, for a final capital of 2 + 4 = 6.
```

### Example 2

```text
Input: k = 4, w = 0, profits = [3,1], capital = [0,5]
Output: 3
Explanation: Project 0 lifts the capital to 3, which still falls short of
project 1's requirement of 5, so nothing further can be started and two
picks of the quota go unused.
```

### Example 3

```text
Input: k = 5, w = 0, profits = [1,2], capital = [0,0]
Output: 3
Explanation: Only two distinct projects exist, so the quota of 5 cannot be
exhausted; finishing both leaves 0 + 1 + 2 = 3.
```

### Constraints

- `1 <= k <= 10⁵`
- `0 <= w <= 10⁹`
- `n == profits.length == capital.length`
- `1 <= n <= 10⁵`
- `0 <= profits[i] <= 10⁴`
- `0 <= capital[i] <= 10⁹`

The answer is guaranteed to fit in a 32-bit signed integer.

## Hints

### Hint 1

At each turn the only real question is which currently affordable project to
finish. Argue that taking the affordable one with the largest profit can
never cost you later.

### Hint 2

Sort projects by their requirement and advance a pointer as your capital
grows; every newly affordable profit goes into a max-heap exactly once.

### Hint 3

Each pick is one heap pop. Two things end the process: the pick quota, or an
empty heap — capital too low for everything that remains.
