SELECT
  bg.badge_no,
  wf.name
FROM
  Workforce wf
  LEFT JOIN Badges bg ON bg.id = wf.id