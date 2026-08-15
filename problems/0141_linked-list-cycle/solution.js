/**
 * @param {number[]} values
 * @param {number} pos
 * @return {boolean}
 */
var hasCycle = function (values, pos) {
    if (values.length === 0) {
        return false;
    }
    const nodes = values.map((v) => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    let slow = nodes[0];
    let fast = nodes[0];
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
