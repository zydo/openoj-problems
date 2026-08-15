interface CycleNode {
    val: number;
    next: CycleNode | null;
}

function hasCycle(values: number[], pos: number): boolean {
    if (values.length === 0) {
        return false;
    }
    const nodes: CycleNode[] = values.map((v) => ({ val: v, next: null }));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    let slow: CycleNode | null = nodes[0];
    let fast: CycleNode | null = nodes[0];
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
