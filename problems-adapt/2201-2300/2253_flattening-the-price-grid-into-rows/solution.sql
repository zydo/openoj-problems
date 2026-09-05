SELECT
  group_concat(
    quote(name) || ', "' || replace(name, '"', '""') || '"',
    ','
  )
FROM
  pragma_table_info ('PriceGrid')
WHERE
  name <> 'item_id';

SELECT
  item_id,
  json_each.key AS seller,
  json_each.value AS offer
FROM
  PriceGrid,
  json_each(json_object(__COLUMNS__))
WHERE
  json_each.value IS NOT NULL
ORDER BY
  item_id,
  json_each.key