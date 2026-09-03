# Solutions — People And Their Addresses

## Left join Residences onto Contacts

The contract is the definition of a left outer join: report every person, carrying the residence columns when they are known and null when they are not. `Contacts c LEFT JOIN Residences r ON c.contactId = r.contactId` keeps every row of `Contacts`; a matching `Residences` row fills in `city` and `state`, and when no residence exists the join pads those columns with null — precisely the "report null instead" requirement, with no explicit null handling anywhere in the query. Because `contactId` is unique in `Contacts`, each `Residences` row matches at most one person, so the output is one row per (person, residence) pair plus one null-padded row for each residence-less person.

The direction of the join is the whole problem. `Residences` must sit on the right side: an inner join would silently drop exactly the residence-less persons the null contract exists for, and `Residences LEFT JOIN Contacts` would keep the orphan residences instead — rows whose `contactId` has no `Contacts` entry, which must never surface. On a `Contacts`-driven left join those orphan rows find no match and vanish on their own, while every person still appears. The `ON` clause matches on `contactId` only; `residenceId` is merely `Residences`' own primary key and plays no part in the matching, which is why a person with several residences correctly yields several output rows.

With the join key resolved through an index or hash lookup, each of the `P` `Contacts` rows costs one probe into `Residences`, so the join runs in `O(P + R)` time over `R` residence rows, and only the result itself — at most `P + R` rows — is materialized.

**Complexity:** `O(P + R)` time, `O(P + R)` space.
