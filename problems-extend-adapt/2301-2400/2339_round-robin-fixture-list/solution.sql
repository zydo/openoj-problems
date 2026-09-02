SELECT
  a.club_name AS home_club,
  b.club_name AS away_club
FROM
  Clubs a
  JOIN Clubs b ON a.club_name <> b.club_name