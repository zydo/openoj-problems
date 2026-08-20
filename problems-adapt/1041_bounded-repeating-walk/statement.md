# Bounded Repeating Walk

## Description

A walker stands at the origin `(0, 0)` of an infinite grid, facing north — the
positive `y` direction. East is the positive `x` direction; west and south are
the corresponding negatives.

A string `instructions` steers the walker, one character per move:

- `"G"`: advance one unit in the current heading.
- `"L"`: rotate a quarter turn to the left (counter-clockwise).
- `"R"`: rotate a quarter turn to the right (clockwise).

The walker runs through the string once, then starts the same string over, and
over, forever.

Return `true` if some circle, however large, contains the walker's path for all
time; return `false` if the walk escapes every bounded region.

### Example 1

```text
Input: instructions = "GGRRGG"
Output: true
Explanation: Two steps north to (0, 2), an about-face, two steps back to
(0, 0). Each pass closes on itself, so the walk re-traces the same segment
forever.
```

### Example 2

```text
Input: instructions = "GGG"
Output: false
Explanation: Every pass adds three more steps north in the same heading — the
walker marches off without end.
```

### Example 3

```text
Input: instructions = "GGRR"
Output: true
Explanation: The first pass ends at (0, 2) but facing south, so the next pass
walks those two units back to the origin. The walk shuttles along one segment
of length 2 forever.
```

### Constraints

- `1 <= instructions.length <= 100`
- `instructions[i]` is `'G'`, `'L'`, or `'R'`.

## Hints

### Hint 1

Run the string once and summarize the outcome as two things: where the walker
ended up, and which way it then faces.

### Hint 2

Facing north again and displaced? Every pass then repeats the identical
displacement and the walk drifts. Any other ending — back at the origin, or
facing some other way — keeps the walk inside a bounded region.
