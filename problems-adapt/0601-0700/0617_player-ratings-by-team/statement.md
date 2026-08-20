# Player Ratings by Team

## Description

Keep a scoreboard over `n` players. Each player belongs to one team and
carries a rating, and the scoreboard must support two operations:

- change the rating of one named player, and
- name the best player of a given team.

Implement the `PlayerRatings` class:

- `PlayerRatings(String[] players, String[] teams, int[] scores)` — loads
  `n` players; `players[i]` is the player's name, `teams[i]` the team they
  play for, and `scores[i]` their starting rating.
- `void setRating(String player, int score)` — replaces the rating of the
  player named `player` with `score`.
- `String bestPlayer(String team)` — returns the name of the player on
  `team` with the highest rating; when several share the top rating, the
  lexicographically smallest name wins.

A name `x` is lexicographically smaller than a name `y` when `x` would be
listed first in a dictionary: either `x` is a prefix of `y`, or at the
first position where they differ, `x` has the earlier letter.

### Example 1

```text
Input:
["PlayerRatings", "bestPlayer", "bestPlayer", "setRating", "bestPlayer", "setRating", "bestPlayer"]
[[["gale", "ibis", "jack", "kent", "luca", "mira"], ["red", "blue", "blue", "red", "blue", "red"], [7, 12, 9, 12, 15, 7]], ["red"], ["blue"], ["jack", 16], ["blue"], ["luca", 16], ["blue"]]
Output: [null, "kent", "luca", null, "jack", null, "jack"]
Explanation:
PlayerRatings board = new PlayerRatings(
    ["gale", "ibis", "jack", "kent", "luca", "mira"],
    ["red", "blue", "blue", "red", "blue", "red"],
    [7, 12, 9, 12, 15, 7]);
board.bestPlayer("red");   // "kent" — red's ratings are 7, 12, 7.
board.bestPlayer("blue");  // "luca" — 15 beats 12 and 9.
board.setRating("jack", 16); // jack now rates 16.
board.bestPlayer("blue");  // "jack" — 16 leads blue.
board.setRating("luca", 16); // luca joins jack at the top.
board.bestPlayer("blue");  // "jack" — the tie goes to the smaller name.
```

### Example 2

```text
Input:
["PlayerRatings", "bestPlayer", "setRating", "bestPlayer", "setRating", "setRating", "bestPlayer"]
[[["al", "ale", "ash"], ["gold", "gold", "gold"], [5, 5, 5]], ["gold"], ["ash", 9], ["gold"], ["ash", 5], ["ale", 2], ["gold"]]
Output: [null, "al", null, "ash", null, null, "al"]
Explanation: Three gold players all rate 5, and "al" wins because it is a
prefix of "ale". Raising ash to 9 puts ash on top; the last two calls drop
gold back into a 5-5-2 spread, where "al" wins again.
```

### Constraints

- `1 <= n <= 2 * 10⁴`
- `n == players.length == teams.length == scores.length`
- `1 <= players[i].length, teams[i].length <= 10`
- `players[i]` and `teams[i]` consist of lowercase English letters.
- `1 <= scores[i] <= 10⁸`
- All names in `players` are distinct.
- Every call to `setRating` names a player loaded by the constructor.
- Every call to `bestPlayer` names a team with at least one player on it.
- At most `2 * 10⁴` calls in total are made to `setRating` and
  `bestPlayer`.

### Follow-up

Each `setRating` can spoil at most one entry of a team's ranking. Can the
rankings be kept correct without ever erasing an entry from them?

## Hints

### Hint 1

Two dictionaries hold the entire state: one maps each name to its team and
current rating, the other maps each team to its members. Only the second
one's values need an order.

### Hint 2

"Highest rating, ties toward the alphabetically first name" is the minimum
of the pairs `(-rating, name)` — order each team by that pair and a plain
min-heap needs no custom comparator.

### Hint 3

On a rating change, insert a fresh `(-rating, name)` pair and leave the
replaced one behind. A pair whose rating no longer matches the first
dictionary is debris: peek at the heap top and pop while it disagrees, and
queries never discard a live entry.
