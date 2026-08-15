from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        def delete(node, key):
            if not node:
                return None
            if key < node.val:
                node.left = delete(node.left, key)
            elif key > node.val:
                node.right = delete(node.right, key)
            else:
                if not node.left:
                    return node.right
                if not node.right:
                    return node.left
                successor = node.right
                while successor.left:
                    successor = successor.left
                node.val = successor.val
                node.right = delete(node.right, successor.val)
            return node

        return delete(root, key)
