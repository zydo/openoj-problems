# Dial Spelling Steps

- Source: `0514_freedom-trail` → `0514_dial-spelling-steps`
- Kind: function
- API renames:
  - `findRotateSteps` → `dialSpellingSteps`
- Figures: dropped (the source figure draws the source's own ring string)
- Gates: compatibility ✓ stale ✓ overlap ✓

### Note

Salvaged centrally: statement, cases and all seven implementations were finished and green; the quota window killed the agent before solutions.md and the starters. Both written here from the adapted solution, source closed.

The guide was written against the adapted `solution.py` alone. It keeps the
two facts the implementation turns on and the statement does not give away:
that only rotation belongs in the state (one press per key character is a
constant, added at the end), and that grouping ring indices by letter is what
keeps each stage to the alignments that can actually spell it.
