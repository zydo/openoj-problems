// Common data types supplied to every Rust submission (assembled into
// one crate source with the submission). Field layout is the judge's
// wire contract — see common/README.md.
//
// The file deliberately carries no `use` imports: submission sources may
// import std::rc::Rc and std::cell::RefCell themselves without colliding
// with this preamble, so shared shapes are spelled fully qualified.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    pub fn new(val: i32) -> Self {
        ListNode { val, next: None }
    }
}

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Box<TreeNode>>,
    pub right: Option<Box<TreeNode>>,
}

impl TreeNode {
    pub fn new(val: i32) -> Self {
        TreeNode { val, left: None, right: None }
    }
}

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct Node {
    pub val: i32,
    pub children: Vec<Option<Box<Node>>>,
}

impl Node {
    pub fn new(val: i32) -> Self {
        Node { val, children: Vec::new() }
    }
}

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct QuadNode {
    pub val: bool,
    pub is_leaf: bool,
    pub top_left: Option<Box<QuadNode>>,
    pub top_right: Option<Box<QuadNode>>,
    pub bottom_left: Option<Box<QuadNode>>,
    pub bottom_right: Option<Box<QuadNode>>,
}

impl QuadNode {
    pub fn new(val: bool, is_leaf: bool) -> Self {
        QuadNode {
            val,
            is_leaf,
            top_left: None,
            top_right: None,
            bottom_left: None,
            bottom_right: None,
        }
    }
}

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct NestedInteger {
    integer: Option<i32>,
    list: Vec<NestedInteger>,
}

impl NestedInteger {
    pub fn new() -> Self {
        NestedInteger { integer: None, list: Vec::new() }
    }

    pub fn with_integer(value: i32) -> Self {
        NestedInteger { integer: Some(value), list: Vec::new() }
    }

    pub fn is_integer(&self) -> bool {
        self.integer.is_some()
    }

    pub fn get_integer(&self) -> i32 {
        self.integer.unwrap_or(0)
    }

    pub fn set_integer(&mut self, value: i32) {
        self.integer = Some(value);
        self.list = Vec::new();
    }

    pub fn add(&mut self, item: NestedInteger) {
        self.integer = None;
        self.list.push(item);
    }

    pub fn get_list(&self) -> &[NestedInteger] {
        &self.list
    }
}

impl Default for NestedInteger {
    fn default() -> Self {
        NestedInteger::new()
    }
}

// Shared-ownership shapes: a next/prev/random pointer that two owners
// reach, or a ring closed onto its own head, cannot be expressed with
// Box's single owner, so these render as Rc<RefCell<...>>.
#[derive(Clone, Debug)]
pub struct NodeWithNext {
    pub val: i32,
    pub left: Option<std::rc::Rc<std::cell::RefCell<NodeWithNext>>>,
    pub right: Option<std::rc::Rc<std::cell::RefCell<NodeWithNext>>>,
    pub next: Option<std::rc::Rc<std::cell::RefCell<NodeWithNext>>>,
    pub parent: Option<std::rc::Rc<std::cell::RefCell<NodeWithNext>>>,
}

impl NodeWithNext {
    pub fn new(val: i32) -> Self {
        NodeWithNext { val, left: None, right: None, next: None, parent: None }
    }
}

#[derive(Clone, Debug)]
pub struct MultiListNode {
    pub val: i32,
    pub prev: Option<std::rc::Rc<std::cell::RefCell<MultiListNode>>>,
    pub next: Option<std::rc::Rc<std::cell::RefCell<MultiListNode>>>,
    pub child: Option<std::rc::Rc<std::cell::RefCell<MultiListNode>>>,
}

impl MultiListNode {
    pub fn new(val: i32) -> Self {
        MultiListNode { val, prev: None, next: None, child: None }
    }
}

#[derive(Clone, Debug)]
pub struct SharedListNode {
    pub val: i32,
    pub next: Option<std::rc::Rc<std::cell::RefCell<SharedListNode>>>,
}

impl SharedListNode {
    pub fn new(val: i32) -> Self {
        SharedListNode { val, next: None }
    }
}
