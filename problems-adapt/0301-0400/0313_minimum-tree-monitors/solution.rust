impl Solution {
    pub fn minimum_tree_monitors(root: Option<Box<TreeNode>>) -> i32 {
        // States: 0 = uncovered, 1 = has a monitor, 2 = covered.
        fn dfs(node: &Option<Box<TreeNode>>, monitors: &mut i32) -> i32 {
            match node {
                // Null reports covered so leaves start uncovered and push
                // the first monitor one level up.
                None => 2,
                Some(n) => {
                    let left = dfs(&n.left, monitors);
                    let right = dfs(&n.right, monitors);
                    if left == 0 || right == 0 {
                        // An uncovered child forces a monitor here — the
                        // parent of an uncovered node is always the best
                        // placement.
                        *monitors += 1;
                        1
                    } else if left == 1 || right == 1 {
                        2
                    } else {
                        0
                    }
                }
            }
        }
        let mut monitors = 0;
        if dfs(&root, &mut monitors) == 0 {
            monitors += 1;
        }
        monitors
    }
}
