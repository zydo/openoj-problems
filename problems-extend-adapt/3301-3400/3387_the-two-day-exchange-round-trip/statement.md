# The Two-Day Exchange Round Trip

## Description

You are given a string `initialCurrency`, and you start out holding
`1.0` of it. Two days of trading lie ahead, described by four arrays of
pairs and rates:

- `pairs1[i] = [fromCurrency[i], toCurrency[i]]` — on day 1 you can
  convert `fromCurrency[i]` into `toCurrency[i]` at rate `rates1[i]`.
- `pairs2[i] = [fromCurrency[i], toCurrency[i]]` — the same kind of
  quote on day 2, at rate `rates2[i]`.
- Every quoted pair also works in reverse: converting `toCurrency[i]`
  back into `fromCurrency[i]` runs at the reciprocal rate `1 / rate`.

On day 1 you may perform any number of conversions — possibly none —
using day 1's rates, then any number more — again possibly none — on
day 2 using day 2's rates. The two days are priced independently, and
within each day the quoted rates are internally consistent, so no two
routes between the same currencies ever disagree.

Return the greatest amount of `initialCurrency` you can hold once both
days of trading are done.

### Example 1

```text
Input: initialCurrency = "A",
pairs1 = [["A","B"],["B","C"]], rates1 = [3.0,2.5],
pairs2 = [["C","B"],["B","A"]], rates2 = [1.5,4.0]
Output: 45.00000
Explanation: On day 1, trade A into B (3.0) and then into C (7.5 C).
On day 2, take C back to B at 1.5 (11.25 B) and B home to A at 4.0 —
45.0 A in all. Sitting still the whole time would finish at 1.0.
```

### Example 2

```text
Input: initialCurrency = "GBP",
pairs1 = [["GBP","INR"]], rates1 = [7.0],
pairs2 = [["INR","AUD"]], rates2 = [3.0]
Output: 1.00000
Explanation: Day 1 can grow the stash sevenfold in INR, but day 2's
floor never quotes a route back to GBP. The only way to finish holding
GBP is to make no trades at all.
```

### Example 3

```text
Input: initialCurrency = "A",
pairs1 = [["A","B"]], rates1 = [4.0],
pairs2 = [["B","A"]], rates2 = [2.0]
Output: 8.00000
Explanation: Convert on day 1 to hold 4.0 B, then convert once more on
day 2 to finish with 8.0 A.
```

### Example 4

```text
Input: initialCurrency = "A",
pairs1 = [["A","B"],["A","C"]], rates1 = [6.0,2.0],
pairs2 = [["A","B"],["C","A"]], rates2 = [12.0,1.0]
Output: 2.00000
Explanation: Day 1's richer stash sits in B (6.0), but B's only way
home on day 2 divides by 12, leaving 0.5. The modest 2.0 of C converts
home at par and wins.
```

### Constraints

- `1 <= initialCurrency.length <= 3`
- `initialCurrency` consists only of uppercase English letters.
- `1 <= n == pairs1.length <= 10`
- `1 <= m == pairs2.length <= 10`
- `pairs1[i] == [fromCurrency[i], toCurrency[i]]`
- `pairs2[i] == [fromCurrency[i], toCurrency[i]]`
- `fromCurrency[i]` and `toCurrency[i]` consist only of uppercase
  English letters and are `1` to `3` characters long.
- `rates1.length == n`
- `rates2.length == m`
- `1.0 <= rates1[i], rates2[i] <= 10.0`
- The input is generated such that there are no contradictions or
  cycles in the conversion graphs for either day.
- The input is generated such that the output is at most 5 * 10¹⁰.

## Hints

### Hint 1

Day 2 has to begin from whatever currency day 1 leaves you holding, so
the answer is a best-over-intermediates: for each currency `c` day 1 can
reach, grow your `1.0` into as much `c` as day 1 allows, then turn that
stash back into `initialCurrency` as profitably as day 2 allows.

### Hint 2

Because a day's rates never contradict one another, the conversion
factor between any two of its currencies is well defined — one
breadth-first search per day prices every route you need.
