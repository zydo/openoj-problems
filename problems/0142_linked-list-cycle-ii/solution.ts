interface CycleNode {
    val: number;
    next: CycleNode | null;
}

function detectCycle(values: number[], pos: number): number {
    if (values.length === 0) {
        return -1;
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
            // Phase 2: one pointer back at the head; both advance one
            // step and meet exactly at the cycle-entry node.
            let finder: CycleNode | null = nodes[0];
            while (finder !== slow) {
                finder = finder!.next;
                slow = slow!.next;
            }
            let index = 0;
            let entry: CycleNode | null = nodes[0];
            while (entry !== finder) {
                entry = entry!.next;
                index++;
            }
            return index;
        }
    }
    return -1;
}
