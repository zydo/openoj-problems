# Solutions — Basic Calculator

## Sign-Tracking Stack

The expression contains only additions, subtractions, and parenthesized groups, so the whole problem reduces to summing signed terms. Scan the string once while carrying three pieces of state: the running `result` of the current (sub)expression, the pending `sign` for the next term, and the multi-digit `num` currently being assembled. Digits extend `num` via `num = num * 10 + digit`; an operator folds the finished number in as `result += sign * num` and then records the sign for the term that follows.

Parentheses are handled by saving and restoring context with a stack. On `(` the code pushes the current `result` and `sign` and restarts both (`result = 0`, `sign = 1`) so the inner group is evaluated as a fresh expression. On `)` the inner `num` is folded in, then the inner value is combined with the saved context in one step: the popped sign is applied to the inner result and the popped outer result is added back. Since the sign was pushed last, `stack.pop()` retrieves it first.

Unary minus needs no special casing: a `-` preceding a number or a group simply leaves `sign = -1`, and the next term or parenthesized group is folded in with that sign. Spaces match none of the digit/operator branches and are skipped implicitly. After the loop finishes, the final pending term still has to be folded in, hence `return result + sign * num`. Each character is examined exactly once and every stack operation is constant time; the stack depth equals the parenthesis nesting depth.

**Complexity:** `O(n)` time, `O(n)` space.
