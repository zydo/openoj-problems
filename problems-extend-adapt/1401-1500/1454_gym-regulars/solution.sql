SELECT
  a.id AS id,
  a.name AS name
FROM
  (
    SELECT DISTINCT
      id
    FROM
      (
        SELECT
          id,
          DATE(
            visit_date,
            '-' || (
              ROW_NUMBER() OVER (
                PARTITION BY
                  id
                ORDER BY
                  visit_date
              ) - 1
            ) || ' day'
          ) AS streak_anchor
        FROM
          (
            SELECT DISTINCT
              id,
              visit_date
            FROM
              Visits
          ) distinct_days
      ) streaks
    GROUP BY
      id,
      streak_anchor
    HAVING
      COUNT(*) >= 5
  ) active
  JOIN Climbers a ON a.id = active.id
ORDER BY
  a.id