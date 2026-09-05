# Letter Chain Growth I

## Description

Take a string `s` of lowercase letters and run it through `t` rounds of
growth. In every round, each character in the string steps forward one
position in the alphabet — an `a` turns into a `b`, a `b` into a `c`, and
so on — with a single exception: a `z` has nowhere left to go, so it
reappears as the two-letter piece `ab`.

After exactly `t` rounds, report how many characters the string holds.
That count can grow enormously, so return it modulo 10⁹ + 7.

### Example 1

```text
Input: s = "bxz", t = 2
Output: 4
Explanation:
Round 1: 'b' becomes 'c', 'x' becomes 'y', and 'z' splits into "ab",
leaving "cyab".
Round 2: 'c' becomes 'd', 'y' becomes 'z', 'a' becomes 'b', and 'b'
becomes 'c', leaving "dzbc".
The final string has 4 characters.
```

### Example 2

```text
Input: s = "qa", t = 3
Output: 2
Explanation:
The rounds simply march both letters along the alphabet: "rb", then
"sc", then "td". Nothing ever reaches `z`, so the length stays 2.
```

### Example 3

```text
Input: s = "wzzk", t = 4
Output: 7
Explanation:
Round 1: both z's split, so "wzzk" becomes "xababl" and the length
jumps to 6.
Round 2: "xababl" becomes "ybcbcm".
Round 3: "ybcbcm" becomes "zcdcdn".
Round 4: the leading 'z' splits, giving "abdedeo" — 7 characters.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.
- `1 <= t <= 10⁵`

## Hints

### Hint 1

Keep a tally of how many copies of each letter you hold instead of the
string itself — the length after a round depends only on those 26
numbers.
