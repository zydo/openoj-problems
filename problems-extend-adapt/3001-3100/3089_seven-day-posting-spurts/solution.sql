WITH
  feb AS (
    SELECT
      entry_id,
      author_id,
      entry_date
    FROM
      Entries
    WHERE
      entry_date BETWEEN '2024-02-01' AND '2024-02-28'
  ),
  totals AS (
    SELECT
      author_id,
      COUNT(*) AS total
    FROM
      feb
    GROUP BY
      author_id
  ),
  windows AS (
    SELECT
      a.author_id AS author_id,
      a.entry_date AS entry_date,
      COUNT(DISTINCT b.entry_id) AS win
    FROM
      feb a
      JOIN feb b ON b.author_id = a.author_id
      AND b.entry_date BETWEEN a.entry_date AND DATE(a.entry_date, '+6 days')
    GROUP BY
      a.author_id,
      a.entry_date
  ),
  best AS (
    SELECT
      author_id,
      MAX(win) AS peak_week_posts
    FROM
      windows
    GROUP BY
      author_id
  )
SELECT
  t.author_id,
  b.peak_week_posts,
  t.total * 1.0 / 4 AS avg_week_posts
FROM
  totals t
  JOIN best b ON b.author_id = t.author_id
WHERE
  b.peak_week_posts >= t.total * 2.0 / 4
ORDER BY
  t.author_id