# Steer a Stack to a Target Array

## Description

You are given an integer array `target` and an integer `n`. Starting
from an empty stack you may apply two operations:

- `"Push"`: read the next integer from the stream of the integers `1`
  through `n`, in order, and push it onto the stack.
- `"Pop"`: discard the integer currently on top of the stack.

The stack should end up holding the values of `target`, from bottom to
top. The moment its contents equal `target` you must stop: read nothing
further from the stream and touch the stack no further.

Return the sequence of operations that leaves `target` on the stack. If
several sequences work, any of them is valid, and the judge pins one of
them: walk the stream from `1` upward, emit `"Push"` for every value
read, follow it immediately with `"Pop"` whenever that value is not a
member of `target`, and stop as soon as the last element of `target`
has been pushed.

### Example 1

```text
Input: target = [1,4], n = 5
Output: ["Push","Push","Pop","Push","Pop","Push"]
Explanation: Read 1 and push it, so the stack reads [1]. Read 2, push
it and pop it back off. Read 3, push it and pop it. Read 4 and push it,
so the stack reads [1,4] and the sequence stops there.
```

### Example 2

```text
Input: target = [2,3,5], n = 5
Output: ["Push","Pop","Push","Push","Push","Pop","Push"]
Explanation: 1 is pushed and popped, 2 and 3 are kept, 4 is pushed and
popped, and pushing 5 completes the stack [2,3,5] from bottom to top.
```

### Example 3

```text
Input: target = [3], n = 3
Output: ["Push","Pop","Push","Pop","Push"]
Explanation: 1 and 2 are each pushed and immediately popped, and
pushing 3 completes the target.
```

### Constraints

- `1 <= target.length <= 100`
- `1 <= n <= 100`
- `1 <= target[i] <= n`
- `target` is strictly increasing.

## Hints

### Hint 1

Emit `"Push"` for every stream value you read, and follow it with
`"Pop"` exactly when that value is not in `target`. Since `target` is
strictly increasing, once its last element has been pushed the work is
done — never read a value past it.
