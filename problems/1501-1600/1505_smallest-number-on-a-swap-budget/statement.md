# Smallest Number On A Swap Budget

## Description

You are given a string `num` holding the decimal digits of a very large
number, together with an integer budget `k`. One move exchanges two
**neighboring** digits of the number, and you may spend at most `k` moves.

Spend the budget as advantageously as you can and return the smallest
number reachable, again written as a string.

### Example 1

![diagram](figures/1505-1.svg)

```text
Input: num = "4321", k = 4
Output: "1342"
Explanation: The four moves walk the 1 to the front and then lift the 3
over the trailing digits, and no arrangement smaller than "1342" is
reachable within four exchanges.
```

### Example 2

```text
Input: num = "10", k = 10
Output: "01"
Explanation: The result may begin with a zero — only the input is
guaranteed not to have a leading zero.
```

### Example 3

```text
Input: num = "52841", k = 999
Output: "12458"
Explanation: The budget is generous enough to order every digit ascending.
```

### Constraints

- `1 <= num.length <= 3 * 10⁴`
- `num` consists of only digits and does not contain leading zeros.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Scan the answer from its most significant digit down: each position should
receive the smallest digit that can still be hauled to the front of the
unplaced suffix without exceeding what is left of `k`.

### Hint 2

Dragging a digit forward costs one move per unplaced digit it jumps over,
so track which positions are still active and count the active digits
ahead of each candidate — a Fenwick or segment tree answers both the
counting and the removal in logarithmic time.
