# Solutions — Sightlines in a Queue

## Monotonic Stack from the Right

Person `i` gets a clear view of person `j > i` exactly when every head
strictly between them is lower than both endpoints. A right-to-left sweep
with a height stack kept increasing from top to bottom turns that into
bookkeeping: the stack holds, for the suffix already processed, precisely
those people who remain visible to a shorter newcomer from the left — each
one was a right-to-left height record until something displaced it. As
`heights[i]` walks in, every stack entry below it is popped and tallied,
since each of those people has only shorter people standing before `i`;
whatever then survives on the stack has a top that is the first person
right of `i` taller than `i`, whom `i` sees across all the heads just
popped, while everything beyond that top stays hidden behind it. In the
row `6, 2, 9, 4, 7, 3`, when person 0 arrives the stack holds 9, 2 from
bottom to top: the shorter head pops (person 1), and the surviving 9
contributes the second visible person — with persons 3, 4, and 5 all
hidden behind that 9.

After counting, `heights[i]` joins the stack so people further left can
count it in turn. Discarding the popped entries is sound: nobody to the
left of `i`, being shorter or taller, can ever see past `i` to someone
`i` already overshadowed. All heights are distinct, so the strict `<` in
the pop test needs no tie handling.

Every index is pushed once and popped at most once, so the nested `while`
inside the `for` still totals linear work. The rightmost person sees
nobody (empty stack, nothing to pop), and a strictly shrinking row leaves
everyone seeing exactly one neighbor — both emerge from the same
mechanism.

**Complexity:** `O(n)` time, `O(n)` space.
