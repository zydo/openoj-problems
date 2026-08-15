function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    const del = (node: TreeNode | null, key: number): TreeNode | null => {
        if (node === null) {
            return null;
        }
        if (key < node.val) {
            node.left = del(node.left, key);
        } else if (key > node.val) {
            node.right = del(node.right, key);
        } else {
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            let successor = node.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
            node.val = successor.val;
            node.right = del(node.right, successor.val);
        }
        return node;
    };

    return del(root, key);
}
