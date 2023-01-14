function sayHello(name) {
    console.log(`Hello` + name);
}

function saludarHolaMundo() {
    return "!Hello, word!";
}


module.exports = {
    sayHello: sayHello,
    saludarHolaMundo: saludarHolaMundo
};