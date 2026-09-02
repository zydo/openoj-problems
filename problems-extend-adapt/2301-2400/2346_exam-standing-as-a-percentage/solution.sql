SELECT
  examinee_id,
  cohort_id,
  ROUND(
    (
      RANK() OVER (
        PARTITION BY
          cohort_id
        ORDER BY
          score DESC
      ) - 1
    ) * 100.0 / (
      COUNT(*) OVER (
        PARTITION BY
          cohort_id
      ) - 1
    ),
    2
  ) AS standing
FROM
  Examinees