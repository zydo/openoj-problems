SELECT
  tk.track_id,
  tk.track_name,
  yr.report_year,
  (
    CAST(
      julianday(
        MIN(
          lc.licensed_to,
          CAST(yr.report_year AS TEXT) || '-12-31'
        )
      ) - julianday(
        MAX(
          lc.licensed_from,
          CAST(yr.report_year AS TEXT) || '-01-01'
        )
      ) AS INTEGER
    ) + 1
  ) * lc.daily_rate AS total_amount
FROM
  Licenses lc
  CROSS JOIN (
    SELECT
      2018 AS report_year
    UNION
    SELECT
      2019
    UNION
    SELECT
      2020
  ) yr
  JOIN Tracks tk ON tk.track_id = lc.track_id
WHERE
  lc.licensed_to >= CAST(yr.report_year AS TEXT) || '-01-01'
  AND lc.licensed_from <= CAST(yr.report_year AS TEXT) || '-12-31'
ORDER BY
  tk.track_id,
  report_year