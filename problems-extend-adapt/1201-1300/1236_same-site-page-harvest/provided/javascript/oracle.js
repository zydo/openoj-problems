// Problem-provided oracle (LinkIndex), JavaScript side. Evaluated with
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the url library and the edge list
// (generic values) and the query budget.
class LinkIndex {
    constructor(construction, budget) {
        const names = construction[0].map((entry) => String(entry));
        this.index = new Map(names.map((name, i) => [name, i]));
        this.links = names.map(() => []);
        for (const pair of construction[1]) {
            this.links[Number(pair[0])].push(names[Number(pair[1])]);
        }
        this.budget = Number(budget);
        this.fetched = new Set();
    }

    // The harvestSite's observable effect: every page the crawler fetched.
    verdict() {
        return [...this.fetched].sort();
    }

    linksFrom(url) {
        if (this.budget <= 0) {
            throw new Error("LinkIndex query budget exhausted");
        }
        this.budget -= 1;
        this.fetched.add(url);
        const position = this.index.get(url);
        return position === undefined ? [] : this.links[position].slice();
    }
}
