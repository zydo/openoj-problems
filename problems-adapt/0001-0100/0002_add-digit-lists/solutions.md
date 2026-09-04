# Solutions — Add Digit Lists

## Digit-by-digit addition with carry

Storing the ones digit at the head is what makes this easy: column addition
also proceeds from the ones digit outward, so walking both lists forward in
step visits the columns in exactly the order the arithmetic needs. Add the two
current digits and the incoming carry, append the ones digit of that total to
the result, and carry the tens digit into the next column. Nothing is reversed
and nothing is converted to an integer.

A dummy head anchors the result so the first node needs no special case, and
`tail` always points at the last node built. The loop condition
`while first or second or carry` folds every edge case into one test: a list
that has run out simply contributes nothing, and a carry still standing after
both lists end keeps the loop alive for one more node — which is how `5 + 5`
produces `[0, 1]`. `divmod(total, 10)` splits each column total into the new
carry and the digit to append.

When the loop exits, both inputs are exhausted _and_ the carry is zero, so
`dummy.next` is the finished sum. It has at most `max(m, n) + 1` nodes, the
extra one being that final carry.

**Complexity:** `O(max(m, n))` time, `O(max(m, n))` space.
