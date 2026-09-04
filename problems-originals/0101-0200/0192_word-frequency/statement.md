# Word Frequency

## Description

Write a bash script to calculate the frequency of each word in a text file `words.txt`.

For simplicity sake, you may assume:

- `words.txt` contains only lowercase characters and space `' '` characters.
- Each word must consist of lowercase characters only.
- Words are separated by one or more whitespace characters.

Each testcase carries its own `words.txt`: the file's entire text arrives as the
`content` parameter, one string with the file's exact characters. The script's
output is returned as the list of output lines, each in the `word count` form
shown below, sorted by descending frequency.

### Example 1

```text
Input: words.txt:
the day is sunny the the
the sunny is is

Output: ["the 4", "is 3", "sunny 2", "day 1"]
Explanation: "the" occurs 4 times, "is" 3 times, "sunny" twice, and "day" once,
so the descending-frequency order is the, is, sunny, day.
```

### Constraints

- `words.txt` contains only lowercase characters and space `' '` characters.
- Each word consists of lowercase characters only.
- Words are separated by one or more whitespace characters.
- Words with the same frequency are listed in lexicographic order.

### Follow up

Could you write it in one-line using Unix pipes?
