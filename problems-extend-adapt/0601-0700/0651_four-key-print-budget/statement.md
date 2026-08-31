# Four-Key Print Budget

## Description

A terminal supports exactly four keystrokes:

- `A` prints one extra `'A'` at the end of whatever is already on screen.
- `Ctrl-A` selects everything currently on screen.
- `Ctrl-C` copies the current selection into a clipboard.
- `Ctrl-V` pastes the clipboard, appending its contents to what is already
  on screen.

You get `n` keystrokes total, spent in any order you like. Return the
largest number of `'A'` characters you can have on screen once the budget
runs out.

### Example 1

```text
Input: n = 4
Output: 4
Explanation: Four keystrokes of A print four A's; no select/copy/paste
combination beats simply typing.
```

### Example 2

```text
Input: n = 8
Output: 12
Explanation: Type A three times ("AAA"), then Ctrl-A and Ctrl-C to select
and copy that block, then Ctrl-V three times. Each paste appends another
copy of "AAA" to the end, so the eight keystrokes leave
"AAA" + "AAA" + "AAA" + "AAA" on screen — twelve A's in all.
```

### Constraints

- `1 <= n <= 50`
