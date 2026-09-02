# Solutions — Price Drop Streaks

## Count streaks ending at each day

Maintain the length of the drop streak ending at the current day. Extend it when the previous price is exactly one greater; otherwise reset it to one.

That run length is precisely the number of valid streaks ending at the current day, so add it to a 64-bit total.

**Complexity:** `O(n)` time and `O(1)` space.
