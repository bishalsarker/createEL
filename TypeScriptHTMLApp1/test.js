var Car = (function () {
    function Car(bn, mn, p) {
        this.brand_name = bn;
        this.model_name = mn;
        this.price = p;
    }
    Car.prototype.createCar = function () {
        var car = document.createElement("p");
        var br = document.createElement("br");
        var txtBname = document.createTextNode("Brand: " + this.brand_name);
        var txtMname = document.createTextNode("Model: " + this.model_name);
        car.appendChild(txtBname);
        car.appendChild(br);
        car.appendChild(txtMname);
        car.setAttribute("id", "carDetails");
        document.body.appendChild(car);
    };
    return Car;
}());
