impl Solution {
    pub fn emit_list_in_reverse(sealedListNode: &mut SealedListNode) -> () {
        // Forward is the only direction the API offers, and output must run
        // backward — recurse to the end first, then print on the way back,
        // letting the call stack hold the not-yet-printed prefix. The next
        // reference is taken out of each node (get_next consumes it), so
        // every hop hands the recursion a fresh exclusive borrow; None
        // marks the end of the list.
        Self::walk(sealedListNode);
    }

    fn walk(node: &mut SealedListNode) -> () {
        let next = node.get_next();
        if let Some(next_node) = next {
            Self::walk(next_node);
        }
        node.print_value();
    }
}
