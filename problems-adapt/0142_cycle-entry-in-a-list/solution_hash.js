/**
 * @param {number[]} values
 * @param {number} tailLink
 * @return {number}
 */
var listCycleEntry = function (values, tailLink) {
    if (values.length === 0) {
        return -1;
    }
    // Materialize the wire form: one node per value, then close the cycle.
    const nodes = values.map((v) => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (tailLink !== -1) {
        nodes[nodes.length - 1].next = nodes[tailLink];
    }
    // Walk from the head remembering every node by identity. The first node
    // to come around a second time is the cycle's entry; running off the
    // end instead means no cycle.
    const seen = new Set();
    let node = nodes[0];
    while (node !== null && !seen.has(node)) {
        seen.add(node);
        node = node.next;
    }
    if (node === null) {
        return -1;
    }
    // The judge wants an index: count steps from the head to the entry.
    let index = 0;
    let entry = nodes[0];
    while (entry !== node) {
        entry = entry.next;
        index++;
    }
    return index;
};
