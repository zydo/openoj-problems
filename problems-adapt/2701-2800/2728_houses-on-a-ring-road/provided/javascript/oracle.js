// Problem-provided oracle (Ring), JavaScript side. Evaluated
// with every submission by the judge; never editable in the editor.
// Constructed from the case state: the door states (generic array,
// integers may arrive as BigInt for exactness) plus the query budget;
// the agent starts at the first house.
class Ring {
    constructor(construction, budget) {
        this.doors = construction[0].map((item) => Number(item));
        this.budget = Number(budget);
        this.position = 0;
    }

    openDoor() {
        if (this.budget <= 0) {
            throw new Error("Ring query budget exhausted");
        }
        this.budget -= 1;
        this.doors[this.position] = 1;
    }

    closeDoor() {
        if (this.budget <= 0) {
            throw new Error("Ring query budget exhausted");
        }
        this.budget -= 1;
        this.doors[this.position] = 0;
    }

    isDoorOpen() {
        if (this.budget <= 0) {
            throw new Error("Ring query budget exhausted");
        }
        this.budget -= 1;
        return this.doors[this.position] === 1;
    }

    moveRight() {
        if (this.budget <= 0) {
            throw new Error("Ring query budget exhausted");
        }
        this.budget -= 1;
        this.position = (this.position + 1) % this.doors.length;
    }

    moveLeft() {
        if (this.budget <= 0) {
            throw new Error("Ring query budget exhausted");
        }
        this.budget -= 1;
        this.position = (this.position + this.doors.length - 1) % this.doors.length;
    }
}
