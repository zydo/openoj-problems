/**
 * @param {number[]} values
 * @param {number} tailLink
 * @return {boolean}
 */
var listContainsCycle = function (values, tailLink) {
    if (values.length === 0) {
        // Empty input is acyclic by convention.
        return false;
    }
    // Materialize the wire form: one node per value, then link in order.
    const nodes = values.map((v) => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    // Close the cycle by pointing the tail at the given index.
    if (tailLink !== -1) {
        nodes[nodes.length - 1].next = nodes[tailLink];
    }
    // Floyd's tortoise and hare: slow advances one node per step, fast two.
    let slow = nodes[0];
    let fast = nodes[0];
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // fast gains one node per lap on slow, so inside a cycle it must
        // catch slow within a single lap: meeting proves the cycle.
        if (slow === fast) {
            return true;
        }
    }
    // fast ran past the end of the list: no cycle.
    return false;
};
