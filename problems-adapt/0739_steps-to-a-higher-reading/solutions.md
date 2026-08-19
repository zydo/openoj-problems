# Solutions — Steps to a Higher Reading

## Monotonic Stack of Unresolved Indices

Scan the readings from left to right while keeping a stack of indices that
have not yet found a higher value. Their readings are non-increasing from the
bottom of the stack to the top; any smaller top value would already have been
resolved by the current reading.

For each new position, pop while its reading is strictly greater than the
reading at the stack's top. The popped position's answer is the distance to
the current index. Stop at an equal or greater value, because only a strict
increase qualifies, then push the current index.

Initialize the answer array with zeros. Indices left on the stack after the
scan correctly retain zero because no later reading exceeded them.

Every index is pushed once and popped at most once, so the apparently nested
loop performs only linear total work.

**Complexity:** `O(n)` time and `O(n)` space.
