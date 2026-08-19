# Solutions — Collision Survivors

## Stack Simulation

Read the row left to right, carrying a stack of everything still standing. The
invariant is that the stack is settled: no two of its members can ever reach
each other. That makes each arrival cheap to process, because a newcomer starts
to the right of every survivor and can therefore only reach the topmost one —
and only when the newcomer is headed left while the top is headed right. Any
other pairing is diverging or parallel, which is precisely the guard
`mover < 0 < stack[-1]`.

An encounter is settled by strength alone. A top that is outweighed is dropped
and the newcomer moves on to whatever was behind it; matched strengths drop the
top and finish the newcomer too; a top that outweighs the newcomer ends the
matter with the newcomer gone. Whatever is left of the newcomer is pushed. A
single strong leftward body can therefore clear an arbitrarily long tail in one
arrival — `[2,3,1,-9,-4]` is that case, with `-9` taking out `1`, `3` and `2`
before `-4` arrives behind it and stays.

Rightward bodies never enter the loop at all, and neither does a leftward body
arriving on an empty stack or on a leftward top; those go straight on. Since
every body is pushed once and dropped at most once, the total work is linear no
matter how lopsided any individual arrival turns out to be.

**Complexity:** `O(n)` time, `O(n)` space.
