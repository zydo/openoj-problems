# Buildable Recipes

## Description

A cookbook holds `n` recipes, described by two parallel arrays: `recipes[i]`
names the i-th recipe, and `ingredients[i]` lists every item it consumes. Your
pantry holds each item in `supplies`, in unlimited quantity.

A recipe can be completed when every item it consumes is either in the pantry
or is another recipe you have already completed. Completing a dish does not
consume it — one finished product can feed any number of later recipes.

Note that two recipes may name each other as ingredients; neither can then
ever be completed.

Return all recipes that can be completed. Any ordering is accepted.

### Example 1

```text
Input: recipes = ["soup"], ingredients = [["stock","noodles"]], supplies = ["stock","noodles","salt"]
Output: ["soup"]
Explanation: The pantry already holds both items "soup" consumes, so it goes
on the table. The "salt" sits unused.
```

### Example 2

```text
Input: recipes = ["dough","pie"], ingredients = [["milk","cocoa"],["dough","sugar"]], supplies = ["milk","cocoa","sugar"]
Output: ["dough","pie"]
Explanation: "dough" needs only pantry items. Once it exists, "pie" can draw
on it alongside the pantry's "sugar".
```

### Example 3

```text
Input: recipes = ["kombucha","starter","jam"], ingredients = [["starter"],["kombucha"],["berries"]], supplies = ["berries"]
Output: ["jam"]
Explanation: "kombucha" waits on "starter" and "starter" on "kombucha", so
neither ever appears. "jam" needs only the pantry's "berries".
```

### Constraints

- `n == recipes.length == ingredients.length`
- `1 <= n <= 100`
- `1 <= ingredients[i].length, supplies.length <= 100`
- `1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10`
- every name uses lowercase English letters only
- no name appears twice within `recipes`, and no name is shared between
  `recipes` and `supplies`
- no `ingredients[i]` repeats an item

## Hints

### Hint 1

As you work, you will ask "is this item on hand yet?" over and over. What
container answers that instantly?

### Hint 2

A finished recipe behaves exactly like a pantry item. Completing one can
unlock the next — which ordering of work guarantees every unlock is noticed?

### Hint 3

Some recipes can never be finished. What happens to a pair that waits on each
other, and to anything downstream of it, if you process only recipes whose
needs are already met?
