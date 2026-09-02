WITH
  shares AS (
    SELECT
      elector,
      1.0 / COUNT(choice) AS share
    FROM
      Ballots
    GROUP BY
      elector
  ),
  totals AS (
    SELECT
      Ballots.choice AS choice,
      ROUND(SUM(share), 9) AS votes
    FROM
      Ballots
      JOIN shares ON Ballots.elector = shares.elector
    WHERE
      Ballots.choice IS NOT NULL
    GROUP BY
      Ballots.choice
  )
SELECT
  choice
FROM
  totals
WHERE
  votes = (
    SELECT
      MAX(votes)
    FROM
      totals
  )
ORDER BY
  choice