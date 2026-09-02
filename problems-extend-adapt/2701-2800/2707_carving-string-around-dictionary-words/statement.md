# Carving A String Around Dictionary Words

## Description

You are given a string `s` and a list of distinct lowercase words
`dictionary`. Your job is to cut `s` into non-overlapping pieces so that
every piece, read as a substring, is one of the dictionary words. Pieces
may sit side by side with gaps: any character of `s` that ends up inside
no chosen piece counts as leftover.

Return the smallest possible number of leftover characters over all ways
to make the cuts.

### Example 1

```text
Input: s = "applepiessay", dictionary = ["apple","pies","say"]
Output: 0
Explanation: Cut out "apple" (indices 0 to 4), "pies" (indices 5 to 8),
and "say" (indices 9 to 11). The three dictionary words tile the whole
string, so nothing is left over.
```

### Example 2

```text
Input: s = "morningrun", dictionary = ["orn","ing","nru"]
Output: 4
Explanation: Take "orn" (indices 1 to 3) and "ing" (indices 4 to 6). The
characters at indices 0, 7, 8, and 9 fall inside no word, giving 4
leftovers, and no cutting plan does better.
```

### Example 3

```text
Input: s = "xyz", dictionary = ["abc","def"]
Output: 3
Explanation: Neither dictionary word ever appears in `s`, so all three
characters are leftover.
```

### Constraints

- `1 <= s.length <= 50`
- `1 <= dictionary.length <= 50`
- `1 <= dictionary[i].length <= 50`
- `s` and every word in `dictionary` consist of only lowercase English
  letters
- The words in `dictionary` are all distinct

### Hint 1

Think of walking left to right and deciding, position by position, the
cheapest way to have consumed a prefix.

### Hint 2

Let `dp[i]` be the fewest leftovers achievable within the prefix ending
just before index `i`: either pay one character and step past `s[i]`, or
jump the full length of any dictionary word starting at `i` for free.
