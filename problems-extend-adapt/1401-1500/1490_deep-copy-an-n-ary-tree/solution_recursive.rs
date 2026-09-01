impl Solution {
    pub fn copy_tree(root: Option<Box<Node>>) -> Option<Box<Node>> {
        root.map(|node| {
            Box::new(Node {
                val: node.val,
                children: node.children.into_iter().map(Self::copy_tree).collect(),
            })
        })
    }
}
