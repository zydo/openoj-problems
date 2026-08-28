// Common data types supplied to every Go submission (compiled as one
// package with the submission). Field layout is the judge's wire
// contract — see common/README.md.
package main

type ListNode struct {
	Val  int
	Next *ListNode
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Node struct {
	Val      int
	Children []*Node
}

type QuadNode struct {
	Val         bool
	IsLeaf      bool
	TopLeft     *QuadNode
	TopRight    *QuadNode
	BottomLeft  *QuadNode
	BottomRight *QuadNode
}

// NestedInteger holds an integer or a list of NestedInteger (never both);
// the API mirrors LeetCode's Go template.
type NestedInteger struct {
	integer  *int
	children []*NestedInteger
}

func (n NestedInteger) IsInteger() bool { return n.integer != nil }

func (n NestedInteger) GetInteger() int { return *n.integer }

func (n NestedInteger) GetList() []*NestedInteger { return n.children }

func (n *NestedInteger) SetInteger(value int) {
	held := value
	n.integer = &held
	n.children = nil
}

func (n *NestedInteger) Add(elem NestedInteger) {
	n.integer = nil
	n.children = append(n.children, &elem)
}

type NodeWithNext struct {
	Val    int
	Left   *NodeWithNext
	Right  *NodeWithNext
	Next   *NodeWithNext
	Parent *NodeWithNext
}

type MultiListNode struct {
	Val   int
	Prev  *MultiListNode
	Next  *MultiListNode
	Child *MultiListNode
}
