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
