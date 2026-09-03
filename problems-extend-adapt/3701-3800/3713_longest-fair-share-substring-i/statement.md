# The Longest Fair-Share Substring I

## Description

A string `s` of lowercase English letters is given to you.

Call a substring fair-share when every distinct letter it contains shows
up exactly as often as every other one. A substring built from a single
distinct letter always qualifies, no matter how long it runs.

Return the length of the longest fair-share substring of `s`.

### Example 1

```text
Input: s = "mompoppy"
Output: 6
Explanation: "mompop" counts m twice, o twice, and p twice, so it
qualifies. The full string cannot — the trailing y appears once while
its neighbors appear twice — so 6 is the best.
```

### Example 2

```text
Input: s = "bzzqq"
Output: 4
Explanation: "zzqq" has two distinct letters, z and q, each appearing
exactly twice. Extending either way pulls in the lone b, which breaks
the even split.
```

### Example 3

```text
Input: s = "wwww"
Output: 4
Explanation: One distinct letter means the fair-share condition holds
automatically, so the entire string qualifies.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Trying every substring outright recounts each one from zero; instead,
pin the left edge and stretch the right edge, updating per-letter tallies
as the window grows.

### Hint 2

While the left edge is pinned, tallies only ever climb, so the largest
tally in the window is available without a fresh scan.

### Hint 3

A window is fair-share exactly when `distinct letters x largest tally`
equals the window's length — the total count can only split evenly if
every live letter sits at that largest tally.
