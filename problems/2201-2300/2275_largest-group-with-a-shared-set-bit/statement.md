# Largest Group With a Shared Set Bit

## Description

The bitwise AND of a group of integers is the result of AND-ing all of its
members together.

- For instance, the group `[3, 6, 2]` has bitwise AND `3 & 6 & 2 = 2`.
- A group with a single element `[9]` has bitwise AND `9`.

You are given an array `candidates` of positive integers. Choose any group
of its elements and take the bitwise AND of the whole group.

Return the size of the largest group whose bitwise AND is greater than zero.

### Example 1

```text
Input: candidates = [11,13,7,24,20]
Output: 3
Explanation: The group [11,13,24] has a bitwise AND of 11 & 13 & 24 = 8 > 0,
so a group of size 3 works. No group of size 4 or more has a bitwise AND
greater than zero, because no single bit position is carried by four of the
candidates.
```

### Example 2

```text
Input: candidates = [4,4,4]
Output: 3
Explanation: All three elements share bit 2, and indeed 4 & 4 & 4 = 4 > 0,
so the whole array forms one group of size 3.
```

### Example 3

```text
Input: candidates = [1,2,4,8]
Output: 1
Explanation: No two of these powers of two share a set bit, so any group of
two or more elements ANDs to zero; the best group holds a single element.
```

### Constraints

- `1 <= candidates.length <= 10⁵`
- `1 <= candidates[i] <= 10⁷`

## Hints

### Hint 1

A group's bitwise AND survives above zero exactly when some bit position is
set in every member of the group.

### Hint 2

So the question is really: which single bit position is carried by the most
candidates? Members sharing that bit form a valid group, and no valid group
can be larger than that count.

### Hint 3

Values are below 2²⁴, so 24 bit positions suffice — count how many
candidates carry each bit and report the largest count.
