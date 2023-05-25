class Person {
    //properties
    //name, address, state, city, zip, phoneNumber
    
    //getters & setters
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }


    get address(){
        return this.address;
    }
    set address(address){
        this._address = address;
    }
    

    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }

    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }
}

const save = () => {
    alert("save method called");
    let personData = setPersonData();
    //alert(personData._name);
    //console.log(PersonData._address);
    //console.log(PersonData._state);
    //alert(personData._city);
    //console.log(PersonData._zip);
    //console.log(PersonData._phoneNumber);
    createAndStore(personData);
    resetForm(personData);
};

const setPersonData = () => {
    alert("set method called");
    let personData = new Person();

    personData._name = getInputValueById('#name');
    personData._address = getInputValueById('#address');
    personData._state = getInputValueById('#state');
    personData._city = getInputValueById('#city');
    personData._zip = getInputValueById('#zip');
    personData._phoneNumber = getInputValueById('#phonenumber');
    
    return personData;
}

const getInputValueById = (id) => {
	let value = document.querySelector(id).value;
	return value;
}

const createAndStore = (personData) => {
    alert("insed local storage method");
    alert(personData._name);
    let personList = JSON.parse(localStorage.getItem('personList'));
    if(personList != undefined){
        personList.push(personData);
    }else{
        personList = [personData];
    }
    localStorage.setItem("personList",JSON.stringify(personList));
}