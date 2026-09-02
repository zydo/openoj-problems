# Distinct Substrings With Balanced Digit Counts

## Description

Call a substring of a digit string `s` balanced when every digit it
contains occurs the same number of times — `"404"` (two 4s against one 0)
is not, while `"404040"` (three of each) is. Given `s`, count its distinct
balanced substrings: a piece of text enters the count once no matter at how
many positions it occurs.

### Example 1

```text
Input: s = "202"
Output: 4
Explanation: The balanced substrings are "0", "2", "02", and "20". The
substring "2" shows up at two positions but enters the count only once, and
"202" itself is left out because its 2s outnumber its 0.
```

### Example 2

```text
Input: s = "5566"
Output: 6
Explanation: The qualifying pieces are "5", "6", "55", "56", "66", and
"5566". The doubles "55" and "66" are balanced because their single digit
type repeats twice, and the full string pairs two copies of each digit.
```

### Example 3

```text
Input: s = "7"
Output: 1
Explanation: A one-digit string has exactly one substring, and a lone digit
repeats evenly by definition.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of digit characters.

## Hints

### Hint 1

The length limit makes an all-pairs sweep affordable: fix a start index,
then extend the substring one digit at a time.

### Hint 2

While extending, track every digit's running count together with two
aggregates — how many distinct digits have appeared and the largest count
among them. All the counts are equal exactly when those two numbers
multiply out to the current length.

### Hint 3

Duplicates are the remaining trap: identical text occurring at several
positions still counts once. A set of seen substrings — or of their rolling
hashes — absorbs the repeats.
