SELECT
  division_id,
  racer_id
FROM
  (
    SELECT
      r.division_id,
      r.racer_id,
      ROW_NUMBER() OVER (
        PARTITION BY
          r.division_id
        ORDER BY
          COALESCE(t.total, 0) DESC,
          r.racer_id
      ) AS rank_in_group
    FROM
      Racers AS r
      LEFT JOIN (
        SELECT
          racer,
          SUM(points) AS total
        FROM
          (
            SELECT
              first_racer AS racer,
              first_points AS points
            FROM
              Races
            UNION ALL
            SELECT
              second_racer AS racer,
              second_points AS points
            FROM
              Races
          ) AS events
        GROUP BY
          racer
      ) AS t ON r.racer_id = t.racer
  ) AS ranked
WHERE
  rank_in_group = 1