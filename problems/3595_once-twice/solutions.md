# Solutions — Once Twice

## Hash Map Frequency Counting

The input has an extremely rigid structure: exactly one value appears once, exactly one appears twice, and every other value appears exactly three times. So identifying the two special values needs no arithmetic at all — one pass with a Counter tallies how often each distinct value occurs, and a second pass over the (few) distinct keys picks out the key with count 1 as the first answer and the key with count 2 as the second.

The scan is a single linear walk over the array, and the frequency table holds at most one entry per distinct value. Python's dict hashes the integers directly, so the full signed 32-bit range, including negatives, needs no special casing. The result is returned in the required order [appears-once, appears-twice].

A per-bit automaton tracking each bit's count modulo 3 could bring space down to O(1), but with at most a handful of distinct values in practice the hash map is already linear-time and simpler; the canonical solution uses the Counter.

**Complexity:** `O(n)` time, `O(n)` space.
