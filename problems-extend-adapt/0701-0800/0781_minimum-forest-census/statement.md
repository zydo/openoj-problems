# Minimum Forest Census

## Description

A forest holds an unknown number of rabbits, each with a color. You polled
`n` of them with the question "how many _other_ rabbits share your color?"
and recorded the replies in `answers`, where `answers[i]` is the `i`th
rabbit's reply.

A rabbit that replies `k` belongs to a color group of exactly `k + 1`
rabbits (itself plus `k` peers). Two rabbits that gave different replies
cannot share a color, and every rabbit sharing a color gives the identical
reply — though not every member of a group had to be polled.

Given `answers`, report the smallest total number of rabbits the forest
could contain.

### Example 1

```text
Input: answers = [1,1,1]
Output: 4
Explanation: Three rabbits each say "1", meaning color groups of size 2.
One pair of them can share a color, but the third needs a partner that was
never polled, forming a second group of 2. Total: 2 + 2 = 4.
```

### Example 2

```text
Input: answers = [3,3,3,3,3]
Output: 8
Explanation: Five rabbits say "3", meaning groups of size 4. Four of them
fill one group; the fifth starts a second group of 4 padded with three
unpolled rabbits. Total: 4 + 4 = 8.
```

### Example 3

```text
Input: answers = [0,0,0]
Output: 3
Explanation: Each rabbit says "0", meaning it has no groupmates at all, so
the three rabbits form three separate groups of size 1.
```

### Constraints

- `1 <= answers.length <= 1000`
- `0 <= answers[i] < 1000`
