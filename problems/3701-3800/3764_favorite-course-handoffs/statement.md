# Favorite Course Handoffs

## Description

You are given an array `completions` of course-completion rows, one row
every time a student finishes a course. A row reads
`[student, course, date, rating]`: the student's name, the course's name,
the completion date as `YYYY-MM-DD`, and the rating the student awarded,
an integer from 1 to 5 packaged as a string. The rows come in no useful
order.

A student is a _standout_ when they finished at least 5 courses and their
ratings average at least 4. The bars are exact: `4 + 4 + 3 + 3 + 5`
averages 3.8 and misses, `4 + 4 + 4 + 4 + 4` lands exactly on 4 and
passes. For each standout, line up their finished courses by date; when
two completions fall on the same day, order those by course name
ascending — `YYYY-MM-DD` dates compare correctly as plain strings.

Every standout then votes for each _adjacent_ pair of their lineup: a run
A, B, C adds one vote to `(A, B)` and one to `(B, C)`. Only next-door
steps count; taking a course again much later creates no new pairs.

Return `[firstCourse, secondCourse, count]` describing the pair with the
most votes. Ties resolve by `firstCourse` ascending, then `secondCourse`
ascending, so the answer is always unique. `count` is returned as a
string. When nobody stands out there are no pairs at all and the result is
the empty array.

### Example 1

```text
Input: completions =
[["a","gamma","2024-03-01","5"],["a","alpha","2024-01-05","5"],
["a","beta","2024-02-01","5"],["a","alpha","2024-04-01","5"],
["a","beta","2024-05-01","5"],
["b","beta","2024-01-10","4"],["b","gamma","2024-02-10","4"],
["b","alpha","2024-03-10","4"],["b","delta","2024-04-10","4"],
["b","beta","2024-05-10","4"],
["c","zeta","2024-01-01","5"],["c","eta","2024-02-01","5"],
["c","theta","2024-03-01","5"]]
Output: ["alpha","beta","2"]
Explanation: a finished 5 courses averaging 5.0 and b finished 5
averaging 4.0 — both stand out; c took only 3 courses and does not. a's
date order runs alpha, beta, gamma, alpha, beta and b's runs beta, gamma,
alpha, delta, beta. Three pairs tie at 2 votes — (alpha, beta),
(beta, gamma), and (gamma, alpha) — and the tie rules pick the smallest
first course, so (alpha, beta) wins.
```

### Example 2

```text
Input: completions =
[["e","kite","2024-01-02","4"],["e","jute","2024-01-01","4"],
["e","lime","2024-01-03","4"],["e","maze","2024-01-04","4"],
["e","nest","2024-01-05","4"],
["d","ant","2024-02-01","4"],["d","bee","2024-02-02","4"],
["d","cow","2024-02-03","3"],["d","dog","2024-02-04","3"],
["d","elk","2024-02-05","5"]]
Output: ["jute","kite","1"]
Explanation: e averages exactly 4.0 and stands out; d's ratings sum to 19
against a bar of 20 (an average of 3.8), so d misses. e's lineup jute,
kite, lime, maze, nest casts one vote per adjacent pair, and with every
pair sitting at 1 vote the tie rules take the alphabetically first:
(jute, kite).
```

### Example 3

```text
Input: completions =
[["f","one","2024-01-01","5"],["f","two","2024-01-02","5"],
["f","three","2024-01-03","5"],["f","four","2024-01-04","5"],
["g","aa","2024-03-01","1"],["g","bb","2024-03-02","1"],
["g","cc","2024-03-03","1"],["g","dd","2024-03-04","1"],
["g","ee","2024-03-05","1"],["g","ff","2024-03-06","1"]]
Output: []
Explanation: f finished only 4 courses, and g's six ratings all read 1,
averaging far below the bar — nobody stands out, so there is no pair to
report.
```

### Constraints

- `1 <= completions.length <= 10⁴`
- `completions[i].length == 4`
- `student` and `course` consist of lowercase English letters and have
  length at most 10.
- `date` is a valid calendar date between `2000-01-01` and `2099-12-31`.
- `1 <= int(rating) <= 5`

## Hints

### Hint 1

Bucket the rows by student first; each student can be judged — and their
courses lined up — entirely on their own.

### Hint 2

Qualification needs no floating point: a student passes exactly when
their rating sum reaches `4 *` their course count.

### Hint 3

Tally adjacent pairs in a hash map keyed by the pair itself, then choose
the winner by comparing `(-count, firstCourse, secondCourse)` — one total
order, no separate tie passes.
