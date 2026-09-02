SELECT
  performer,
  COUNT(*) AS appearances
FROM
  Charts
GROUP BY
  performer
ORDER BY
  appearances DESC,
  performer