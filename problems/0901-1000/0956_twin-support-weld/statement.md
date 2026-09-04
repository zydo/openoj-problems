# Twin Support Weld

## Description

A sign installation stands on two vertical supports, one on each side,
and the two must end up exactly the same height for the sign to hang
level. Your material is a supply of rods: each rod can be welded into the
left support, welded into the right support, or set aside entirely. Rods
keep their full length — none can be trimmed, and a single rod cannot go
into both supports. Welding several rods end to end stacks their lengths,
so rods of lengths 1, 2, and 3 can form one support of height 6.

You are given the rod lengths as `rods`. Report the greatest common
height the two supports can reach, or `0` if no split of the rods makes
them equal.

### Example 1

```text
Input: rods = [2,3,5,10]
Output: 10
Explanation: The rods 2, 3, and 5 weld into one support of height 10, and
the rod 10 by itself forms the other, so both sides stand 10 tall.
```

### Example 2

```text
Input: rods = [1,4,2,3]
Output: 5
Explanation: One support takes 1 and 4 while the other takes 2 and 3;
both reach height 5.
```

### Example 3

```text
Input: rods = [7,3]
Output: 0
Explanation: With only these two rods, no two disjoint sets share a total
length, so equal supports are impossible.
```

### Example 4

```text
Input: rods = [4,4,4]
Output: 4
Explanation: Welding two of the rods into one support and leaving the
third as the other gives height 4 on both sides; nothing better is
possible because the total is only 12.
```

### Constraints

- `1 <= rods.length <= 20`
- `1 <= rods[i] <= 1000`
- `sum(rods[i]) <= 5000`
