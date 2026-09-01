SELECT
  song_id,
  ROUND(
    COUNT(listener_id) * 100.0 / (
      SELECT
        COUNT(*)
      FROM
        Listeners
    ),
    2
  ) AS share
FROM
  Votes
GROUP BY
  song_id
ORDER BY
  share DESC,
  song_id ASC