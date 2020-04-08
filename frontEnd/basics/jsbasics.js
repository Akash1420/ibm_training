console.log('hello check');

function foo(){
    console.log("This is Foo.");
}

var bar = function(){
    console.log("This is bar");
}

foo();
bar();

function A(){
    console.log("This is A");

    function B(){
        console.log("This is B");
    }

    return B;
}

s=A();
s();


