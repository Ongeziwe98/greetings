function GreetFactory(list) {
    var peopleGreeted = list || {};
    var theGreeting;

    function greet(name, language) {
        
        if (!language || !name) {
            return "Please select language or add name!"
        }
        var upperCase = name.charAt(0).toUpperCase() + name.slice(1);
        var lowerAll = name.toLowerCase()
        if (peopleGreeted[lowerAll] === undefined) {
            peopleGreeted[lowerAll] = 0
        }
       
        if (language === "isiXhosa") {
            theGreeting = "Molo, " + upperCase;

        } else if (language === "English") {
            theGreeting = "Hello, " + upperCase;

        } else if (language === "Afrikaans") {
            theGreeting = "Hallo, " + upperCase;
        }
       

        return theGreeting
    }

    function findName() {
        return peopleGreeted
    }

    function counterValue() {
        var namesObject = Object.keys(peopleGreeted)
        console.log(namesObject.length)
        return namesObject.length

    }

    return {
        greet,
        findName,
        counterValue
    }
}