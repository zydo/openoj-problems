// Common data types supplied to every TypeScript submission. Type
// declarations only — they compile away before execution. Field layout
// is the judge's wire contract — see common/README.md.

declare class ListNode {
  val: number;
  next: ListNode | null;
}

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

declare class Node {
  val: number;
  children: Node[];
}
