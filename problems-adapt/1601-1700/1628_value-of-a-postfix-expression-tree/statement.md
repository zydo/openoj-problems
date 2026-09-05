# Value of a Postfix Expression Tree

## Description

A binary expression tree encodes an arithmetic expression in its shape:
every leaf stores a non-negative integer operand, and every internal
node stores one of the operators `+`, `-`, `*`, `/`, applying it to the
values produced by its left and right subtrees.

You receive `postfix`, the postfix (Reverse Polish) token list of such
an expression — each operator is written after the operands it
combines, so `4*(5-(7+2))` is spelled `["4","5","7","2","+","-","*"]`.
Return the integer value the expression tree evaluates to.

This bundle is derived from a class-design exercise: the original asks
for a `Node` interface exposing an `evaluate()` method, leaf and
operator subclasses implementing it, and a
`TreeBuilder.buildTree(postfix)` that assembles the tree from the
tokens. This judge's typed-value invocation vocabulary can only accept
and compare plain values — it has no way to take a hand-designed class
hierarchy as a return value — so `evaluatePostfixTree` instead returns
the one integer that building and then evaluating that tree produces:
fold `postfix` with a standard operand stack (push every operand; on an
operator, pop the top two operands, apply the operator, push the result
back) and report the single value remaining once all tokens are
consumed. Materializing actual `Node` objects is an implementation
detail, not part of the contract — any approach honoring the same
evaluation order is acceptable.

### Example 1

![diagram](figures/1628-1.svg)

```text
Input: postfix = ["3","4","+","2","*","7","/"]
Output: 2
Explanation: The tokens spell ((3+4)*2)/7, and 14/7 comes to 2.
```

### Example 2

![diagram](figures/1628-2.svg)

```text
Input: postfix = ["4","5","2","7","+","-","*"]
Output: -16
Explanation: The tokens spell 4*(5-(2+7)), which is 4*(-4) = -16.
```

### Example 3

```text
Input: postfix = ["6","13","-","4","/"]
Output: -1
Explanation: The tokens spell (6-13)/4 = -7/4. Division truncates
toward zero, so the answer is -1 rather than the floor value -2.
```

### Constraints

- `1 <= postfix.length < 100`
- `postfix.length` is odd.
- Every element of `postfix` is either one of the operators `+`, `-`,
  `*`, `/`, or the decimal string of a non-negative integer operand.
- An operand token's integer value is at most `10^5`.
- `postfix` always forms a valid, well-formed postfix expression:
  folding it left to right never underflows the operand stack, and
  exactly one value is left when the tokens are exhausted.
- Division truncates toward zero and never divides by zero.
- The final result, and every intermediate value along the way, is at
  most `10^9` in absolute value.

## Hints

### Hint 1

Sweep the tokens once with a single operand stack: an operand goes
straight onto the stack, and an operator pops the two topmost operands,
combines them, and pushes the outcome.

### Hint 2

When the tokens run out, the lone value still on the stack is the
answer — precisely what a bottom-up walk of the expression tree would
compute, with no nodes ever built.
