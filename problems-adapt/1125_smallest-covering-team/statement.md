# Smallest Covering Team

## Description

A job needs a set of skills, listed in `req_skills`. You are given `people`,
where `people[i]` is the list of skills person `i` holds; everyone's skills
come from the required list, and a person may hold none of them.

A team is identified by the indices of its members — `[0, 3]` means the
people described by `people[0]` and `people[3]`. A team is **covering**
when every required skill is held by at least one of its members.

Return a covering team with as few members as possible. Any smallest team
is accepted, and the indices may come in any order.

Such a team is guaranteed to exist.

### Example 1

```text
Input: req_skills = ["climbing","coding","firstaid"],
       people = [["climbing"],["coding","firstaid"],["coding"]]
Output: [0,1]
Explanation: The climber alone covers climbing; the second person covers
both remaining skills, so two members suffice and one never could.
```

### Example 2

```text
Input: req_skills = ["sailing","diving","nav","radio"],
       people = [["sailing","diving"],["nav","radio"],[],["sailing","nav"],["diving","radio"]]
Output: [0,1]
Explanation: Several pairs of two cover all four skills; person 2 holds
nothing required and belongs on no team.
```

### Example 3

```text
Input: req_skills = ["cheer","drill","float"],
       people = [["cheer","drill","float"],["cheer"],["drill"]]
Output: [0]
Explanation: One generalist beats any combination of specialists.
```

### Constraints

- `1 <= req_skills.length <= 16`
- `1 <= req_skills[i].length <= 16`
- `req_skills[i]` consists of lowercase English letters.
- The entries of `req_skills` are distinct.
- `1 <= people.length <= 60`
- `0 <= people[i].length <= 16`
- `1 <= people[i][j].length <= 16`
- `people[i][j]` consists of lowercase English letters.
- The entries of `people[i]` are distinct.
- Every skill of `people[i]` appears in `req_skills`.
- A covering team is guaranteed to exist.

## Hints

### Hint 1

With at most 16 required skills, any set of covered skills is expressible
as a 16-bit pattern — one bit per skill.

### Hint 2

For every pattern of already-covered skills, remember the shortest member
list known to reach it; fold people in one at a time, taking unions of
patterns.

### Hint 3

A new member helps a state only if their skills add bits; the answer is
the member list stored for the all-ones pattern.
