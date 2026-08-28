// Judge-provided types (not editable here; the judge assembles their
// definitions into every submission):
//   ListNode:  { field val: i32, next: Option<Box<ListNode>> }
//   TreeNode:  { field val: i32, left/right: Option<Box<TreeNode>> }
//   NodeWithNext:  { field val: i32, left/right/next/parent }

use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn connect(root: Option<Rc<RefCell<NodeWithNext>>>) -> Option<Rc<RefCell<NodeWithNext>>> {
        panic!("TODO")
    }
}
