# Solutions — Elapsed Clock Seconds

## Seconds since midnight

Read the two-digit hour, minute, and second fields out of each reading and
collapse it to `3600 * hour + 60 * minute + second` seconds since midnight.
The answer is the end reading's count minus the start reading's count.

Both readings are valid and `endTime` never precedes `startTime`, so the
difference is a non-negative integer smaller than a full day.

**Complexity:** `O(1)` time, `O(1)` space.
