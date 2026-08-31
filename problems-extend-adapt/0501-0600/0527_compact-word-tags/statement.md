# Compact Word Tags

## Description

You are given an array of **distinct** strings `words`. Replace every word
with the shortest tag that still identifies it uniquely among the others.

A word's tag is built the same way at every stage: take a prefix of `p`
leading letters (`p` starts at 1), then the count of letters strictly
between that prefix and the final letter, then the final letter itself. So
with `p = 1`, `"highlight"` first tags as `h7t` — one leading letter, seven
letters in between, and the closing `t`.

Whenever two or more words land on the same tag, every word in that group
grows its prefix by one letter and all of them re-tag. This repeats,
group by group, until no two words share a tag.

Once every tag is unique, keep it only if it is strictly shorter than the
original word — a tag that fails to shrink the word buys nothing, so the
word itself is reported instead.

Return the final array of tags (or original words), aligned one-to-one with
`words`.

### Example 1

```text
Input: words = ["highlight","highpoint","beacon","tower"]
Output: ["highl3t","highp3t","b4n","t3r"]
Explanation: "highlight" and "highpoint" tie at h7t, so both grow their
prefix. They still tie at h2 ("hi7t"), h3 ("hig7t"), and h4 ("high7t") —
all four leading letters are shared — but split at the fifth letter ("l"
vs "p"), giving the unique tags highl3t and highp3t. "beacon" and "tower"
never collide with anything, so their one-letter prefixes settle
immediately.
```

### Example 2

```text
Input: words = ["brand","bread","black","block","bring"]
Output: ["brand","bread","black","block","b3g"]
Explanation: "brand" and "bread" tie at b3d and grow together, but every
letter through position 4 is shared before the words run out — the tag
would need the whole word, so both are reported as themselves. "black"
and "block" tie at b3k for the same reason. Only "bring" (b3g) never
collides, so it alone gets shortened.
```

### Example 3

```text
Input: words = ["cat","car","cart"]
Output: ["cat","car","c2t"]
Explanation: "cat" and "car" are only 3 letters long, so their one-letter
tags (c1t, c1r) already fit inside the word's own length and buy nothing —
both stay as themselves. "cart" starts alone at c2t, which is shorter than
the 4-letter word, so it is kept.
```

### Constraints

- `1 <= words.length <= 400`
- `2 <= words[i].length <= 400`
- `words[i]` consists of lowercase English letters.
- Every string in `words` is distinct.

## Hints

### Hint 1

Give every word the shortest possible tag first, then only fix the ones
that turn out to collide — most words never need to grow past their
starting prefix.

### Hint 2

A collision is never one-sided: if two words share a tag, they must both
grow their prefix, and they might still collide with each other (or a
third word) afterward. Keep re-checking until a whole round produces no
collisions.

### Hint 3

Group words by their current tag on every round. Any group of size one is
already settled; only groups of size two or more need their prefix
extended before the next round.
