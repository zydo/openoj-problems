# Score Of A Run-Once Program

## Description

Two equally long arrays, `instructions` and `values`, describe a tiny
program. A run starts at index `0` with a score of `0` and executes one
instruction at a time:

- `"add"` at index `i` adds `values[i]` to the score and continues at
  index `i + 1`.
- `"jump"` at index `i` ignores the score and continues at index
  `i + values[i]`.

The run stops the moment one of two things happens: the next index falls
outside `0..n-1`, or the next index was already executed earlier in this
run — an instruction never runs twice. A stopped instruction is not
executed.

Return the score the run finishes with.

### Example 1

```text
Input: instructions = ["add","jump","add","add","jump"], values = [2,1,3,4,-9]
Output: 9
Explanation: Index 0 adds 2, index 1 jumps to 2, index 2 adds 3, index 3
adds 4, and index 4 jumps to -9, which is outside the program. The run
ends there with a score of 2 + 3 + 4 = 9.
```

### Example 2

```text
Input: instructions = ["add","jump","add","jump","add"], values = [3,2,1,-3,4]
Output: 3
Explanation: Index 0 adds 3, index 1 jumps to 3, and index 3 jumps to 0 —
already executed, so the run stops without running anything again. The
score stays at 3.
```

### Example 3

```text
Input: instructions = ["jump","add","add"], values = [5,10,10]
Output: 0
Explanation: The very first instruction jumps straight past the end of
the program, so nothing is ever added and the score is 0.
```

### Constraints

- `n == instructions.length == values.length`
- `1 <= n <= 10⁵`
- `instructions[i]` is either `"add"` or `"jump"`.
- `-10⁵ <= values[i] <= 10⁵`

## Hints

### Hint 1

Nothing about the run is random — just replay it exactly as the rules say,
carrying one score and one current index.

### Hint 2

Keep a per-index flag marking what has already executed, and treat a
landing on a marked index (or outside the program) as the end of the run.
Because each index runs at most once, the whole replay is a single linear
pass.
