# Enumerated Chunks

## Description

You are given a string `message` and a positive integer `limit`.

Split `message` into one or more parts, in order, and append to each part
a marker of the form `"<a/b>"`, where `b` is the total number of parts and
`a` is that part's 1-based position. Every part — including its marker —
must have length exactly `limit`, except the final part, which may be
shorter. Reading the parts in order with their markers removed must
reproduce `message` exactly, and the split must use as few parts as
possible.

Return the parts as an array of strings. If no split satisfies the rules,
return an empty array.

### Example 1

```text
Input: message = "done", limit = 10
Output: ["done<1/1>"]
Explanation: A single part suffices: "done" plus the marker "<1/1>" has
length 4 + 5 = 9, which is at most 10.
```

### Example 2

```text
Input: message = "x y z", limit = 7
Output: ["x <1/3>", "y <2/3>", "z<3/3>"]
Explanation: Two parts cannot hold the message: each marker "<a/2>"
takes 5 characters, leaving only 2 per part for content, or 4 total, but
the message has 5 characters. With three parts each marker "<a/3>" also
takes 5 characters, so the three parts carry 2, 2, and 1 message
characters, fitting exactly.
```

### Example 3

```text
Input: message = "a b", limit = 5
Output: []
Explanation: The smallest possible marker "<1/1>" already has length 5,
leaving no room for any message character, and splitting into more parts
only adds more markers, so the message can never be accommodated.
```

### Constraints

- `1 <= message.length <= 10⁴`
- `message` consists only of lowercase English letters and `' '`.
- `1 <= limit <= 10⁴`

## Hints

### Hint 1

For a fixed total part count `b`, each part `a` can carry exactly
`limit - len("<a/b>")` characters of the message (except the last, which
may carry fewer). Summing this over all parts gives the total capacity of
a `b`-part split.

### Hint 2

Try each part count `b` in increasing order and stop at the first one
whose capacity reaches the message length — this is the fewest-parts
requirement.

### Hint 3

The marker `"<b/b>"` must itself fit inside the limit, which bounds how
large `b` can be; once `2 * len(str(b)) + 3 > limit`, no larger `b` can
work.
