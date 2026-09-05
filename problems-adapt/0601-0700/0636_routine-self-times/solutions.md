# Solutions — Routine Self Times

## Replaying The Trace On A Stack

The trace already describes a stack discipline, so the algorithm is to run that
stack forward and bill each unit of time to whoever owned it. Every stack entry
carries two things: which routine it belongs to, and the unit at which it most
recently gained the processor. The invariant is simply that time passing belongs
to the entry on top.

A `start` event at unit `t` is a handover. Before pushing anything, the entry
currently on top is paid for the stretch it just ran: `t - resume` units, which
covers everything from where it resumed up to the unit before `t`, since the new
entry takes `t` itself. Then the new entry is pushed with resume time `t`.

An `end` event at unit `t` closes the top entry, and here the convention is
inclusive — the entry runs through the finish of `t`, so it collects
`t - resume + 1`. Whatever is underneath cannot restart before the next unit, so
its resume time becomes `t + 1`.

Both amounts are added into the answer slot named by the entry's routine number,
which is what makes repeated and recursive entries fall out for free: two open
entries of one routine are separate stack frames with separate resume times, but
their earnings land in the same slot. Nothing has to detect recursion.

Example 1 in four steps:

1. `0:start:0` — the stack is empty, so nobody is paid; push routine 0 with
   resume time 0.
2. `1:start:3` — routine 0 has run units 0 through 2, so it collects
   `3 - 0 = 3`; push routine 1 with resume time 3.
3. `1:end:4` — routine 1 collects `4 - 3 + 1 = 2` and pops; routine 0 underneath
   resumes at unit 5.
4. `0:end:6` — routine 0 collects `6 - 5 + 1 = 1` and pops, leaving totals
   `[5, 2]`.

Idle stretches take care of themselves. In Example 3 the machine does nothing
before unit 2 and nothing between units 4 and 5; both times the stack is empty
when the next `start` arrives, so no one is billed and no unit is invented.

Each event is split, converted and processed once, with a push or a pop and a
constant amount of arithmetic. The answer array has one slot per routine and the
stack never holds more entries than there are events.

**Complexity:** `O(L)` time and `O(n + L)` space for a trace of `L` events.
