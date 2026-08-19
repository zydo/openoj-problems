# Ranked Prefix Suggestions

## Description

Maintain historical sentences and the number of times each has been entered.
Characters arrive one at a time. After an ordinary character, return up to
three historical sentences beginning with everything typed in the current
session. A `#` ends and records the session text, increases its frequency by
one, returns an empty list, and resets the current prefix.

Rank suggestions by decreasing frequency, then by increasing ASCII order.

Implement the `PrefixSuggester` class:

- `PrefixSuggester(String[] sentences, int[] times)` loads the initial history.
- `List<String> typeCharacter(char c)` processes one lowercase letter, space,
  or `#` and returns the required suggestions.

### Example 1

```text
Input:
["PrefixSuggester", "typeCharacter", "typeCharacter", "typeCharacter", "typeCharacter"]
[[["go home", "good day", "goal", "go"], [4, 3, 3, 2]], ["g"], ["o"], ["a"], ["#"]]
Output: [null, ["go home", "goal", "good day"], ["go home", "goal", "good day"], ["goal"], []]
```

### Example 2

```text
Input:
["PrefixSuggester", "typeCharacter", "typeCharacter", "typeCharacter", "typeCharacter", "typeCharacter", "typeCharacter"]
[[["sun", "sand", "sea"], [2, 2, 1]], ["s"], ["e"], ["#"], ["s"], ["e"], ["#"]]
Output: [null, ["sand", "sun", "sea"], ["sea"], [], ["sand", "sun", "se"], ["se", "sea"], []]
Explanation: Finishing "se" records it, so it appears during the next session.
```

### Constraints

- `n == sentences.length == times.length`
- `1 <= n <= 100`
- `1 <= sentences[i].length <= 100`
- `1 <= times[i] <= 50`
- Each typed character is a lowercase English letter, a space, or `#`.
- Every session ends with `#` and contains between `1` and `200` characters.
- Words are separated by single spaces.
- At most `5000` calls are made.

## Hints

### Hint 1

A trie shares storage across sentence prefixes and lets the current prefix be
represented by one node.

### Hint 2

Buffer typed characters even after the current trie path becomes missing,
because `#` must still record the entire sentence.

### Hint 3

Collect terminal sentences below the current node, sort by `(-frequency,
sentence)`, and return the first three.
