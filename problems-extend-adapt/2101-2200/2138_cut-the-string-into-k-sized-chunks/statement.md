# Cut the String into k-Sized Chunks

## Description

Take a string `s` and a chunk width `k`, and cut the string left to right
into chunks of exactly `k` characters: the first chunk is the first `k`
characters, the second chunk is the next `k`, and so on, with every
character landing in exactly one chunk.

A tail shorter than `k` still counts as a chunk, but it must be built up
to width `k` by appending copies of the pad character `fill`. Counting
only what came from `s`, the chunks read back in order reproduce `s`
exactly.

Return every chunk in order, including the padded final one.

### Example 1

```text
Input: s = "gatehouse", k = 3, fill = "q"
Output: ["gat","eho","use"]
Explanation: The nine characters split cleanly into three chunks of
three — "gat", "eho", "use" — so the pad character is never needed.
```

### Example 2

```text
Input: s = "rendezvous", k = 4, fill = "z"
Output: ["rend","ezvo","uszz"]
Explanation: The first eight characters form "rend" and "ezvo". Only
"us" is left, one character short twice over, so two copies of "z"
complete the final chunk.
```

### Example 3

```text
Input: s = "orbit", k = 5, fill = "w"
Output: ["orbit"]
Explanation: The whole string fills one chunk exactly, so that single
chunk is the whole answer.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters only.
- `1 <= k <= 100`
- `fill` is a lowercase English letter.

## Hints

### Hint 1

The string's length and `k` together tell you how many chunks there will
be — including a possibly short trailing one.

### Hint 2

Serve characters out of `s` in batches of `k`; if the last batch comes up
short, top it off with copies of `fill`.
