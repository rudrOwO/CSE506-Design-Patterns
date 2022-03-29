class Task {
    private list: Array<number>;
    private strategy: Strategy
    
    public constructor (list: Array<number>, strategy: Strategy) {
        this.list = list;
        this.strategy = strategy;
    }
    
    public applyStrategy() {
        return this.strategy.applySort(this.list);
    }
}

interface Strategy {
    applySort(list: Array<number>): Array<number>
}

class Ascending implements Strategy {
    public constructor() {}
    
    public applySort(list: Array<number>): Array<number> {
        return list.sort(); // Default i.e. asencing
    }
}


class Descending implements Strategy {
    public constructor() {}

    public applySort(list: Array<number>): Array<number> {
        return list.sort((a, b) => b - a); // Descending algo
    }
}

// Client Code
const task = new Task([1, 2, 3], new Descending())
const sortedList = task.applyStrategy();
console.log(sortedList);

