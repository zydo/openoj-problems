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
