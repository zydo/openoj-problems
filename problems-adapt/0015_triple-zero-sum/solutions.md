# Solutions — Triple Zero Sum

## Sort, then two pointers

Sort a private copy of the array first, then pin the smallest value of a
candidate triple at index `i` and hunt the other two with converging pointers
over the suffix: `left` at `i + 1`, `right` at the far end. A total under
zero needs to rise, so `left` steps right; over zero, `right` steps left; at
exactly zero the triple is recorded. The sorted order is doing double duty
here: each emitted `[nums[i], nums[left], nums[right]]` already lists its
values ascending, and marching `i` leftward to right emits the triples
themselves in lexicographic order, which is what the statement fixes.

Duplication is likewise handled by the ordering rather than by a set. Pinning
the same value twice would only rediscover the same pairs, so `i` hops over
any run equal to its predecessor. After a hit, both pointers step inward and
then skip their own runs of equal values, so one pinned `i` never emits one
pair twice. An early exit rounds it off: as soon as `nums[i] * 3 > 0`, even
the smallest remaining value is positive and nothing ahead can total zero, so
the loop stops.

`sorted(nums)` produces a fresh list and leaves the caller's data alone.
Sorting costs `O(n log n)`; each of the `n` pinned positions then runs one
linear sweep, and those sweeps dominate.

**Complexity:** `O(n²)` time, `O(n)` space.
