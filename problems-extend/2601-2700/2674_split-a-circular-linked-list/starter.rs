// Judge-provided types (not editable here; the judge assembles their
// definitions into every submission):
//   ListNode:  { field val: i32, next: Option<Box<ListNode>> }
//   TreeNode:  { field val: i32, left/right: Option<Box<TreeNode>> }
//   SharedListNode: { field val: i32, next: Option<Rc<RefCell<...>>> }

use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn split_circular_linked_list(
        list: Option<Rc<RefCell<SharedListNode>>>,
    ) -> Vec<Option<Rc<RefCell<SharedListNode>>>> {
        panic!("TODO")
    }
}
