SELECT
  station_id,
  SUM(
    CASE
      WHEN month = 'Jan' THEN rainfall
    END
  ) AS Jan_Rainfall,
  SUM(
    CASE
      WHEN month = 'Feb' THEN rainfall
    END
  ) AS Feb_Rainfall,
  SUM(
    CASE
      WHEN month = 'Mar' THEN rainfall
    END
  ) AS Mar_Rainfall,
  SUM(
    CASE
      WHEN month = 'Apr' THEN rainfall
    END
  ) AS Apr_Rainfall,
  SUM(
    CASE
      WHEN month = 'May' THEN rainfall
    END
  ) AS May_Rainfall,
  SUM(
    CASE
      WHEN month = 'Jun' THEN rainfall
    END
  ) AS Jun_Rainfall,
  SUM(
    CASE
      WHEN month = 'Jul' THEN rainfall
    END
  ) AS Jul_Rainfall,
  SUM(
    CASE
      WHEN month = 'Aug' THEN rainfall
    END
  ) AS Aug_Rainfall,
  SUM(
    CASE
      WHEN month = 'Sep' THEN rainfall
    END
  ) AS Sep_Rainfall,
  SUM(
    CASE
      WHEN month = 'Oct' THEN rainfall
    END
  ) AS Oct_Rainfall,
  SUM(
    CASE
      WHEN month = 'Nov' THEN rainfall
    END
  ) AS Nov_Rainfall,
  SUM(
    CASE
      WHEN month = 'Dec' THEN rainfall
    END
  ) AS Dec_Rainfall
FROM
  Stations
GROUP BY
  station_id