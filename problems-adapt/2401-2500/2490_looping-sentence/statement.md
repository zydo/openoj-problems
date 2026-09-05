# Looping Sentence

## Description

A sentence is a list of words separated by single spaces, with no leading
or trailing spaces. Words consist only of uppercase and lowercase English
letters, and the two cases are considered different characters.

Call a sentence **looping** when it closes on itself:

- The last character of every word equals the first character of the word
  that follows it.
- The last character of the final word equals the first character of the
  first word.

For example, `"racecar racecar racecar"`, `"hello olleh"`, and `"aa bb aa"`
join their words in a matching chain, while `"cat tac cat"` fails because
its final word does not hand back to its first.

Given a string `sentence`, return `true` if it is looping and `false`
otherwise.

### Example 1

```text
Input: sentence = "racecar racecar racecar"
Output: true
Explanation: Every word is the palindrome "racecar", so each junction
matches 'r' to 'r' and the final word's last 'r' meets the first word's
first 'r'.
```

### Example 2

```text
Input: sentence = "hello olleh"
Output: true
Explanation: "hello" hands off with its last 'o' to "olleh"'s first 'o',
and "olleh" closes the loop with its last 'h' against "hello"'s first 'h'.
```

### Example 3

```text
Input: sentence = "aa bb aa"
Output: false
Explanation: The junction between "aa" and "bb" compares 'a' against 'b',
so the chain is already broken before the wrap is even checked.
```

### Example 4

```text
Input: sentence = "cat tac cat"
Output: false
Explanation: Every internal junction matches ('t' to 't', then 'c' to 'c'),
but the last word "cat" ends in 't' while the first word "cat" begins with
'c', so the sentence does not close on itself.
```

### Constraints

- `1 <= sentence.length <= 500`
- `sentence` consists only of lowercase and uppercase English letters and
  spaces.
- Words in `sentence` are separated by a single space, with no leading or
  trailing spaces.

## Hints

### Hint 1

Each space is a junction: the character right before it is one word's last
character and the character right after it is the next word's first
character. Compare the two.

### Hint 2

The wrap condition needs only the very first character of the sentence and
the very last character of the sentence.
