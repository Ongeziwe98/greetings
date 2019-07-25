describe('greet function' , function(){
    it('should greet a person in "English" language. ' , function(){
       var greetings = GreetFactory();
        assert.deepEqual(greetings.greet("Amanda", "English"),"Hello, Amanda");
    });

    it('should greet a person in "isiXhosa" language. ' , function(){
        var greetings = GreetFactory();
         assert.deepEqual(greetings.greet("Mabaxole","isiXhosa"),"Molo, Mabaxole");
     });

     it('should greet a person in "Afrikaans" language. ' , function(){
        var greetings = GreetFactory();
         assert.deepEqual(greetings.greet("Adonis","Afrikaans"),"Hallo, Adonis");
     });
   
     it('should return number of people greeted. ' , function(){
        var greetings = GreetFactory();
        greetings.greet("English","sbu")
        greetings.greet("Afrikaans","Adonis")
         assert.deepEqual(2,greetings.counterValue());
     });

     it('should not accept duplicates. ' , function(){
        var greetings = GreetFactory();
        greetings.greet("English","sbu")
        greetings.greet("English","sbu")
        greetings.greet("Afrikaans","Adonis")
        greetings.greet("Afrikaans","Adonis")
         assert.deepEqual(2,greetings.counterValue());
     });
     
    //  it('should show an error message when there is no name and language entered in the input box. ' , function(){
    //     var greetings = GreetFactory();
    //      assert.deepEqual(greetings.greet(""),"Please select language or add name");
    //  });

});


//     it('should  add the name to the object if the person has not being greeted. ' , function(){
//        var greetings = GreetFactory();
//         assert.deepEqual(greetings.addName("Amanda"),[{"Amanda"}]);
//     });
// });


