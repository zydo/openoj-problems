# Solutions — Last Substring in Lexicographical Order

## Two-Pointer Suffix Comparison

The answer is always a suffix: if a suffix `s[i:]` is a candidate, extending it rightward keeps it at least as large, so the maximum substring is `s[i:]` for the best starting index `i`. Finding that index needs only two candidate pointers, `i` and `j` (the current best and its challenger), plus an offset `k` marking how many characters of `s[i:]` and `s[j:]` have agreed so far.

Each step compares `s[i + k]` with `s[j + k]`, one character beyond the common prefix of the two candidates. If they are equal, the prefix grows (`k += 1`). If the challenger's character is larger, then `s[i:]` loses — and so does every suffix starting between `i` and `i + k`, because each shares a prefix with `s[i:]` and then meets the same losing comparison shifted; all of them are dominated by the corresponding suffixes around `j`. So `i` jumps to `max(i + k + 1, j)` and `j` resets to `i + 1`. Symmetrically, if the challenger's character is smaller, every suffix from `j` to `j + k` is dominated and `j` jumps to `j + k + 1`, with `i` untouched. Either way the frontier `max(i, j) + k` strictly advances, so the loop runs at most about `2n` comparisons.

Starting with `i = 0, j = 1, k = 0` and stopping once `j + k` exits the string, the surviving `i` indexes the lexicographically largest suffix, returned as `s[i:]` — that output slice is the only `O(n)` storage; the search itself uses three integers. Single-character strings exit immediately and return themselves; repeated blocks like `"abab"` are exactly what the shared-prefix skipping is for.

**Complexity:** `O(n)` time, `O(1)` space.
