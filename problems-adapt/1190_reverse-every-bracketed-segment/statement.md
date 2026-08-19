# Reverse Every Bracketed Segment

## Description

You are given a string `s` of lowercase letters and round brackets. The
brackets come in matched pairs, and each pair marks a segment whose contents
must be reversed, inner pairs before the pairs around them.

Unwind all the pairs and return the string that remains — brackets included
nowhere in it.

### Example 1

```text
Input: s = "(stop)"
Output: "pots"
Explanation: One pair wraps the whole string, so everything flips.
```

### Example 2

```text
Input: s = "(no(is)op)"
Output: "poison"
Explanation: The inner pair turns "is" into "si", so the outer pair now wraps
"nosiop", which flips to "poison".
```

### Example 3

```text
Input: s = "d((on))e"
Output: "done"
Explanation: "on" flips to "no", and the second flip undoes the first — double
wrapping leaves the text in its original order.
```

### Constraints

- `1 <= s.length <= 2000`
- `s` contains lowercase English letters and brackets only
- every bracket in `s` is matched

## Hints

### Hint 1

Each matched pair bounds one stretch of text to flip; think about the order
the flips must happen in.

### Hint 2

Reversal undoes itself, so nesting composes: flipping an inner stretch and
then flipping the outer stretch that contains it settles every character in
one sweep, no matter how deep the pile.

### Hint 3

Keep a stack of text fragments that mirrors the nesting: an opening bracket
starts a fresh fragment, letters land in the topmost one, and a closing
bracket pops it, flips it, and appends it below.
