# Resolve Ratios

## Description

Variables are named by short strings, and you are handed a batch of known
ratios between them: `pairs[i] = [a, b]` together with `ratios[i]` states that
`a / b` equals `ratios[i]`.

Each entry of `queries` asks for another such quotient — `queries[j] = [c, d]`
asks for the value of `c / d`. Return one answer per query, in the order asked,
using `-1.0` for a query the known ratios leave undetermined. A variable that
never appears among `pairs` is undetermined, including when it is divided by
itself.

The batch you are given never contradicts itself, and no ratio in it is zero, so
every determined query has exactly one consistent value.

### Example 1

```text
Input: pairs = [["p","q"],["q","r"]], ratios = [4.0,0.5],
       queries = [["p","r"],["r","q"],["p","z"],["q","q"]]
Output: [2.00000,2.00000,-1.00000,1.00000]
Explanation: p / r is p / q times q / r = 4.0 × 0.5. Reading a stated ratio
backwards inverts it, so r / q = 1 / 0.5. Nothing mentions z, and any known
variable over itself is 1.0.
```

### Example 2

```text
Input: pairs = [["m","n"],["u","v"]], ratios = [3.0,0.25],
       queries = [["m","v"],["v","u"],["m","n"]]
Output: [-1.00000,4.00000,3.00000]
Explanation: Both variables of the first query are known, yet no stated ratio
links the m–n group to the u–v one, so m / v stays undetermined.
```

### Example 3

```text
Input: pairs = [["w1","w2"],["w3","w2"]], ratios = [6.0,2.0],
       queries = [["w1","w3"],["w3","w1"]]
Output: [3.00000,0.33333]
Explanation: Both stated ratios have w2 underneath, and w2 cancels when one is
divided by the other: w1 / w3 = 6.0 / 2.0.
```

### Constraints

- `pairs` holds between 1 and 20 entries, each of length 2.
- `ratios` is exactly as long as `pairs`, and `0.0 < ratios[i] <= 20.0`.
- `queries` holds between 1 and 20 entries, each of length 2.
- Every variable name is 1 to 5 characters drawn from lowercase English letters
  and digits.

## Hints

### Hint 1

Picture the variables as vertices. A stated ratio `a / b = v` is then an arrow
from `a` to `b` labelled `v`, and the reverse arrow labelled `1 / v` is equally
true.

### Hint 2

Follow any route of arrows from `c` to `d` and multiply the labels: each vertex
you pass through contributes a factor and then its reciprocal, so the product
collapses to `c / d`. Any traversal that finds a route — breadth-first,
depth-first — will do.

### Hint 3

Answer `-1.0` when a query names a variable no arrow touches, or when the route
search drains the component of `c` without reaching `d`. Handle `c == d` for a
known variable before searching, since its route has no arrows at all.
