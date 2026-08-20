# Solutions — Most Tasks Done, One Per Day

## Day sweep with a min-heap of closing days

Work by urgency: among the windows open today, the one closing soonest is
the most perishable, so it should get the day. Sort the windows by opening
day and advance a clock `day`. Each day, push the closing day of every
window that has opened (`opening <= day`) into a min-heap; pop the entries
whose closing day already slipped past — those tasks are lost whatever we
do — and if anything remains, spend the day on the soonest-closing window
and count it.

Optimality follows an exchange argument: take any optimal schedule and look
at its earliest conflict; trading the later-closing window for the
earlier-closing one keeps everything feasible, since any future day that
could have held the earlier-closing window holds the other just as well.
Repeating the trade converts the optimal schedule into the greedy one
without dropping an attendance.

The loop keeps going while unprocessed windows or open ones remain. Idle
days cost nothing: whenever the heap is empty the clock jumps straight to
the next window's opening day (`day = max(day, windows[i][0])`), so the
sweep only iterates on days where something can actually be worked or
filtered. Every window is pushed and popped at most once, so heap work
stays logarithmic per window overall.

Overlaps resolve by the earliest-closing rule, windows that became
unreachable (closing day already behind the clock) drop out silently, and a
day where everything open has expired just advances the clock. On the
second example, three copies of `[1, 2]` open together on day 1: two of
them consume days 1 and 2, and the third expires.

**Complexity:** `O((N + D) log N)` time, `O(N)` space, where `N` is the
number of windows and `D` the latest closing day.
