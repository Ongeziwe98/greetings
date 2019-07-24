describe('greet function' , function(){
    it('should greet a person in "English" language. ' , function(){
       var greetings = GreetFactory();
        assert.deepEqual(greetings.greet("Amanda","English"),"Hello, Amanda");
    });

    it('should greet a person in "isiXhosa" language. ' , function(){
        var greetings = GreetFactory();
         assert.deepEqual(greetings.greet("Mabaxole","isiXhosa"),"Molo, Mabaxole");
     });

     it('should greet a person in "Afrikaans" language. ' , function(){
        var greetings = GreetFactory();
         assert.deepEqual(greetings.greet("Adonis","Afrikaans"),"Hallo, Adonis");
     });
   
    //  it('should greet a person in "Afrikaans" language. ' , function(){
    //     var greetings = GreetFactory();
    //      assert.deepEqual(greetings.greet("Adonis","Afrikaans"),"Hallo, Adonis");
    //  });
});

describe('name object' , function(){
    it('should  add the name to the object if the person has not being greeted. ' , function(){
       var greetings = GreetFactory();
        assert.deepEqual(greetings.addName("Amanda"),[{"Amanda"}]);
    });
});


