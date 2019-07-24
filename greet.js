function GreetFactory(list) {
    var peopleGreeted = list;
    var theGreeting;

  

    function greet(name, language) {
        var  upperCase = name.charAt(0).toUpperCase()+ name.slice(1);
        if (peopleGreeted[name] === undefined) {
            peopleGreeted[name] = 0
        }
        if(!language){
            return "Please select language!"
        }

        // if (name === "" && language === undefined) {
        //             return "Please select language and insert your name!";
        //         }
        //         if (language === undefined) {
        //             return "Please select language!";
        //         }
        //         if (name === "") {
        //             return "Please enter name!";
        //         }
        

        if (language === "isiXhosa") {
            theGreeting = "Molo, " +  upperCase;

        } else if (language === "English") {
            theGreeting = "Hello, " +  upperCase;

        } else if (language === "Afrikaans") {
            theGreeting = "Hallo, " +  upperCase;
        }
        // }else{
        //     theGreeting ="Please enter a name and a language";
        // }

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