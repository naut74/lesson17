
class SwitchButton {
    constructor(status,lamp){
        this.status = status;
        this.lamp = lamp;
    };
    connectToLamp(electricLamp){
        this.lamp = electricLamp;
    };
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    };
    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    };
}
class ElectricLamp {
    constructor(status){
        this.status = status;
        this.lampImage = document.getElementById('lampImage');
    };
    turnOn(){
        this.status = true;
        this.lampImage.src = 'images/lamp-on.jpg';
    };
    turnOff(){
        this.status = false;
        this.lampImage.src = 'images/lamp-off.jpg';
    };
};

let lamp = new ElectricLamp(false);
let switchButton = new SwitchButton(false, lamp);

document.getElementById('onOff').addEventListener('change', function(){
    if(this.checked){
        switchButton.switchOn();
    } else { 
        switchButton.switchOff();
    }
});