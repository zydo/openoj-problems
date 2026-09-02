# Typing With A Reversing Key

## Description

One key on your keyboard misbehaves: pressing the `i` key puts nothing on
the screen. Instead, it flips the entire text written so far into its
reverse. Every other key works normally, adding its own character to the
end of the text.

You type the characters of a string `s` from left to right on this
keyboard.

Return the text that is on the screen once the whole string has been
typed.

### Example 1

```text
Input: s = "dining"
Output: "ndng"
Explanation: The 'd' appears as typed, giving "d". The first 'i' reverses
that text, which still reads "d". The 'n' extends it to "dn". The second
'i' reverses the text again, making it "nd". Then 'n' and 'g' are appended
in order, leaving "ndng" on the screen.
```

### Example 2

```text
Input: s = "skiing"
Output: "skng"
Explanation: The letters 's' and 'k' accumulate normally into "sk". The
next key reverses the text to "ks", and the one after that reverses it
back to "sk". Finally 'n' and 'g' are appended, so the screen shows
"skng".
```

### Example 3

```text
Input: s = "galaxy"
Output: "galaxy"
Explanation: The reversal key is never pressed, so the characters simply
collect in the order they are typed.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.
- `s[0] != 'i'`

## Hints

### Hint 1

Replay the typing one character at a time: hold the current text in a
buffer, append each ordinary character, and reverse the whole buffer
whenever the pressed character is `i`.
