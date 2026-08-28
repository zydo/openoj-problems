"""Common data types supplied to every Python submission.

Assembled ahead of the submission source by the judge; never shown
editable in the editor. Field layout is the judge's wire contract —
see common/README.md.
"""


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []


class QuadNode:
    def __init__(self, val=False, isLeaf=False, topLeft=None, topRight=None, bottomLeft=None, bottomRight=None):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight


class NestedInteger:
    """LeetCode's nested-list API: an integer hold or a list of
    NestedInteger (never both)."""

    def __init__(self, value=None):
        self._integer = None
        self._list = []
        if isinstance(value, int) and not isinstance(value, bool):
            self.setInteger(value)

    def isInteger(self):
        return self._integer is not None

    def getInteger(self):
        return self._integer

    def setInteger(self, value):
        self._integer = value
        self._list = []

    def add(self, item):
        self._integer = None
        self._list.append(item)

    def getList(self):
        return self._list


class NodeWithNext:
    """Binary-tree node with the level ``next`` link (and the ``parent``
    back-pointer the in-order-successor wire needs)."""

    def __init__(self, val=0, left=None, right=None, next=None, parent=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
        self.parent = parent


class MultiListNode:
    """Doubly linked list node whose nodes may carry a child list."""

    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
