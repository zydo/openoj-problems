# Phone Numbers In Proper Form

## Description

Lines of candidate phone numbers arrive on standard input, one
candidate per line, with no leading or trailing spaces. A number is
well formed when it matches one of exactly two shapes: three digits, a
hyphen, three digits, a hyphen, four digits — or three digits in
parentheses followed by a space and the same seven-digit run. Print the
well-formed lines in order and drop the rest.

### Example 1

```text
Input:
987-123-4567
123 456 7890
(123) 456-7890
Output:
987-123-4567
(123) 456-7890
Explanation: the middle line separates its digit groups with spaces
instead of one of the two allowed shapes, so only the first and third
lines survive.
```

### Constraints

- The file holds between 1 and 1000 lines.
- Each line is 1 to 30 printable ASCII characters.
- Lines carry no leading or trailing whitespace.
