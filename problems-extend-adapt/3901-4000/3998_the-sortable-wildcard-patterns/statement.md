# The Sortable Wildcard Patterns

## Description

You are given a binary string `s` — its characters are all `'0'` and `'1'`.

You also receive a list of pattern strings `strs`, every one as long as
`s` and built from `'0'`, `'1'`, and `'?'`, where each `'?'` stands for
either digit of your choosing.

One move is allowed, repeated as often as you like (or not at all):

- Pick any subsequence of `s`.
- Rearrange that subsequence into non-decreasing order.
- Write the sorted characters back into the very positions the
  subsequence occupied, leaving every other character alone.

For each pattern, decide whether some filling-in of its `'?'` characters
produces a string reachable from `s` through those moves. Return the
verdicts as a boolean array.

### Example 1

```text
Input: s = "1001", strs = ["0101","0110","1??0"]
Output: [true,false,false]
Explanation:
    "0101" works: sorting the first two slots ("10" -> "01") turns s
    into it. "0110" asks for two ones within the first three slots, but s
    keeps only one there, and sorting never hauls a 1 leftward. "1??0"
    must spend its wildcard on a 1 to balance the counts; even with the
    rightmost fill ("1110") the opening slots again demand more ones than
    s provides, so both fail.
```

### Example 2

```text
Input: s = "110", strs = ["101","?10","011"]
Output: [true,true,true]
Explanation:
    "101" comes from sorting slots 1-2 ("10" -> "01"). Setting the
    wildcard to '1' leaves "?10" as s itself, needing no move at all. And
    sorting the entire string gathers the zeros up front, giving "011".
```

### Example 3

```text
Input: s = "10", strs = ["01","11","00"]
Output: [true,false,false]
Explanation:
    Sorting the whole string gives "01". The pattern "11" would need a
    second 1 that does not exist, and "00" would have to make the lone 1
    vanish — moves only rearrange characters, never create or destroy
    them.
```

### Constraints

- `1 <= n == s.length <= 2000`
- `s` consists only of `'0'` and `'1'`.
- `1 <= strs.length <= 2000`
- `strs[i].length == n`
- `strs[i]` consists only of `'0'`, `'1'`, and `'?'`.

## Hints

### Hint 1

Sorting a binary subsequence can only slide zeros toward the front and
ones toward the back — nothing else ever changes.

### Hint 2

That pins down reachability: a string `t` is reachable from `s` exactly
when the two hold the same number of ones and, on every prefix, `t` never
out-runs `s` in ones.

### Hint 3

For a pattern, first work out how many of its `'?'` must turn into ones
to balance the total. Handing that job to the rightmost wildcards keeps
every prefix's ones count as small as possible.

### Hint 4

With the wildcards settled, one scan against `s` checks the prefix
condition.
