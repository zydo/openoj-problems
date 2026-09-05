# Gluing Words End To End

## Description

You are given an array `words` of `n` strings.

Define an operation `glue(x, y)` on two strings: it concatenates `x` and
`y` into `xy`, except that when the last character of `x` equals the first
character of `y`, one of those two matching characters is dropped.

For instance, `glue("sun", "net")` is `"sunnet"`, while
`glue("era", "ache")` is `"erache"` — the `a` and `a` meeting at the seam
collapse into one.

Starting from `str0 = words[0]`, carry out `n - 1` glues. At step `i` (for
`i` from `1` to `n - 1`) you choose one of:

- `stri = glue(stri - 1, words[i])`, or
- `stri = glue(words[i], stri - 1)`.

Return the smallest length `strn - 1` can end up with.

### Example 1

```text
Input: words = ["per","icon","hero"]
Output: 11
Explanation: Glue left to right with no seam matches along the way:
str1 = glue("per", "icon") = "pericon"
str2 = glue("pericon", "hero") = "periconhero"
No ordering choice beats length 11 here.
```

### Example 2

```text
Input: words = ["era","ache","eel","rim"]
Output: 11
Explanation: Two seams merge as the words are glued left to right:
str1 = glue("era", "ache") = "erache"
str2 = glue("erache", "eel") = "eracheel"
str3 = glue("eracheel", "rim") = "eracheelrim"
It can be shown that 11 is the smallest reachable length.
```

### Example 3

```text
Input: words = ["ddc","bbb","cd"]
Output: 7
Explanation: Gluing in the other direction wins here:
str1 = glue("bbb", "ddc") = "bbbddc"
str2 = glue("bbbddc", "cd") = "bbbddcd"
The final seam matches on `c`, so only one character is added. It can be
shown that 7 is the smallest reachable length.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 50`
- Each character in `words[i]` is an English lowercase letter

## Hints

### Hint 1

For everything that happens after the current step, only three properties
of the string built so far matter: its first character, its last character,
and its length.

### Hint 2

Work through `words` left to right while keeping, for every `(first, last)`
pair of boundary characters, the shortest length any prefix concatenation
with those boundaries has achieved.

### Hint 3

Attaching the next word on the right saves a character exactly when the
stored state's last letter equals the word's first letter; attaching it on
the left saves one when the word's last letter equals the state's first
letter.
