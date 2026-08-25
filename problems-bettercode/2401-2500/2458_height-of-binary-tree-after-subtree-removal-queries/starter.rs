#[derive(PartialEq, Eq, Clone, Debug)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Box<TreeNode>>,
    pub right: Option<Box<TreeNode>>,
}

impl Solution {
    pub fn tree_queries(root: Option<Box<TreeNode>>, queries: Vec<i32>) -> Vec<i32> {
        panic!("TODO")
    }
}
