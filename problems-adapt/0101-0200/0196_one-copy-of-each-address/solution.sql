SELECT
  listId,
  address
FROM
  MailingList
WHERE
  listId IN (
    SELECT
      MIN(listId)
    FROM
      MailingList
    GROUP BY
      address
  )