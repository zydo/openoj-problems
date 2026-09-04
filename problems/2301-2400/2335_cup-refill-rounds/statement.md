# Cup Refill Rounds

## Description

A drink station pours three kinds of water: cold, warm, and hot. Each
second, you may fill either one cup of any single kind, or two cups of
two different kinds.

You are given an array `amount` of length 3, where `amount[0]`,
`amount[1]`, and `amount[2]` count the cold, warm, and hot cups that
still need filling. Return the fewest seconds in which every cup on the
list can be filled.

### Example 1

```text
Input: amount = [3,7,1]
Output: 7
Explanation: Pair a warm cup with a cold cup for three seconds and with
the hot cup for one more, then spend the last three seconds on warm cups
alone. Warm has seven cups and at most one of them can be filled in any
second, so seven seconds are unavoidable.
```

### Example 2

```text
Input: amount = [2,4,6]
Output: 6
Explanation: Twelve cups in all, and every second clears two. Pair hot
with warm for four seconds, then hot with cold for two: everything is
done in six.
```

### Example 3

```text
Input: amount = [8,1,1]
Output: 8
Explanation: The first two seconds pair the lone warm and hot cups with
a cold cup each; the six cold cups still waiting after that each take a
second of their own.
```

### Constraints

- `amount` holds exactly 3 entries.
- `0 <= amount[i] <= 100`

## Hints

### Hint 1

A second spent on a single cup is a second that could have cleared two —
so keep pairing two different kinds for as long as two kinds remain.

### Hint 2

Draw from the two fullest kinds whenever you pair. Comparing what that
schedule costs when one kind dominates against when the counts stay
balanced reveals a closed-form answer.
