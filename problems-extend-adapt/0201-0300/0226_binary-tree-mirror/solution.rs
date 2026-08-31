// Bundle-provided types (assembled with this submission):
//   ListNode:  { field val: i32, next: Option<Box<ListNode>> }
//   TreeNode:  { field val: i32, left/right: Option<Box<TreeNode>> }

impl Solution {
    pub fn mirror_tree(mut root: Option<Box<TreeNode>>) -> Option<Box<TreeNode>> {
        // A mirror is self-similar: to invert a tree, invert both subtrees
        // and cross them at the root. The recursion bottoms out at None,
        // the empty tree, which is its own mirror. Rust's nodes are owned
        // Boxes, so the swap takes both children out with `take` and hands
        // each to its opposite field: same relinking, no allocation.
        if let Some(node) = root.as_deref_mut() {
            let left = Solution::mirror_tree(node.left.take());
            let right = Solution::mirror_tree(node.right.take());
            node.left = right;
            node.right = left;
        }
        root
    }
}
