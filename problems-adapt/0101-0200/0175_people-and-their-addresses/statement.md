# People And Their Addresses

## Description

Table: `Contacts`

| Column Name | Type    |
| ----------- | ------- |
| contactId   | int     |
| surname     | varchar |
| givenName   | varchar |

`contactId` is the primary key (column with unique values) for this
table. Each row names one person: an id plus their surname and given
name.

Table: `Residences`

| Column Name | Type    |
| ----------- | ------- |
| residenceId | int     |
| contactId   | int     |
| city        | varchar |
| state       | varchar |

`residenceId` is the primary key (column with unique values) for this
table. Each row names the city and state where the person identified by
`contactId` lives.

Report the given name, surname, city, and state of every person in the
`Contacts` table. When a person has no row in `Residences`, the city and
state columns come out null rather than dropping the person.

The result may be returned in any order.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Contacts` rows and, when present, its `Residences` rows
before your query runs. The result format is in the following examples.

### Example 1

```text
Input: Contacts and Residences tables from the dataset below.
Output:
givenName  surname    city     state
Petra      Novak      Uppsala  Uppsala County
Kwame      Osei       Null     Null
Sven       Lindqvist  Bergen   Vestland
Explanation: contacts 1 and 3 have matching residence rows, so their
city and state are reported; contact 2 has no residence at all, so both
of those columns are null.
```

### Example 2

```text
Input: Contacts and Residences tables from the dataset below.
Output:
givenName  surname   city     state
Marco      Rossi     Padua    Veneto
Marco      Rossi     Trieste  Friuli
Freja      Andersen  Aarhus   Midtjylland
Explanation: contact 4 holds two residence rows, and each match
produces its own output row; contact 5's single residence is reported
like any other.
```

Write your solution as a single `SELECT` query returning four columns —
`givenName`, `surname`, `city`, and `state` — one row per matching
person-and-residence pair, with null `city` and `state` for any person
without a residence.

## Hints

### Hint 1

Every person must survive the report whether or not they have a
residence — that is a LEFT JOIN with `Contacts` on the left: all of its
rows are kept, and the residence columns simply come back null when
nothing matches.

### Hint 2

Match on `contactId` alone. `residenceId` is only `Residences`' own
primary key and plays no part in the pairing; a person with several
residence rows legitimately produces several output rows.

### Hint 3

Residence rows whose `contactId` has no `Contacts` entry never surface
on a person-driven join — they match nothing and drop out by
themselves, so no extra filtering is needed.
