SELECT DISTINCT
  l1.val AS ThreeInARow
FROM
  Feed l1,
  Feed l2,
  Feed l3
WHERE
  l1.feedId = l2.feedId - 1
  AND l2.feedId = l3.feedId - 1
  AND l1.val = l2.val
  AND l2.val = l3.val