# Solutions — Happy Number

## Hash Set Cycle Detection

Replacing a number with the sum of the squares of its digits is a deterministic function on the positive integers, so iterating it from any starting value must eventually either reach 1 (which is a fixed point) or fall into a cycle that never contains 1. The algorithm simply runs the iteration and records every value it produces in a `seen` set: if a value repeats, the process is cycling and will never reach 1, so the number is unhappy; if the value 1 appears first, the number is happy.

Each step extracts digits with `divmod(m, 10)` and accumulates their squares, discarding the digit as it goes, so one step costs time proportional to the number of digits. The sequence stabilizes quickly in magnitude: for any 32-bit input, the first step lands at most at 810 (ten digits of 9 give 10 × 81), and every later value stays below that, so both the loop and the set remain small regardless of the starting size.

The loop condition `while n != 1 and n not in seen` handles the happy case (`n = 1` exits and the final comparison returns true) and the unhappy case (a revisit exits with `n != 1`) with the same check, and the input 1 itself returns true without a single step.

**Complexity:** `O(log n)` time, `O(log n)` space.
