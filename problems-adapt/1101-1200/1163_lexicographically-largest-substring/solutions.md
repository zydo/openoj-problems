# Solutions — Lexicographically Largest Substring

## Two-Pointer Suffix Duel

The answer is always a suffix: any candidate substring extends rightward to
a substring at least as large, so the maximum is `s[i:]` for the best
starting index `i`. Finding `i` takes two candidate pointers — `i`, the
reigning best, and `j`, the challenger — plus an offset `k` holding how many
characters the two suffixes have agreed on so far.

Each round inspects `s[i + k]` against `s[j + k]`, one character past the
shared prefix. Equal characters grow the prefix (`k += 1`). A larger
character for the challenger means `s[i:]` loses — and so does every suffix
starting between `i` and `i + k`, because each agrees with `s[i:]` that far
and then loses the same comparison shifted, all dominated by suffixes near
`j`; `i` jumps to `max(i + k + 1, j)` and `j` restarts at `i + 1`. A smaller
character for the challenger kills suffixes `j` through `j + k` instead, and
`j` jumps to `j + k + 1` with `i` untouched. Either way the frontier
`max(i, j) + k` moves strictly forward, bounding the whole duel at about
`2n` comparisons.

The trace for `"ztzz"` shows both jumps:

1. `i = 0, j = 1`: 'z' < 't' is false — 'z' > 't', so the challenger loses
   and `j` skips to `2`.
2. `i = 0, j = 2`: 'z' = 'z' grows the shared prefix to `k = 1`; then
   't' < 'z', so the challenger _wins_: suffixes `0..0+1` die, `i` moves to
   `max(2, 2) = 2`, `j` to `3`.
3. 'z' = 'z' grows `k` again and `j + k` exits the string. The survivor
   `s[2:] = "zz"` is the answer.

Starting from `i = 0, j = 1, k = 0` and stopping once `j + k` passes the
end, the surviving `i` indexes the greatest suffix and `s[i:]` is returned —
that output slice is the only `O(n)` storage; the search itself keeps three
integers. Single characters exit immediately, and repeated blocks such as
`"dcd"` are exactly what the shared-prefix skipping is built for.

**Complexity:** `O(n)` time, `O(1)` extra space.
