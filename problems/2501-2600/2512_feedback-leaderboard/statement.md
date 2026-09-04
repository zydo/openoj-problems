# Feedback Leaderboard

## Description

Two word lists are given: `positive_feedback` and `negative_feedback`,
collecting the words that count as praise and the words that count as
criticism. No word appears in both lists.

Every student starts at zero points. Each mention of a positive word in
a student's report adds `3` points, and each mention of a negative word
costs `1` point.

There are `n` reports, given as a 0-indexed string array `report` and a
0-indexed integer array `student_id`: the writer of `report[i]` is the
student whose ID is `student_id[i]`, and every student has a unique ID.

Given an integer `k`, order the students by points from highest to
lowest — students with equal points are ordered by ascending ID — and
return the IDs of the first `k` students in that order.

### Example 1

```text
Input: positive_feedback = ["clear","sharp"], negative_feedback = ["vague"], report = ["a clear and sharp mind","clear but vague at times","sharp sharp work"], student_id = [7,3,12], k = 2
Output: [7,12]
Explanation: Student 7 earns 6 points (two positive words), student 12
also earns 6 points (the word sharp twice), and student 3 nets 2 (one
positive, one negative). Students 7 and 12 tie at 6, and the lower ID
ranks first.
```

### Example 2

```text
Input: positive_feedback = ["calm"], negative_feedback = ["loud"], report = ["loud but calm","calm calm","loud"], student_id = [5,9,2], k = 3
Output: [9,5,2]
Explanation: Student 9 scores 6, student 5 nets 2 (one praise, one
criticism), and student 2 scores -1. The full order is 9, then 5, then 2.
```

### Example 3

```text
Input: positive_feedback = ["fast"], negative_feedback = ["slow"], report = ["fast fast fast","slow slow","walking pace here"], student_id = [10,4,8], k = 1
Output: [10]
Explanation: Only the top student is requested: student 10 with 9 points
comfortably leads student 8's 0 and student 4's -2.
```

### Constraints

- `1 <= positive_feedback.length, negative_feedback.length <= 10⁴`
- `1 <= positive_feedback[i].length, negative_feedback[j].length <= 100`
- `positive_feedback[i]` and `negative_feedback[j]` consist of lowercase
  English letters only.
- No word is in both `positive_feedback` and `negative_feedback`.
- `n == report.length == student_id.length`
- `1 <= n <= 10⁴`
- `report[i]` consists of lowercase English letters and spaces `' '`.
- Consecutive words in `report[i]` are separated by a single space.
- `1 <= report[i].length <= 100`
- `1 <= student_id[i] <= 10⁹`
- All values in `student_id` are unique.
- `1 <= k <= n`

## Hints

### Hint 1

Put the praise words and the criticism words into two separate hash sets
so any word can be classified instantly.

### Hint 2

Score each report word by word: `+3` for a set member of the praise
list, `-1` for the criticism list, and ignore everything else — repeated
words count every time they appear.

### Hint 3

Sort the students on (points descending, ID ascending) and take the
first `k` IDs; negating the points makes one ascending sort do both.
