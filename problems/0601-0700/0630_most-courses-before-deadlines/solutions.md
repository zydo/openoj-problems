# Solutions — Most Courses Before Deadlines

## Deadline Greedy with Max-Heap Exchange

Sort by deadline. Any feasible set can be completed in this order, so each
prefix can be considered without losing an optimal schedule.

Maintain the total duration and a max-heap of selected course durations. Add a
course when the new total meets its deadline. If it would be late but is
shorter than the heap maximum, replace that longest selected course. The
number selected stays fixed while total time decreases, leaving at least as
much capacity for all later deadlines.

In the first example, durations four and two initially fit. Adding duration
three would miss deadline seven, so it replaces four and reduces the total
from six to five. The final one-day course then fits, giving three selected
courses.

Courses longer than their own deadlines never enter the heap. The final heap
size is the maximum attainable count.

**Complexity:** `O(n log n)` time and `O(n)` auxiliary space.
