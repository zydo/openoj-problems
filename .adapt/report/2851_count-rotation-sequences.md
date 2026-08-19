## 2851 — String Transformation

- New id / title / slug: 2851 / Count Rotation Sequences / `count-rotation-sequences`
- Old → new API: `numberOfWays` → `countRotationSequences` (go `countRotationSequences`, rust `count_rotation_sequences`, ts `countRotationSequences`); parameters `s`, `t`, `k` kept
- Core algorithm / difficulty: count rotations of `s` equal to `t` via KMP on `s+s[:2n-1]`, then 2-state (T / non-T) walk matrix powered to `k` under mod 10⁹+7 / H4 (unchanged)
- Statement rewritten from spec: yes — "transform" reframed as suffix-to-front moves = rotations, and the count is over *sequences of exactly k operations*, which the statement now says up front
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["world","ldwor",2] → 3` (brute-verified; all three two-step paths listed in the explanation), `["xyxyxy","xyxyxy",10^15] → 205071942` (huge k, mod shown in action), `["aabb","abab",4] → 0` (target not a rotation)
- Constraints: domain unchanged (2 ≤ n ≤ 5·10⁵, 1 ≤ k ≤ 10¹⁵, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- macOS `sed -E` silently ignores `\b` word boundaries (BSD sed lacks them), so
  a sed-based rename is a no-op that still exits 0. All API renames in this
  wave use `perl -pi -e 's/\b…\b/…/g'` instead.
