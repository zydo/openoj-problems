function accountsMerge(accounts: string[][]): string[][] {
    const parent = new Map<string, string>();
    const find = (x: string): string => {
        if (!parent.has(x)) parent.set(x, x);
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x))!);
            x = parent.get(x)!;
        }
        return x;
    };
    const union = (a: string, b: string): void => {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) parent.set(ra, rb);
    };

    const owner = new Map<string, string>();
    for (const account of accounts) {
        const name = account[0];
        const emails = account.slice(1);
        for (const email of emails) {
            if (!parent.has(email)) parent.set(email, email);
            owner.set(email, name);
        }
        for (let i = 1; i < emails.length; i++) {
            union(emails[0], emails[i]);
        }
    }

    const groups = new Map<string, Set<string>>();
    const order: string[] = [];
    for (const account of accounts) {
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            const root = find(email);
            if (!groups.has(root)) {
                groups.set(root, new Set<string>());
                order.push(root);
            }
            groups.get(root)!.add(email);
        }
    }

    const merged: string[][] = [];
    for (const root of order) {
        const emails = Array.from(groups.get(root)!).sort();
        merged.push([owner.get(root)!].concat(emails));
    }
    return merged;
}
