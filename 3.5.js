class ElectrikSlave {
	constructor(name, power) {
		this.name = name,
		this.power = power
	}
	
	inRoz(){
		console.log(this.name + ' is ON!')
	}
	
	outRoz(){
		console.log(this.name + ' is OFF!')
	}
}

class Notebook extends ElectrikSlave {
	constructor(name, power, made, model) {
		super(name, power);
		this.made = made,
		this.batary = true,
		this.model = model
	}
}

const myNotebook = new Notebook("Ноутбук", 2, "Dell", "N550");

class Xolodilnik extends ElectrikSlave {
	constructor(name, power, objem, model) {
		super(name, power);
		this.smart = true,
		this.objem = objem,
		this.model = model
	}
}

const myXolodilnik = new Xolodilnik("Холодильник", 4, 50, "D88i NoFrost");

class Electrodjeyalo extends ElectrikSlave {
	constructor(name, power, color) {
		super(name, power);
		this.color = color,
		this.batary = false
	}
}

const myElectrodjeyalo = new Electrodjeyalo("Электрическое одеяло", 1, "зелёный");

myElectrodjeyalo.inRoz();
console.log(myElectrodjeyalo.name + " потребляет " + myElectrodjeyalo.power + " кВт");
myElectrodjeyalo.outRoz();