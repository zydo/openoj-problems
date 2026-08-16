# Solutions — Longest Duplicate Substring

## Binary Search on Length with Double Rabin-Karp Hashing

The key structural fact is monotonicity: if a duplicated substring of length L exists, then prefixes of it give duplicated substrings of every length below L. So the set of feasible lengths is a prefix of 1..n, and binary search can find the largest feasible length. Each probe tests one candidate length L and returns the starting index of some duplicate if one exists, or -1 otherwise; the search records the best length and start seen so far and returns that window at the end.

The feasibility check is Rabin-Karp. All window hashes are computed incrementally: after seeding the hash of the first window, each slide removes the leftmost character's contribution (precomputed powers of the base) and appends the incoming character, so every window hash costs O(1). Two independent polynomial hashes (mod 10^9+7 and 10^9+9, base 26) form the key, which makes accidental collisions astronomically unlikely. As an extra safety net the code still stores the list of start positions per hash key and compares the actual windows character by character when a key repeats, so a hash collision can never produce a wrong answer — the double hash simply keeps such verifications from ever happening in practice.

Edge cases: length 0 is never probed as a success (the check returns -1 for it), and if no length works the answer is the empty string, handled by best_length staying 0. Overlapping occurrences are naturally supported because the check only compares windows, not disjoint positions. Each probe is O(n) hash work plus O(L) per verified duplicate, and there are O(log n) probes.

**Complexity:** `O(n log n)` time, `O(n)` space.
