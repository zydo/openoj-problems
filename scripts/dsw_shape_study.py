#!/usr/bin/env python3
"""Can any vine-then-compress (DSW) formulation reproduce the midpoint-rebuild
tree that this bundle's cases pin as the exact expected output?"""

import math


class N:
    __slots__ = ("v", "l", "r")

    def __init__(self, v):
        self.v, self.l, self.r = v, None, None


def ser(t):
    out, row = [], [t]
    while any(x is not None for x in row):
        nxt = []
        for x in row:
            if x is None:
                out.append(None)
                nxt.extend([None, None])
            else:
                out.append(x.v)
                nxt.extend([x.l, x.r])
        row = nxt
    while out and out[-1] is None:
        out.pop()
    return out


def inorder(t):
    if t is None:
        return []
    return inorder(t.l) + [t.v] + inorder(t.r)


def T(n):
    vals = list(range(1, n + 1))

    def build(lo, hi):
        if lo > hi:
            return None
        mid = (lo + hi) // 2
        x = N(vals[mid])
        x.l = build(lo, mid - 1)
        x.r = build(mid + 1, hi)
        return x

    return build(0, n - 1)


def compress_right_rot(pseudo, scanner, count):
    """Right-rotate at every second node of a descending (.l) vine."""
    for _ in range(count):
        x = scanner.l
        y = x.l
        x.l = y.r
        y.r = x
        scanner.l = y
        scanner = y


def compress_left_rot(pseudo, scanner, count):
    """Left-rotate at every second node of an ascending (.r) vine."""
    for _ in range(count):
        x = scanner.r
        y = x.r
        x.r = y.l
        y.l = x
        scanner.r = y
        scanner = y


def dsw(n, mirror=False, tail_first=False):
    nodes = [N(i + 1) for i in range(n)]
    pseudo = N(0)
    if mirror:
        for i in range(n - 1, 0, -1):
            nodes[i].l = nodes[i - 1]
        pseudo.l = nodes[n - 1]
        compress = compress_right_rot
        head = lambda: pseudo.l  # noqa: E731
    else:
        for i in range(n - 1):
            nodes[i].r = nodes[i + 1]
        pseudo.r = nodes[0]
        compress = compress_left_rot
        head = lambda: pseudo.r  # noqa: E731

    def compress_from_tail(count):
        # rotate at every second node counting from the vine's tail:
        # walk to the tail, then apply rotations at 2nd-from-tail, 4th, ...
        # (only meaningful for the first round; implemented for ascending vines)
        assert not mirror
        # collect vine nodes
        vine = []
        cur = pseudo.r
        while cur is not None:
            vine.append(cur)
            cur = cur.r
        for i in range(len(vine) - 2, -1, -2):
            pass  # placeholder: rotating from the tail needs parent links; skip
        raise NotImplementedError

    size = n
    m = (1 << int(math.floor(math.log2(size + 1)))) - 1
    if tail_first:
        compress_from_tail(size - m)
    compress(pseudo, pseudo, size - m)
    size = m
    while size > 1:
        size //= 2
        compress(pseudo, pseudo, size)
    return head()


def recursive_rotations(n):
    """Recursive median-by-rotations on the ascending vine: control check."""
    nodes = [N(i + 1) for i in range(n)]
    for i in range(n - 1):
        nodes[i].r = nodes[i + 1]
    pseudo = N(0)
    pseudo.r = nodes[0]

    def rotate_at(anchor, x):
        # left-rotate vine node x (anchor.r == x), returns new subtree head y
        y = x.r
        x.r = y.l
        y.l = x
        anchor.r = y
        return y

    # find anchor of a vine node by value
    def anchor_of(target):
        a = pseudo
        while a.r is not target:
            a = a.r
        return a

    def rebalance(lo, hi, anchor):
        """Vine segment [lo..hi] (by value) under `anchor` (anchor.r = head).

        Rearranges so the segment becomes T([lo..hi]) and the segment head
        is its median; returns nothing (segment now hangs demoted).
        """
        if lo > hi:
            return
        if lo == hi:
            # single node: demote it under whatever follows (caller rotates)
            return
        med = (lo + hi) // 2
        # demote everything in (med, hi] right of the median into place by
        # handling the right half first? -- see design note below.
        raise NotImplementedError

    # (left as NotImplemented: only needed if DSW variants all fail)
    return pseudo.r


CASE_NS = [1, 3, 4, 7, 8, 9, 15]


def report(name, fn):
    bad, err = [], None
    for n in range(1, 65):
        try:
            got = fn(n)
        except Exception as e:  # noqa: BLE001
            err = f"n={n}: {type(e).__name__} {e}"
            break
        if inorder(got) != list(range(1, n + 1)):
            err = f"n={n}: not a BST"
            break
        try:
            _ = ser(got)
        except Exception as e:  # noqa: BLE001
            err = f"n={n}: ser fail {e}"
            break
        if ser(got) != ser(T(n)):
            bad.append(n)
    case_bad = [n for n in CASE_NS if n in bad]
    verdict = (
        "MATCH-ALL"
        if not bad
        else f"mismatch n={bad[:8]}{'...' if len(bad) > 8 else ''}"
    )
    print(
        f"{name:24s} case-sizes ok: {'YES' if not case_bad else 'NO ' + str(case_bad):10s} {verdict} {err or ''}"
    )


report("std DSW (asc/left)", lambda n: dsw(n))
report("mirror DSW (desc/right)", lambda n: dsw(n, mirror=True))
