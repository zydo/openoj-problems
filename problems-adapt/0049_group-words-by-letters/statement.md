# Group Words By Letters

## Description

You are given `words`, an array of lowercase strings. Two words belong
together when one is a rearrangement of the other — that is, when they use the
same letters the same number of times. Partition `words` into those groups and
return the groups.

Every word goes into exactly one group, and a word with no partner forms a
group of its own. Report the groups in the order their first member appears in
`words`, and the words inside each group in the order they appear.

### Example 1

```text
Input: words = ["stone","tones","cider","notes","cried","dog"]
Output: [["stone","tones","notes"],["cider","cried"],["dog"]]
Explanation: The first, second and fourth words all use e, n, o, s and t once
each. The third and fifth share c, d, e, i and r. Nothing rearranges to "dog".
```

### Example 2

```text
Input: words = ["","sun",""]
Output: [["",""],["sun"]]
Explanation: The empty string uses no letters, which makes it a rearrangement
of any other empty string.
```

### Example 3

```text
Input: words = ["pot","top","opt","pot"]
Output: [["pot","top","opt","pot"]]
Explanation: One group holds them all, repeats included — a repeated word is
still a separate entry.
```

### Constraints

- `1 <= words.length <= 10^4`
- `0 <= words[i].length <= 100`
- Each `words[i]` is made of lowercase English letters.

## Hints

### Hint 1

Comparing every pair of words is quadratic. Instead, find something you can
compute from a single word that is the same for exactly the words that belong
with it.

### Hint 2

Only the letter counts matter, and order does not. What does a word become if
you rewrite its letters in a fixed order?

### Hint 3

Use that rewritten form as a dictionary key and append each word to the list
stored under it. Counting letters into 26 slots gives the same key in linear
time per word if you would rather not sort.
