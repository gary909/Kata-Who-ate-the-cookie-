function cookie(x){
    if (typeof x === 'string'){
        return "Who ate the last cookie? It was Zach!";
    } else if (typeof x === 'number'){
        return "Who ate the last cookie? It was Monica!";
    } else {
        return "Who ate the last cookie? It was the dog!";
    }
}

console.log(cookie("Ryan")); // "Who ate the last cookie? It was Zach!"
console.log(cookie(26)); // "Who ate the last cookie? It was Monica!"
console.log(cookie(2.3)); // "Who ate the last cookie? It was Monica!"
console.log(cookie(true)); // "Who ate the last cookie? It was the dog!"