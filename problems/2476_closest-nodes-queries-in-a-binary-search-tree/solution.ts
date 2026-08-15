function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    const values: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        values.push(current.val);
        current = current.right;
    }

    const bisectLeft = (target: number): number => {
        let lo = 0;
        let hi = values.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (values[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    };

    const answer: number[][] = [];
    for (const query of queries) {
        const lower = bisectLeft(query);
        const upper = bisectLeft(query + 1);
        const minimum = upper > 0 ? values[upper - 1] : -1;
        const maximum = lower < values.length ? values[lower] : -1;
        answer.push([minimum, maximum]);
    }
    return answer;
}
