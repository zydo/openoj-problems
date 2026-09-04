SELECT
  b.film_id,
  b.title,
  b.director,
  b.genre,
  b.runtime,
  MAX(s.viewing_rating) - MIN(s.viewing_rating) AS score_spread,
  ROUND(
    AVG(
      CASE
        WHEN s.viewing_rating <= 2
        OR s.viewing_rating >= 4 THEN 1.0
        ELSE 0.0
      END
    ),
    2
  ) AS split_score
FROM
  films b
  JOIN viewings s ON s.film_id = b.film_id
GROUP BY
  b.film_id,
  b.title,
  b.director,
  b.genre,
  b.runtime
HAVING
  COUNT(*) >= 5
  AND MIN(s.viewing_rating) <= 2
  AND MAX(s.viewing_rating) >= 4
  AND AVG(
    CASE
      WHEN s.viewing_rating <= 2
      OR s.viewing_rating >= 4 THEN 1.0
      ELSE 0.0
    END
  ) >= 0.6
ORDER BY
  split_score DESC,
  b.title DESC