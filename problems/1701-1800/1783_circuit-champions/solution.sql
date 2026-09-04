SELECT
  Coders.coder_id AS coder_id,
  Coders.handle AS handle,
  COUNT(*) AS titles_won
FROM
  Coders
  JOIN (
    SELECT
      spring AS winner
    FROM
      Finals
    UNION ALL
    SELECT
      summer
    FROM
      Finals
    UNION ALL
    SELECT
      autumn
    FROM
      Finals
    UNION ALL
    SELECT
      winter
    FROM
      Finals
  ) wins ON Coders.coder_id = wins.winner
GROUP BY
  Coders.coder_id,
  Coders.handle