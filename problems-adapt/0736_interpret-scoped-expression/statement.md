# Interpret Scoped Expression

## Description

`expression` holds a single term of a small parenthesised language. Tokens are
separated by one space, with no space at either end of the string. Return the
integer the term denotes.

Every term has one of these five shapes:

```text
17                      an integer literal, possibly negative
a2                      a name, standing for whatever it is bound to
(add T T)               the sum of two terms
(mult T T)              the product of two terms
(let n T n T ... T)     bindings, then a body term
```

A `let` carries one or more name-and-term pairs and then a body. The pairs take
hold one after another, left to right, so the term of a pair may read any name
bound before it in the same `let` — including the name that pair is itself
about to rebind. The `let` denotes whatever its body denotes, and the names it
introduced are gone once it is finished, so nothing a nested term binds can be
observed from outside it.

Reading a name yields the binding made by the nearest `let` around it that
binds that name. A name is a lowercase letter followed by any number of
lowercase letters and digits; `add`, `mult` and `let` are reserved words and
never occur as names. Inputs are always well formed.

### Example 1

```text
Input: expression = "(let a 5 (add a (let a 2 b 7 (mult a b))))"
Output: 19
Explanation: The inner let rebinds a to 2 and multiplies by b, giving 14. That
rebinding is confined to the inner term, so the outer a is still 5 and the sum
is 19.
```

### Example 2

```text
Input: expression = "(let p 6 q (mult p p) (add p q))"
Output: 42
Explanation: q is bound after p, so its term may read p: q becomes 36, and the
body adds 6 to it.
```

### Example 3

```text
Input: expression = "(let k 2 k (add k k) (mult k -3))"
Output: -12
Explanation: The second pair rebinds k using the value the first pair gave it,
so k moves from 2 to 4 before the body runs.
```

### Constraints

- `1 <= expression.length <= 2000`
- Tokens are separated by exactly one space, and the string neither starts nor
  ends with one.
- Every value produced along the way, and the answer itself, fits in a signed
  32-bit integer.
- The input parses and denotes an integer.

## Hints

### Hint 1

Split on the parentheses first — pad each `(` and `)` with spaces and split on
whitespace — and work with an index into the resulting token list. A routine
that reads one term starting at index `i` and hands back both its value and the
index just past it can be called twice in a row to read two siblings.

### Hint 2

A token that is not `(` is settled immediately: it is a name when its first
character is a lowercase letter, and an integer otherwise.

### Hint 3

Carry the current bindings as a map argument. A `let` should work on its own
copy of that map, which is what confines its bindings to itself, and should
write into that copy as it walks the pairs so later pairs see earlier ones.

### Hint 4

Inside a `let`, the only thing to decide is where the pairs stop and the body
begins. A `(` or an integer is always a term, and a lone name is the body
exactly when the next token closes the `let` — one token of lookahead settles
it.
