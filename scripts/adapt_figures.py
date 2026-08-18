#!/usr/bin/env python3
"""Regenerate figures whose geometry encodes the example data.

ADAPT.md splits example figures in two: those whose data sits in `<text>`
nodes (a label edit) and those whose data is the drawing (bar heights,
tree shapes, grid contents), which it proposes to drop. There is a third
case worth catching before dropping anything — figures that are a
*deterministic function* of the example, and so can simply be redrawn
for the new one.

Each renderer here reproduces one figure family in the existing visual
language: white ground, `#1a2026` ink, `#4169E1` accent, IBM Plex Sans.

Usage:
    adapt_figures.py container-lines <out.svg> 2 3 9 4 1 7 3 8 6
"""
from __future__ import annotations

import sys
from pathlib import Path

INK = "#1a2026"
ACCENT = "#4169E1"
MUTED = "#5c6b76"
HEADER = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
    'font-family="IBM Plex Sans, system-ui, sans-serif" font-size="12">\n'
    '  <rect width="{w}" height="{h}" fill="#ffffff"/>\n'
    "  <defs>\n"
    '    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" '
    'markerHeight="7" orient="auto-start-reverse">\n'
    f'      <path d="M 0 0 L 10 5 L 0 10 z" fill="{INK}"/>\n'
    "    </marker>\n"
    "  </defs>\n"
)


def best_pair(heights: list[int]) -> tuple[int, int, int]:
    """The two-pointer answer, plus the pair that achieves it."""
    left, right = 0, len(heights) - 1
    best = (0, 0, 0)
    while left < right:
        area = (right - left) * min(heights[left], heights[right])
        if area > best[2]:
            best = (left, right, area)
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    return best


def container_lines(heights: list[int]) -> str:
    """0011-family: vertical lines on an axis, the best container shaded."""
    count, tallest = len(heights), max(heights)
    dx = max(40, min(120, round(400 / max(count - 1, 1))))
    dy = max(26, min(90, round(210 / max(tallest, 1))))
    x0, pad_top = 80, 34
    y0 = pad_top + dy * tallest
    width = x0 + dx * (count - 1) + 90
    height = y0 + 48

    def x(index: int) -> int:
        return x0 + dx * index

    def y(value: int) -> int:
        return y0 - dy * value

    left, right, area = best_pair(heights)
    surface = min(heights[left], heights[right])
    parts = [HEADER.format(w=width, h=height)]

    # The area label sits at half the water's depth, so it collides with any
    # interior line that reaches that level. Drop it into the midpoint with
    # the most room instead of the geometric centre.
    label_level = surface / 2
    blocking = [i for i in range(left + 1, right) if heights[i] >= label_level - 0.5]
    slots = [(i + i + 1) / 2 for i in range(left, right)]
    label_at = max(slots, key=lambda slot: min((abs(slot - i) for i in blocking), default=count))

    parts.append(
        f"  <!-- water between indices {left} and {right}, "
        f"up to min({heights[left]}, {heights[right]}) = {surface} -->\n"
        f'  <rect x="{x(left)}" y="{y(surface)}" width="{x(right) - x(left)}" '
        f'height="{dy * surface}" fill="{ACCENT}" fill-opacity="0.15"/>\n'
        f'  <line x1="{x(left)}" y1="{y(surface)}" x2="{x(right)}" y2="{y(surface)}" '
        f'stroke="{ACCENT}" stroke-width="1.6"/>\n'
        f'  <text x="{round(x0 + dx * label_at)}" y="{y(surface) + dy * surface // 2 + 11}" '
        f'text-anchor="middle" fill="{ACCENT}" stroke="none" font-size="21" '
        f'font-weight="600">{area}</text>\n'
    )

    others = [i for i in range(count) if i not in (left, right)]
    if others:
        parts.append(
            f"  <!-- vertical lines at each index; accent marks the optimal pair "
            f"({left} and {right}) -->\n"
            f'  <g stroke="{INK}" stroke-width="2">\n'
            + "".join(
                f'    <line x1="{x(i)}" y1="{y0}" x2="{x(i)}" y2="{y(heights[i])}"/>\n'
                for i in others
            )
            + "  </g>\n"
        )
    parts.append(
        f'  <g stroke="{ACCENT}" stroke-width="2.4">\n'
        + "".join(
            f'    <line x1="{x(i)}" y1="{y0}" x2="{x(i)}" y2="{y(heights[i])}"/>\n'
            for i in (left, right)
        )
        + "  </g>\n"
    )

    parts.append(
        "  <!-- axes with unit ticks -->\n"
        f'  <g stroke="{INK}" stroke-width="1.6">\n'
        f'    <line x1="{x0}" y1="{y0}" x2="{x(count - 1) + 48}" y2="{y0}" '
        'marker-end="url(#arrow)"/>\n'
        f'    <line x1="{x0}" y1="{y0}" x2="{x0}" y2="{y(tallest) - 10}" '
        'marker-end="url(#arrow)"/>\n'
        "  </g>\n"
        f'  <g stroke="{INK}" stroke-width="1.2">\n'
        + "".join(f'    <line x1="{x(i)}" y1="{y0}" x2="{x(i)}" y2="{y0 + 4}"/>\n' for i in range(count))
        + "".join(f'    <line x1="{x0 - 4}" y1="{y(v)}" x2="{x0}" y2="{y(v)}"/>\n' for v in range(tallest + 1))
        + "  </g>\n"
    )

    parts.append(
        f'  <g fill="{MUTED}">\n'
        '    <g text-anchor="middle">\n'
        + "".join(f'      <text x="{x(i)}" y="{y0 + 22}">{i}</text>\n' for i in range(count))
        + "    </g>\n"
        '    <g text-anchor="end">\n'
        + "".join(f'      <text x="{x0 - 10}" y="{y(v) + 4}">{v}</text>\n' for v in range(tallest + 1))
        + "    </g>\n"
        "  </g>\n"
        "</svg>\n"
    )
    return "".join(parts)


def kadane_walk(nums: list[int]) -> str:
    """0053-family: the nums row above the running best-ending-here row,
    with the restarts marked and the winning span bracketed."""
    current = best = nums[0]
    row, restarts = [current], []
    start = best_start = best_end = 0
    for index, value in enumerate(nums[1:], 1):
        if current < 0:
            current, start = value, index
            restarts.append(index)
        else:
            current += value
        row.append(current)
        if current > best:
            best, best_start, best_end = current, start, index

    cell, gap, x0 = 52, 0, 70
    # Two annotation rows above the table: consecutive restart labels are
    # wide enough to collide, and the live 0053 figure does exactly that.
    footnotes = [
        "Everywhere else current = previous current + value; a negative running sum",
        "can only drag down what follows, so it is replaced by a fresh start.",
        "The answer is the largest current ever seen, not the final one.",
    ]
    width = max(580, x0 + cell * len(nums) + 42, max(len(line) for line in footnotes) * 6 + 40)
    height = 278
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        'font-family="IBM Plex Sans, system-ui, sans-serif" font-size="13">\n'
        f'  <rect width="{width}" height="{height}" fill="#ffffff"/>\n'
        f'  <text x="20" y="24" fill="{INK}" font-weight="600">nums = '
        f'[{",".join(str(v) for v in nums)}] - best subarray sum ending at each index (current)</text>\n'
    ]

    def x(index: int) -> int:
        return x0 + (cell + gap) * index

    for label, y_label, y_box, values, fill in (
        ("nums", 92, 72, nums, "#ffffff"),
        ("current", 152, 132, row, "#e9eefb"),
    ):
        parts.append(
            f'  <!-- {label} row -->\n'
            f'  <text x="20" y="{y_label}" fill="#5b6470" font-size="11.5">{label}</text>\n'
            f'  <g stroke="{INK}" stroke-width="1.4" fill="{fill}">\n    '
            + "".join(f'<rect x="{x(i)}" y="{y_box}" width="{cell}" height="30"/>' for i in range(len(nums)))
            + "\n  </g>\n"
        )
        if label == "current":
            parts.append(
                f'  <rect x="{x(best_end)}" y="{y_box}" width="{cell}" height="30" '
                f'fill="none" stroke="{ACCENT}" stroke-width="2.6"/>\n'
            )
        parts.append(
            f'  <g fill="{INK}" text-anchor="middle" font-weight="600">\n    '
            + "".join(
                f'<text x="{x(i) + cell // 2}" y="{y_label}"'
                + (f' fill="{ACCENT}"' if label == "current" and i == best_end else "")
                + f">{v}</text>"
                for i, v in enumerate(values)
            )
            + "\n  </g>\n"
        )

    if restarts:
        parts.append("  <!-- restart separators -->\n")
        for index in restarts:
            parts.append(
                f'  <line x1="{x(index)}" y1="66" x2="{x(index)}" y2="168" '
                f'stroke="{ACCENT}" stroke-width="1.6" stroke-dasharray="4 3"/>\n'
            )
        occupied = -1.0
        for index in restarts:
            text = f"restart: prefix sum {row[index - 1]} &lt; 0, dropped"
            start = x(index) + 8
            # ~5.4px per character at 10.5px; drop to the upper row rather
            # than overprint the previous label.
            row_y = 58 if start > occupied else 44
            if row_y == 58:
                occupied = start + len(text) * 5.4
            parts.append(f'  <text x="{start}" y="{row_y}" fill="{ACCENT}" font-size="10.5">{text}</text>\n')

    span = nums[best_start : best_end + 1]
    parts.append(
        f"  <!-- best bracket under cells {best_start}..{best_end} -->\n"
        f'  <path d="M {x(best_start)} 178 L {x(best_start)} 188 L {x(best_end) + cell} 188 '
        f'L {x(best_end) + cell} 178" fill="none" stroke="{ACCENT}" stroke-width="1.6"/>\n'
        f'  <text x="{(x(best_start) + x(best_end) + cell) // 2}" y="208" fill="{ACCENT}" '
        f'text-anchor="middle" font-size="11.5" font-weight="600">best = {best}, '
        f'the subarray [{", ".join(str(v) for v in span)}]</text>\n'
        + "".join(
            f'  <text x="20" y="{230 + 16 * line}" fill="#5b6470" font-size="11.5">{text}</text>\n'
            for line, text in enumerate(footnotes)
        )
        + "</svg>\n"
    )
    return "".join(parts)


RENDERERS = {"container-lines": container_lines, "kadane-walk": kadane_walk}


def main() -> int:
    if len(sys.argv) < 4 or sys.argv[1] not in RENDERERS:
        print(__doc__)
        return 2
    out = Path(sys.argv[2])
    values = [int(v) for v in sys.argv[3:]]
    out.write_text(RENDERERS[sys.argv[1]](values), encoding="utf-8")
    print(f"{out}: {len(values)} values")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
