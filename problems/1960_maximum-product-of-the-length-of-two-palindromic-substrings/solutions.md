# Solutions — Maximum Product of the Length of Two Palindromic Substrings

## Manacher's Algorithm with Prefix and Suffix Best

The key insight is that the two palindromes must be non-intersecting, so there is some split point where the first palindrome lies entirely in a prefix and the second entirely in the corresponding suffix. If for every split position we know the longest odd palindrome fully inside the prefix and the longest one fully inside the suffix, the answer is the maximum of their product over all splits. So the problem reduces to computing, for each prefix and each suffix, the best odd-palindrome length contained in it.

Manacher's algorithm gives, for every center `c`, the radius `d1[c]` of the longest odd palindrome centered there in linear time. From that, the code records for each index `e` the longest palindrome that _ends exactly at_ `e` (`best_end`) and for each index `s` the longest one that _starts exactly at_ `s` (`best_start`). A palindrome ending at `e` with length `L` also yields one ending at `e - 1` of length `L - 2` (drop one character from each side, keeping it odd and centered the same), so a single right-to-left sweep propagates `best_end` leftward, and symmetrically a left-to-right sweep propagates `best_start` rightward. Running prefix maxima of `best_end` and suffix maxima of `best_start` then give the best lengths inside each prefix and suffix.

Finally, for every split between index `i` and `i + 1`, the candidate is `left[i] * right[i + 1]`. Every single character is itself an odd palindrome of length 1, so each side always contributes at least 1 and the product is always well-defined; no special case for small strings is needed beyond the split loop covering `i` from `0` to `n - 2`.

**Complexity:** `O(n)` time, `O(n)` space.
