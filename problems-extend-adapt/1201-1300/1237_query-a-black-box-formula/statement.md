# Query a Black-Box Formula

## Description

Somewhere behind an interface sits a formula `f(x, y)` over positive
integers that you can query but never read. Given a target value `z`,
return every positive integer pair `(x, y)` with `f(x, y) == z`, in any
order.

The formula is hidden, but it is guaranteed to be monotonically increasing
in both arguments:

- `f(x, y) < f(x + 1, y)`
- `f(x, y) < f(x, y + 1)`

The `HiddenFormula` interface is defined as such:

```text
interface HiddenFormula {
  // Returns some positive integer f(x, y) for two positive integers x and y, based on a hidden formula.
  int evaluate(int x, int y);
}
```

The judge holds nine different hidden implementations; a test case carries
`function_id` (which implementation the judge assembles as your
`HiddenFormula`) and the target `z`. Implement `collectPairs(z,
hiddenFormula)` and the judge compares your pairs against the full answer
key, order-insensitively.

### Example 1

```text
Input: function_id = 1, z = 5
Output: [[1,4],[2,3],[3,2],[4,1]]
Explanation: For function_id = 1 the hidden formula is f(x, y) = x + y,
so the pairs summing to 5 are exactly the four listed.
```

### Example 2

```text
Input: function_id = 2, z = 5
Output: [[1,5],[5,1]]
Explanation: For function_id = 2 the hidden formula is f(x, y) = x * y,
and only 1 * 5 and 5 * 1 make 5.
```

### Constraints

- `1 <= x, y <= 1000` — it is guaranteed each valid pair satisfies this.
- `1 <= z <= 100`
- The answer key never contains more than `30` pairs.
- `f(x, y)` is strictly increasing in each argument.

## Hints

### Hint 1

Monotonicity means a two-pointer sweep works: start at the extremes and
move whichever pointer overshoots.

### Hint 2

For each `x`, the valid `y` values form a contiguous range you can binary
search — either way you never need to try all 10⁶ pairs.
