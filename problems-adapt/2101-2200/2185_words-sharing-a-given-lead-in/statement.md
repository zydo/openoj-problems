# Words Sharing A Given Lead-In

## Description

An array of strings `words` and a string `pref` are given.

Count how many of the strings in `words` open with exactly the text
`pref`.

The lead-in of a string means any substring made of its first few
characters, starting at position 0.

### Example 1

```text
Input: words = ["fork","form","fold","fortune","fog"], pref = "fo"
Output: 5
Explanation:
Every one of the five words opens with the two characters "fo".
```

### Example 2

```text
Input: words = ["alpha","beta","gamma"], pref = "bet"
Output: 1
Explanation:
Only "beta" opens with "bet"; "alpha" and "gamma" do not.
```

### Example 3

```text
Input: words = ["sun","moon"], pref = "stars"
Output: 0
Explanation:
Neither word is long enough to open with "stars", so nothing matches.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length, pref.length <= 100`
- `words[i]` and `pref` are made of lowercase English letters.

## Hints

### Hint 1

One pass over `words` is enough: for each entry, compare its opening
characters against `pref` and bump a counter when they agree.
