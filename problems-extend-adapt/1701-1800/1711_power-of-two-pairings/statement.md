# Power-of-Two Pairings

## Description

Rate every dish on a list with a whole number, given as the array `flavors`
where `flavors[i]` is the rating of the `i`-th dish. A pairing is a choice
of two dishes at different positions in the list, and a pairing is
satisfying when its two ratings add up to an exact power of two.

Count how many satisfying pairings the list contains, and report the total
modulo `10⁹ + 7`. Two dishes with equal ratings are still two separate
dishes, so pairings are counted by position, not by rating value.

### Example 1

```text
Input: flavors = [2,14,6,1,1]
Output: 3
Explanation: The satisfying pairings are the two dishes rated 2 and 14
(sum 16), the 2 and the 6 (sum 8), and the two 1s (sum 2).
```

### Example 2

```text
Input: flavors = [0,0,4,4,3]
Output: 5
Explanation: Each of the two 0s pairs with each of the two 4s — 2 × 2 = 4
pairings with sum 4 — and the two 4s pair with each other (sum 8), for 5
in all. No dish pairs with the 3.
```

### Constraints

- `1 <= flavors.length <= 10⁵`
- `0 <= flavors[i] <= 2²⁰`

## Hints

### Hint 1

A rating never exceeds `2²⁰`, so a pair sum can only be one of the 22
powers running from `2⁰` to `2²¹`. Tally how often each rating appears once,
then treat the work as 22 independent "how many pairs land on this target"
questions.

### Hint 2

For a rating `v` and a target power `p`, the needed partner is `p - v`.
Counting only partners strictly larger than `v` visits every unordered
rating pair a single time; the case where the partner equals `v` itself
contributes pairs chosen from within the group of `v`-rated dishes.
