# Fewest Users to Tutor

## Description

A social network has `m` users plus some friendships joining pairs of
users. Two friends can chat only if they share at least one language.

The input is an integer `n` together with two arrays, `languages` and
`friendships`:

- the network's languages are numbered `1` through `n`,
- `languages[i]` lists the languages user `i` (1-based) speaks, and
- `friendships[i] = [ui, vi]` records a friendship between users `ui`
  and `vi`.

You may pick a single language and tutor any subset of users in it, with
the goal that every pair of friends ends up able to chat. Return the
fewest users that must be tutored.

Friendship is not transitive: `x` befriending `y` and `y` befriending `z`
says nothing about `x` and `z`.

### Example 1

```text
Input: n = 3, languages = [[1,3],[2],[2,3],[1]], friendships = [[1,2],[3,4]]
Output: 2
Explanation: Neither friendship shares a language. Tutoring language 1 to
users 2 and 3 (two users) lets both pairs chat, and no single tutoring
does it with fewer.
```

### Example 2

```text
Input: n = 4, languages = [[1,2],[3],[4],[2,4],[1,4]], friendships = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The pairs (1,2) and (2,3) share nothing, while (3,4) already
shares language 4. Tutoring language 2 to users 2 and 3 — the language
user 1 already speaks — mends both broken pairs.
```

### Constraints

- `2 <= n <= 500`
- `languages.length == m`
- `1 <= m <= 500`
- `1 <= languages[i].length <= n`
- `1 <= languages[i][j] <= n`
- `1 <= ui < vi <= languages.length`
- `1 <= friendships.length <= 500`
- No tuple `(ui, vi)` repeats
- Each `languages[i]` lists distinct languages

## Hints

### Hint 1

A friendship whose two sides already share a language is fixed for good;
only the pairs that share nothing can ever demand tutoring.

### Hint 2

For each candidate language, the users to tutor are exactly the
participants of the broken pairs who don't speak it — and a user taking
part in several broken pairs is tutored just once. Trying every language
and keeping the smallest tally answers the question.
