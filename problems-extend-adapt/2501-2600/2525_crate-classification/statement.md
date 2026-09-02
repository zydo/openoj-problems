# Crate Classification

## Description

Four integers `length`, `width`, `height`, and `mass` describe a crate.
Classify it and return the label as a string:

- The crate is bulky when some edge measures at least `10⁴`, or when its
  volume — the product `length * width * height` — reaches `10⁹`.
- The crate is heavy when its `mass` is at least `100`.
- Bulky and heavy at once: the label is `"Both"`.
- Bulky only: `"Bulky"`. Heavy only: `"Heavy"`.
- Failing both tests: `"Neither"`.

### Example 1

```text
Input: length = 10, width = 10, height = 10, mass = 50
Output: "Neither"
Explanation: The edges are tiny, the volume is only 1000, and the mass
is under 100, so neither test fires.
```

### Example 2

```text
Input: length = 2000, width = 1500, height = 400, mass = 60
Output: "Bulky"
Explanation: Every edge stays under 10⁴, but the volume is
1,200,000,000, which meets the 10⁹ volume bar. The mass is light, so
the label is "Bulky" alone.
```

### Example 3

```text
Input: length = 2000, width = 100, height = 60, mass = 120
Output: "Heavy"
Explanation: The volume is 12,000,000, well under 10⁹, and no edge
reaches 10⁴ — but the mass of 120 crosses 100, giving "Heavy".
```

### Example 4

```text
Input: length = 99999, width = 99999, height = 99999, mass = 999
Output: "Both"
Explanation: The edges blow past 10⁴ and the mass tops 100, so the
crate is bulky and heavy at once.
```

### Constraints

- `1 <= length, width, height <= 10⁵`
- `1 <= mass <= 10³`

## Hints

### Hint 1

Evaluate the two tests separately — one for bulk (an oversized edge or
an oversized volume) and one for weight — then map the four outcomes of
the boolean pair onto the labels.

### Hint 2

Mind the multiplication range: three edges up to `10⁵` each produce a
volume near `10¹⁵`, so widen to 64-bit before multiplying in languages
with fixed-width integers.
