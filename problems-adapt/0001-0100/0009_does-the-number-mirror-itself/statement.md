# Does The Number Mirror Itself

## Description

An integer mirrors itself when its decimal digits read the same from either
end. Given a signed 32-bit integer `x`, report whether `x` has that property.

### Example 1

```text
Input: x = 9889
Output: true
```

Reading 9889 left to right or right to left gives the same digit sequence.

### Example 2

```text
Input: x = -454
Output: false
```

The minus sign sits on one end only, so the reversed reading has nowhere to
put it and the two directions cannot match.

### Example 3

```text
Input: x = 80
Output: false
```

Backwards, 80 reads 08 — and no positive number is written with a leading
zero.

### Example 4

```text
Input: x = 7
Output: true
```

A one-digit number is its own mirror image.

### Constraints

- `-2³¹ <= x <= 2³¹ - 1`

### Follow-up

Can you decide it without ever building the decimal string?

### Hint 1

If you rebuild the number from its digits, only half of it needs to be
turned around — a full reversal is what risks running out of 32 bits.
