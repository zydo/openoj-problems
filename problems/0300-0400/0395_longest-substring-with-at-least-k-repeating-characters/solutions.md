# Solutions — Longest Substring with At Least K Repeating Characters

## Divide and conquer on rare characters

A character that occurs fewer than `k` times inside a stretch of text can never be part of a valid substring of that stretch — its count cannot rise by shortening the substring. Every occurrence of such a rare character is therefore a hard splitter: valid substrings must live entirely between consecutive rare characters. This turns the problem into divide and conquer: count all characters in the current piece, and if none is rare the whole piece is valid and its length is returned; otherwise split the piece at every occurrence of every rare character and recurse on the non-empty pieces.

Two facts make this efficient rather than exponential. First, the pieces at each level are disjoint, so the total counting work per level is linear in the original string length. Second, every recursion level eliminates at least one character from the alphabet of its pieces — all occurrences of the rare characters were split on, so no piece contains them — which bounds the depth by the 26-letter alphabet. The base case (empty piece) returns 0, and the answer for a piece is the maximum over its children.

Edge cases fall out directly: if `k` exceeds the string length then every character is rare, the pieces collapse to nothing, and 0 is returned; a string where all characters already meet the threshold returns its full length immediately at the top level; and pieces consisting of a single repeated character (like "aaa" with `k = 3`) are accepted by the no-rare-character check without further splitting.

**Complexity:** `O(26·n)` time, `O(n)` space.
