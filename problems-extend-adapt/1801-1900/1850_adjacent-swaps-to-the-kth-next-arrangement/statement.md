# Adjacent Swaps to the Kth Next Arrangement

## Description

You are given a string `num` of digits, thought of as one large number,
together with an integer `k`.

An arrangement of `num` is any string built from exactly the same digits
in some order. Among the arrangements whose numeric value is strictly
larger than `num`'s, order them from smallest to largest; the one landing
in position `k` is the kth next arrangement.

- Say `num = "4123"`. The larger arrangements, smallest first, are
  `"4132"`, `"4213"`, `"4231"`, `"4312"`, `"4321"`, so the 2nd next
  arrangement is `"4213"`.

An adjacent swap exchanges two neighboring digits of the current string.
Return the fewest adjacent swaps that turn `num` into its kth next
arrangement.

The input guarantees that the kth next arrangement exists.

### Example 1

```text
Input: num = "132", k = 1
Output: 2
Explanation: The 1st next arrangement is "213", and reaching it takes
two adjacent swaps:
- Swap index 1 with index 2: "132" -> "123"
- Swap index 0 with index 1: "123" -> "213"
```

### Example 2

```text
Input: num = "4123", k = 2
Output: 1
Explanation: The 2nd next arrangement is "4213". One swap of index 1
with index 2 gets there: "4123" -> "4213".
```

### Example 3

```text
Input: num = "2048", k = 3
Output: 2
Explanation: The larger arrangements begin "2084", "2408", "2480", so
the 3rd next arrangement is "2480":
- Swap index 1 with index 2: "2048" -> "2408"
- Swap index 2 with index 3: "2408" -> "2480"
```

### Constraints

- `2 <= num.length <= 1000`
- `1 <= k <= 1000`
- `num` consists only of digits.

## Hints

### Hint 1

The kth next arrangement is what you get by applying the standard
next-permutation step k times.

### Hint 2

Match equal digits without crossing them, then the swap count falls out
of the inversions of the resulting index permutation.
