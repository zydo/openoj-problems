# Ordering Words by Length

## Description

A sentence arrives as words separated by single spaces; its opening word
starts with a capital letter and every other word is lowercase. Put the
words in order of increasing length, letting words of equal length keep
the relative order they had in the input. Then re-apply the sentence
formatting to the result: the new first word gets a capital initial, and
all remaining words are lowercase.

Return the rearranged sentence in that format.

### Example 1

```text
Input: text = "Mice eat cheese"
Output: "Eat mice cheese"
Explanation: The words measure 4, 3 and 6 letters, so they come out
shortest first, and the new opening word takes a capital initial.
```

### Example 2

```text
Input: text = "Jingle bells jingle all the way"
Output: "All the way bells jingle jingle"
Explanation: The three 3-letter words keep their input order, then comes
"bells", then the two 6-letter words in input order. The first word of
the result is capitalized.
```

### Example 3

```text
Input: text = "A quick brown fox jumps"
Output: "A fox quick brown jumps"
Explanation: The 5-letter words "quick", "brown" and "jumps" preserve
their original order among themselves.
```

### Constraints

- `text` begins with a capital letter and otherwise contains only
  lowercase letters and single spaces between words.
- `1 <= text.length <= 10⁵`

## Hints

### Hint 1

Split the sentence into its words first; a sort keyed on word length
alone is all the ordering you need.

### Hint 2

A stable sort keeps equal-length words in input order by itself, so no
explicit position tiebreaker is required — remember to lowercase the
first word before sorting and re-capitalize the winner afterwards.
