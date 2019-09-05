class Car {
    brand_name: string;
    model_name: string;
    price: number;

    constructor(bn: string, mn: string, p: number) {
        this.brand_name = bn;
        this.model_name = mn;
        this.price = p;
    }

    createCar() {
        var car = document.createElement("p");
        var br = document.createElement("br");
        var txtBname = document.createTextNode("Brand: " + this.brand_name); 
        var txtMname = document.createTextNode("Model: " + this.model_name);          

        car.appendChild(txtBname);
        car.appendChild(br);
        car.appendChild(txtMname);
        car.setAttribute("id", "carDetails");
        document.body.appendChild(car);
    }
}