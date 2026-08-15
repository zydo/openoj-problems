function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
    let cur: (ListNode | null)[] = lists.filter(
        (x): x is ListNode => x !== null && x !== undefined,
    );
    if (cur.length === 0) return null;
    const merge2 = (
        a: ListNode | null,
        b: ListNode | null,
    ): ListNode | null => {
        const dummy = new ListNode(0);
        let tail = dummy;
        while (a !== null && b !== null) {
            if (a.val <= b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }
        tail.next = a !== null ? a : b;
        return dummy.next;
    };
    while (cur.length > 1) {
        const next: (ListNode | null)[] = [];
        for (let i = 0; i < cur.length; i += 2) {
            if (i + 1 < cur.length) {
                next.push(merge2(cur[i]!, cur[i + 1]!));
            } else {
                next.push(cur[i]!);
            }
        }
        cur = next;
    }
    return cur[0]!;
}
