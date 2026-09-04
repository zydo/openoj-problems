SELECT
  w1.readingId AS readingId
FROM
  Readings w1
  JOIN Readings w2 ON w1.takenOn = DATE(w2.takenOn, '+1 day')
WHERE
  w1.degrees > w2.degrees