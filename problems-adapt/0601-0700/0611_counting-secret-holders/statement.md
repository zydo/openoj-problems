# Counting Secret Holders

## Description

On day 1 a single person learns a secret.

Each person who learns it on some day waits `delay` days and then passes
it to one new person per day, until `forget` days have passed since they
learned it — at which point they forget it and never share or count
again. The sharing days are therefore exactly the `forget - delay` days
from `delay` to `forget - 1` after learning.

Given `n`, `delay`, and `forget`, return how many people know the secret
at the end of day `n`. The count may be huge, so report it modulo
`10^9 + 7`.

### Example 1

```text
Input: n = 5, delay = 2, forget = 3
Output: 2
Explanation: Call the first person A. A shares on day 3 only (delay 2,
forgotten on day 4), reaching B. B shares on day 5, reaching C. At the
end of day 5 the holders are B and C — A forgot on day 4.
```

### Example 2

```text
Input: n = 6, delay = 1, forget = 4
Output: 26
Explanation: With a one-day wait and a four-day memory:
Day 1: A learns. (1 holder)
Day 2: A tells B. (2)
Day 3: A and B tell C and D. (4)
Day 4: A, B, C and D tell four more. (8)
Day 5: A forgets; the remaining seven tell seven more. (14)
Day 6: thirteen sharers tell thirteen more, and the holders at day's
end number 26.
```

### Example 3

```text
Input: n = 9, delay = 3, forget = 6
Output: 9
Explanation: Nobody shares before day 4. A recruits one person on each
of days 4, 5 and 6, those recruits start spreading on days 7, 8 and 9,
and nobody has forgotten yet — nine holders by the end of day 9.
```

### Constraints

- `2 <= n <= 1000`
- `1 <= delay < forget <= n`

## Hints

### Hint 1

Individuals matter less than their learning day: everyone who learns on
day `d` behaves identically afterwards. What should you count per day?

### Hint 2

A person who learned on day `d` shares exactly on the days `d + delay`
to `d + forget - 1`, one newcomer per day — so the newcomers of a day
come from a window of earlier days.

### Hint 3

Both ends of that window slide forward by one day at a time. Holders at
the end of day `n` are the learners of the final `forget - 1` days.
