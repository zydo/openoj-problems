# Solutions — Close Enough Letter Counts

## One frequency-difference array

Maintain 26 signed counters, one for each lowercase letter. Increment a letter's counter for every occurrence in `word1` and decrement it for every occurrence in `word2`, so each final counter is exactly the frequency difference between the two words.

The two words have close enough letter counts precisely when every counter has absolute value at most `3`. Checking the fixed-size array after the scan also handles letters absent from either word without any special case.

**Complexity:** `O(n)` time and `O(1)` space.
