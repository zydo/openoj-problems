# Count Words Within a Permitted Alphabet

## Description

You hold a string `allowed` of distinct letters and a list of strings
`words`. A word from the list is **permitted** when each of its letters is
one of the letters of `allowed`.

Count how many of the strings in `words` are permitted.

### Example 1

```text
Input: allowed = "ky", words = ["kkyk","yykk","k","kyz","ky","ykkz"]
Output: 4
Explanation: "kkyk", "yykk", "k", and "ky" draw only on the letters `k` and
`y`; the other two entries each contain a `z` and are rejected.
```

### Example 2

```text
Input: allowed = "xyz", words = ["x","yy","zzz","xy","xz","abc","zyx"]
Output: 6
Explanation: Everything qualifies except "abc", whose letters leave the
permitted alphabet.
```

### Example 3

```text
Input: allowed = "q", words = ["q","qq","qqq","p","qp"]
Output: 3
Explanation: The three words made purely of `q` qualify; "p" and "qp" do
not.
```

### Constraints

- `1 <= words.length <= 10⁴`
- `1 <= allowed.length <= 26`
- `1 <= words[i].length <= 10`
- `allowed` has no repeated characters.
- Only lowercase English letters appear in `allowed` and in the words.

## Hints

### Hint 1

A word fails precisely when it uses even one letter that `allowed` lacks.

### Hint 2

The sizes involved are tiny; checking every word letter by letter, or with a
26-bit mask per word, is easily fast enough.
