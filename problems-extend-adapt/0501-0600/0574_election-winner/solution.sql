SELECT
  name
FROM
  Nominee
  JOIN Ballot ON Nominee.id = Ballot.nomineeId
GROUP BY
  Nominee.id,
  name
ORDER BY
  COUNT(*) DESC
LIMIT
  1