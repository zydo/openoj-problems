# Solutions — Tightest Two-Gap Pattern Match

## Occurrence lists per literal run, joined by binary search

Splitting `p` at its stars yields three literal runs, and a fitting window
is nothing more than one occurrence of each non-empty run, in order, with
the gaps taking up the slack. The window's length runs from the start of the
chosen first occurrence to the end of the chosen last, so the whole task is
a pairing problem over three sorted occurrence lists — which a scan of `s`
produces for each run in linear time.

Degenerate shapes drop out first. No non-empty run answers `0` (Example 3's
`"**"`); exactly one run answers its own length if it occurs anywhere
(Example 4's `"*llo*"`). Two runs are the warm-up: for each occurrence `j`
of the second, the latest occurrence of the first that ends at or before
`j - len1` is the best partner — binary-search the first list for it — and
`j + len2 - that position` is the candidate.

Three runs invite the wrong idea first: trying every pair of occurrences of
the first two. The fix is to record, once, for every occurrence `j` of the
middle run, the latest first-run occurrence ending in time (`best` at `j`);
that array is monotone, because a later `j` admits an equal or later
partner. Sweeping the last run's occurrences `k`, binary-search the largest
middle occurrence ending by `k - len2`; the recorded partner at that index
is then automatically the best available, and `k + len3 - partner` is the
candidate length.

Example 1 shows the arithmetic: with `s = "cabdcabe"` and `p = "ab*d*e"`,
"ab" occurs at 1, "d" at 3, "e" at 7. Partnering 7 with the latest middle
occurrence ending by 6 picks the "d" at 3, whose recorded partner is the
"ab" at 1 — a window of `7 + 1 - 1 = 7`, the substring "abdcabe". The
`j - len` offsets in the searches are what keep chosen runs from overlapping
each other; a run that never occurs leaves its list empty and the answer
`-1`, as in Example 2.

**Complexity:** `O(|s| + |p| + q log q)` time and `O(q)` space, with `q` the
total count of run occurrences.
