# Shortest Coverage Word

## Description

You are given a string `licensePlate` and an array of strings `words`.
Find the shortest word in `words` that covers `licensePlate`.

A word covers the plate when it contains every letter the plate asks for.
To build that demand from the plate: drop its digits and spaces, and fold
the remaining letters to a single case. If a letter shows up more than
once in the plate, the covering word must contain that letter at least as
many times.

For instance, `licensePlate = "aBc 12c"` demands one 'a', one 'b', and two
'c's (case ignored). Words such as `"abccdef"`, `"caaacab"`, and `"cbca"`
all satisfy that demand.

Return the shortest word in `words` that covers the plate. It is
guaranteed that at least one such word exists. If several words of the
minimum length all cover the plate, return whichever of them appears
first in `words`.

### Example 1

```text
Input: licensePlate = "2n1 RaN", words = ["rain","gran","granny","grannie"]
Output: "granny"
Explanation: licensePlate demands 'n' twice, one 'r', and one 'a'
(ignoring case and digits). "rain" and "gran" each hold only one 'n', so
neither covers the plate. "granny" holds two 'n's along with the 'r' and
'a', and is shorter than "grannie", the only other word that covers it.
```

### Example 2

```text
Input: licensePlate = "1x3 789", words = ["toxic","next","exit","flux"]
Output: "next"
Explanation: licensePlate demands only the letter 'x'. Every word here
contains an 'x', and "next", "exit", and "flux" tie for shortest at four
letters. "next" is the answer because it is the first of the three to
appear in words.
```

### Constraints

- `1 <= licensePlate.length <= 7`
- `licensePlate` contains digits, letters (uppercase or lowercase), or the
  space `' '`.
- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 15`
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

Count only the letters of each word (folding case as needed). A word
becomes the new best answer when it is shorter than the current best and
its count of every letter meets or exceeds that letter's count in
`licensePlate`.
