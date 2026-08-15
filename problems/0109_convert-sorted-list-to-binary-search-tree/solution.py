from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        def build(node: Optional[ListNode]) -> Optional[TreeNode]:
            if node is None:
                return None
            if node.next is None:
                return TreeNode(node.val)
            prev, slow, fast = None, node, node
            while fast is not None and fast.next is not None:
                prev = slow
                slow = slow.next
                fast = fast.next.next
            prev.next = None
            root = TreeNode(slow.val)
            root.left = build(node)
            root.right = build(slow.next)
            return root

        return build(head)
