class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class AgeTeller {
    //field
    name: string;
    age: number;

    //constructor
    constructor() {

    }

    //function
    disp() {
        return this.name + " is " + this.age + " years old ";
    }
}

/*
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    var obj = new AgeTeller();
    obj.name = "bishal";
    obj.age = 22;
    document.getElementById("ageteller").innerHTML = obj.disp();
};
*/