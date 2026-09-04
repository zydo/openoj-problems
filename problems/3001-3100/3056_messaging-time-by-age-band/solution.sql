SELECT
  g.age_band,
  ROUND(
    100.0 * SUM(
      CASE
        WHEN a.event_kind = 'send' THEN a.minutes
        ELSE 0.0
      END
    ) / SUM(a.minutes),
    2
  ) AS send_perc,
  ROUND(
    100.0 * SUM(
      CASE
        WHEN a.event_kind = 'open' THEN a.minutes
        ELSE 0.0
      END
    ) / SUM(a.minutes),
    2
  ) AS open_perc
FROM
  Events a
  JOIN AgeGroups g ON a.member_id = g.member_id
GROUP BY
  g.age_band