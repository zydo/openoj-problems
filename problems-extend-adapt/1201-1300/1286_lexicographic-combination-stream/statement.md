# Lexicographic Combination Stream

## Description

Build an iterator that streams every length-`length` combination of a set
of letters, one at a time, in lexicographical order.

Implement the `CombinationStream` class:

- `CombinationStream(string letters, int length)` initializes the object
  with `letters` — a string of distinct lowercase English letters already
  in sorted order — and the combination `length`.
- `string next()` returns the next combination in lexicographical order.
- `boolean hasNext()` returns `true` if a next combination exists, or
  `false` otherwise.

### Example 1

```text
Input:
["CombinationStream","next","hasNext","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["abcd",2],[],[],[],[],[],[],[],[],[],[],[]]
Output: [null,"ab",true,"ac","ad",true,"bc",true,"bd",true,"cd",false]
Explanation: The six length-2 combinations of "abcd" in order are "ab",
"ac", "ad", "bc", "bd", and "cd". Each next() call hands out the following
one, and hasNext() turns false once "cd" has been delivered.
```

### Constraints

- `1 <= length <= letters.length <= 15`
- Every character of `letters` is unique and lowercase, already sorted.
- At most `10⁴` calls are made to `next` and `hasNext`.
- Every call to `next` is guaranteed to be valid.

## Hints

### Hint 1

Treat each combination as a bitmask over the letter positions and count
through them.

### Hint 2

Alternatively, keep an index per chosen position and advance the rightmost
index that can still move — the classic next-combination step.
