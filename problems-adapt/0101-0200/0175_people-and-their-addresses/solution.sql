SELECT
  c.givenName,
  c.surname,
  r.city,
  r.state
FROM
  Contacts c
  LEFT JOIN Residences r ON c.contactId = r.contactId