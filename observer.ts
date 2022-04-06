interface Subject {
  attachEventListener(observer: Observer): void;
  detachEventListener(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  execute(): void;
}

class MyEvent implements Observer {
  eventID: number;
  callBack: Function;

  constructor(id: number, callBack: Function) {
    this.eventID = id;
    this.callBack = callBack;
  }

  public execute(): void {
    this.callBack();
  }
}

class Button implements Subject {
  private isPressed = false;
  private observers: Array<Observer> = [];

  public toggle() {
    this.isPressed = !this.isPressed;
    if (this.isPressed) this.notifyObservers();
  }

  public notifyObservers(): void {
    for (const event of this.observers) {
      event.execute();
    }
  }

  public attachEventListener(event: MyEvent): void {
    this.observers.push(event);
  }

  public detachEventListener(event: MyEvent): void {
    this.observers = this.observers.filter(
      (currentEvent: MyEvent) => currentEvent.eventID != event.eventID
    );
  }
}

// Client Code
const btn = new Button();
const e1 = new MyEvent(23, function () {
  console.log(`Event ${this.eventID} triggered`);
});

const e2 = new MyEvent(77, function () {
  console.log(`Event ${this.eventID} triggered`);
});

btn.attachEventListener(e1);
btn.attachEventListener(e2);
btn.toggle();
btn.toggle();
btn.detachEventListener(e2);
btn.toggle();
