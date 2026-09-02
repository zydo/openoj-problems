// Problem-provided driver for 2694 event-bus. Assembled into every
// submission by the judge ahead of the submitted code; never editable in
// the editor. This file is the hidden implementation — solvers see only
// the public API documented in the statement.
//
// The driver owns one case's actions/values script (the same shape as the
// statement's Input): drive() receives the submission's EventBus class,
// constructs it at the script's leading "EventBus" action, then replays
// subscribe / emit / unsubscribe rows against that one instance. Each
// callback is built from its function source, subscribe must hand back an
// object with an unsubscribe method, and emit must return an array — the
// driver throws (a runtime error) on any other shape. The judged verdict is
// the recorded transcript: [] for the construction, ["subscribed"] per
// subscribe, ["emitted", results] per emit with every callback return in
// subscribe order, and ["unsubscribed", index] per unsubscribe.

type BusSubscription = { unsubscribe(): void };

type BusLike = {
    subscribe(eventName: string, callback: (...args: any[]) => any): BusSubscription;
    emit(eventName: string, args?: any[]): any[];
};

type BusConstructor = new () => BusLike;

class BusCase {
    private actions: string[];
    private values: any[][];
    private outputs: any[][] = [];

    // The interactive wrapper hands the oracle one array of the manifest's
    // construct values (actions, values) plus the query budget (unused —
    // replaying a bounded script needs no call accounting).
    constructor([actions, values]: any[], budget?: any) {
        void budget;
        this.actions = actions;
        this.values = values;
    }

    // Replay this case's script against the submission's EventBus
    // class, recording one transcript row per action.
    drive(busClass: BusConstructor): void {
        let bus: BusLike | null = null;
        const handles: BusSubscription[] = [];
        for (let at = 0; at < this.actions.length; at++) {
            const action = this.actions[at];
            const args = this.values[at];
            if (action === "EventBus") {
                if (bus !== null) {
                    throw new Error("the script constructs EventBus more than once");
                }
                bus = new busClass();
                this.outputs.push([]);
            } else if (action === "subscribe") {
                if (bus === null) {
                    throw new Error("the script must construct the EventBus first");
                }
                const [eventName, source] = args;
                const callback = new Function("return (" + source + ");")() as (...args: any[]) => any;
                const handle = bus.subscribe(eventName, callback);
                if (handle === null || typeof handle !== "object" || typeof handle.unsubscribe !== "function") {
                    throw new Error("subscribe must return an object with an unsubscribe method");
                }
                handles.push(handle);
                this.outputs.push(["subscribed"]);
            } else if (action === "emit") {
                if (bus === null) {
                    throw new Error("the script must construct the EventBus first");
                }
                const results = args.length > 1 ? bus.emit(args[0], args[1]) : bus.emit(args[0]);
                if (!Array.isArray(results)) {
                    throw new Error("emit must return an array of callback results");
                }
                this.outputs.push(["emitted", results]);
            } else if (action === "unsubscribe") {
                if (bus === null) {
                    throw new Error("the script must construct the EventBus first");
                }
                const [index] = args;
                if (!(index in handles)) {
                    throw new Error("unsubscribe referenced an unknown subscription");
                }
                handles[index].unsubscribe();
                this.outputs.push(["unsubscribed", index]);
            } else {
                throw new Error("Unknown action: " + action);
            }
        }
    }

    verdict(): any[][] {
        return this.outputs;
    }
}
