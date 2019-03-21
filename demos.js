

// summary

// expressions vs declarations
// declaraties worden gehoist (naar boven gebracht, geinventariseerd voor de executie)
// declaraties zijn zinnen die beginnen met var, let, const of function
// de rest zijn per definitie een expressie
// expressies worden NOOIT gehoist
// var t = function () {}   <-- is een expressie!! en alleen maar te gebruiken nadat deze expressie is uitgevoerd!
// daarentegen is een declaratie van een functie overal te gebruiken, zelfs voor de declaratie
// function test() {} <-- kun je zelfs gebruiken voordat ie is gedeclareerd


// objecten (zijn eigenlijk dictionaries met key value pairs) kun je voorzien van data
// person.name = "john"
// person.name
// person["name"]

// constructor functions tuigen een object op door op de this impliciete parameter keys te zetten (dictionary vullen)
// constructor functions werken op een meegegeven nieuw aangemaakt object
function Person(name){
    this.name = name;
}

let john = new Person("john");

// data voor iedere instantie maken is prima, maar iedere instantie een onveranderlijke functie meegeven is onzin.
// we willen de functie delen over alle instanties en we willen de instanties de mogelijkheid geven te verbijzonderen

// dit doen we door de aanwezige prototype eigenschap op de constructor function te voorzien van deze methoden
Person.prototype.sayName = function(){}

// de aanroep kan altijd via de instantie, de onderliggende __proto__ instantie verwijst naar het prototype object
// deze bevat de sayname functie en krijgt bij executie de context voor de punt (john) als this mee..
john.sayName() 

// we kunnen verbijzonderen door op de instantie (john) een eigen sayName functie te plaatsen
john.sayName = function(){}

// deze verbergt de gedeelde sayName van het prototype object.


