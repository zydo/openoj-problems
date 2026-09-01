# The Barista's Calm Stretch

## Description

A coffee bar stays open for `n` minutes. The array `customers` has
length `n`, and `customers[i]` counts the patrons who walk in at the
start of minute `i` and leave once that minute ends.

The barista is in a foul mood: `grumpy[i]` is `1` if they are grumpy
during minute `i` and `0` otherwise. Patrons served during a grumpy
minute leave unhappy; patrons served during any other minute leave
happy.

There is one remedy available: for a single stretch of `minutes`
consecutive minutes, the barista is guaranteed to stay perfectly calm.
The remedy can be applied at most once a day.

Return the largest number of patrons who can leave happy.

### Example 1

```text
Input: customers = [4,0,3,2,6,0,5], grumpy = [1,0,1,0,1,0,1], minutes = 3
Output: 13
Explanation: The calm minutes 2, 4, and 6 already serve 2 happy
patrons.
Spending the calm stretch on minutes 5..7 rescues the 6 + 5 patrons of
grumpy minutes 5 and 7, for 2 + 6 + 5 = 13.
```

### Example 2

```text
Input: customers = [8,1,4,9,2], grumpy = [0,1,1,0,0], minutes = 2
Output: 24
Explanation: Minutes 1, 4, and 5 are calm and serve 8 + 9 + 2 = 19
happy patrons; laying the calm stretch over minutes 2..3 adds the
1 + 4 = 5 patrons there.
```

### Example 3

```text
Input: customers = [7,3], grumpy = [1,1], minutes = 2
Output: 10
Explanation: Every minute is grumpy, so the one stretch must cover the
whole day and keeps all 7 + 3 = 10 patrons happy.
```

### Constraints

- `n == customers.length == grumpy.length`
- `1 <= minutes <= n <= 2 * 10^4`
- `0 <= customers[i] <= 1000`
- `grumpy[i]` is either `0` or `1`.

## Hints

### Hint 1

Patrons in already-calm minutes need no help, so take them as a
baseline. Then slide a window of `minutes` consecutive minutes across
the day and track how many grumpy-minute patrons it would rescue —
sliding by one minute only changes the minute that enters and the one
that leaves.
