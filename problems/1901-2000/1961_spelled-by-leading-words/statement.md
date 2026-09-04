# Spelled by the Leading Words

## Description

You are given a string `s` and a list of strings `words`.

The list spells `s` when some run of entries taken from its front, written
one after another with nothing in between and nothing left over, reproduces
`s` exactly — that is, `s` equals `words[0] + words[1] + ... + words[k-1]`
for some `k` with `1 <= k <= words.length`.

Return `true` if `words` spells `s`, or `false` otherwise.

### Example 1

```text
Input: s = "gopherzoo", words = ["gopher","zoo","park","lane"]
Output: true
Explanation:
The first two entries written back to back give "gopher" + "zoo" =
"gopherzoo", so the list spells s using k = 2.
```

### Example 2

```text
Input: s = "gopherzoo", words = ["zoo","gopher","park"]
Output: false
Explanation:
Any spelling must begin with the very first entry, but s begins with
"gopher" while the list begins with "zoo". No prefix of the list can
reproduce s.
```

### Example 3

```text
Input: s = "gopherzo", words = ["gopher","zoo","park"]
Output: false
Explanation:
Taking the first two entries overshoots: "gopher" + "zoo" is "gopherzoo",
longer than s. Entry boundaries never line up with the end of s.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `1 <= s.length <= 1000`
- `s` and every entry of `words` contain only lowercase English letters.

## Hints

### Hint 1

Only `words.length` distinct front-runs exist — appending one more entry is
the only way a run grows — so the search space is tiny.

### Hint 2

Sweep the entries once, growing a running concatenation, and report success
the moment it equals `s`; if the sweep ends first, or an entry breaks the
match mid-run, the answer is no.
