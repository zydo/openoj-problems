# Solutions — Number of Zero-Filled Subarrays

## Count subarrays ending at each index

A zero-filled subarray is determined entirely by the run of consecutive
zeros it lives in, so the array decomposes into maximal zero runs that are
counted independently. A run of length `L` contains exactly `L * (L + 1) / 2`
zero-filled subarrays — one for each choice of start and end inside the run.

Rather than finding runs and applying the formula, sweep once with a streak
counter: when nums[i] is 0 the number of zero-filled subarrays ending at i
is one more than the count ending at i-1, so extend the streak and add it to
a 64-bit total; any nonzero element resets the streak. Every subarray is
counted at its final index, so the running total is the answer. With n up to
10⁵ the all-zeros array yields about 5 * 10⁹ subarrays, past the 32-bit
range, which is what makes the wide accumulator necessary.

**Complexity:** `O(n)` time, `O(1)` space.
