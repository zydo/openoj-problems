SELECT
  puzzle_id
FROM
  Puzzles
WHERE
  5 * upvotes < 3 * (upvotes + downvotes)
ORDER BY
  puzzle_id