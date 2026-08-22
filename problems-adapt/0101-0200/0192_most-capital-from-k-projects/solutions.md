# Solutions — Most Capital From k Projects

## Greedy Sweep with a Max-Heap

The only decision at any point is which affordable project to finish, and
the largest-profit affordable one is always safe: finishing it can only
raise capital, the affordable collection therefore never loses a member, and
an exchange argument trades any other first choice for the maximum-profit
one without weakening any later position. So the method repeats at most `k`
times — of the projects whose requirement is met, take the biggest profit,
bank it, repeat.

Pre-sorting by requirement and sweeping one pointer keeps each pick cheap.
The moment current capital covers `projects[index][0]`, that project is
affordable for good, so its profit (negated, to flip Python's min-heap into
a max-heap) enters the heap exactly once — no project is ever inserted
twice. A pick is then a single `heappop`, preceded by draining every newly
affordable profit into the heap.

Two exits matter. The loop runs only `min(k, n)` rounds since no more than
`n` distinct projects exist, and it stops early on an empty heap: capital
too small for whatever remains means picking is over even with quota left —
exactly the second example, where a lone affordable project leaves the
capital at 3, short of the remaining requirement of 5. Every popped profit
flows into the capital counter, and with profits non-negative the running
total never regresses.

**Complexity:** `O(n log n)` time, `O(n)` space.
