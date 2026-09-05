# Every String On The Typing Path

## Description

You are given a string `target`.

A typewriter with only two keys starts with the empty string `""` shown,
and Alice operates it to spell out `target`:

- Key 1 appends the letter `"a"` to whatever the typewriter shows.
- Key 2 replaces the shown string's last letter with its successor in the
  alphabet — `"c"` becomes `"d"`, and `"z"` wraps around to `"a"`.

The screen is empty at the start, so until at least one key-1 press has
happened there is no last letter to advance.

Alice always takes the direct route: key 1 to grow the string, then key 2
just enough times to turn the fresh `"a"` into the wanted letter. List
every string the typewriter shows while she types `target`, in the order
the presses reveal them.

### Example 1

```text
Input: target = "cb"
Output: ["a","b","c","ca","cb"]
Explanation: The presses Alice makes are:

- Press key 1, and the screen shows "a".
- Press key 2, and the screen shows "b".
- Press key 2, and the screen shows "c".
- Press key 1, and the screen shows "ca".
- Press key 2, and the screen shows "cb".
```

### Example 2

```text
Input: target = "bd"
Output: ["a","b","ba","bb","bc","bd"]
Explanation: The first letter needs one key-2 press after the append,
and the second needs three, stepping "ba" up to "bd" one letter at a
time.
```

### Constraints

- `1 <= target.length <= 400`
- `target` consists only of lowercase English letters.

## Hints

### Hint 1

Each letter of the target begins life as an appended `'a'` — key 1 puts
the new position on the screen.

### Hint 2

Then key 2 advances that last position exactly `letter - 'a'` times, and
the screen after every single advance belongs in the answer.

### Hint 3

The output size is the sum over letters of `(letter - 'a' + 1)` — no
more than `26·n` strings — so playing the recipe back directly is fast
enough.
