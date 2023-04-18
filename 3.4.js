function ElectrikSlave(name, power) {
  this.name = name,
  this.power = power
}

ElectrikSlave.prototype.inRoz = function() {
  console.log(this.name + ' is ON!')
}

ElectrikSlave.prototype.outRoz = function () {
  console.log(this.name + ' is OFF!')
}

function Notebook(name, power, made, model) {
  this.name = name,
  this.power = power,
  this.made = made, 
  this.model = model,
  this.batary = true
}

Notebook.prototype = new ElectrikSlave();

const myNotebook = new Notebook("Ноутбук", 2, "Dell", "N550"); 

function Xolodilnik(name, power, objem, model) {
  this.name = name,
  this.power = power,
  this.smart = true,
  this.objem = objem,
  this.model = model
}

Xolodilnik.prototype = new ElectrikSlave();

const myXolodilnik = new Xolodilnik("Холодильник", 4, 50, "D88i NoFrost");

function Electrodjeyalo(name, power, color) {
  this.name = name,
  this.power = power,
  this.color = color,
  this.batary = false
}

Electrodjeyalo.prototype = new ElectrikSlave();

const myElectrodjeyalo = new Electrodjeyalo("Электрическое одеяло", 1, "зелёный");

myElectrodjeyalo.inRoz();
console.log(myElectrodjeyalo.name + " потребляет " + myElectrodjeyalo.power + " кВт");
myElectrodjeyalo.outRoz();