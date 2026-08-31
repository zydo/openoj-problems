# Letter Case Spread

## Description

Given a string `s`, independently choose an uppercase or lowercase form for
every letter it contains; digits have no case and are always left as they
are.

Return every distinct string reachable this way.

The set of results has no inherent order, but this judge checks output
exactly, so the order is fixed: earlier letters change case more slowly
than later ones, and for each letter the string keeping `s`'s original
case comes before the string with that letter flipped. Concretely: start
from the single-element list `[s]`; scan `s` left to right, and at each
letter, insert right after every string already in the list a copy of that
string with only this letter's case toggled. The examples list output in
exactly this order.

### Example 1

```text
Input: s = "c5"
Output: ["c5","C5"]
```

### Example 2

```text
Input: s = "2ab"
Output: ["2ab","2aB","2Ab","2AB"]
```

### Example 3

```text
Input: s = "x9y"
Output: ["x9y","x9Y","X9y","X9Y"]
```

### Constraints

- `1 <= s.length <= 12`
- `s` consists of lowercase English letters, uppercase English letters,
  and digits.
