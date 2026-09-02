SELECT
  nation,
  firsts,
  seconds,
  thirds
FROM
  Podium
ORDER BY
  firsts DESC,
  seconds DESC,
  thirds DESC,
  nation ASC