/**
 * @param {Node} root
 * @return {Node}
 */
var copyTree = function (root) {
    if (root === null) {
        return null;
    }
    const clone = new Node(root.val);
    for (const child of root.children) {
        clone.children.push(copyTree(child));
    }
    return clone;
};
