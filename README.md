# Assignment - Await/Async

> Using the async/await pattern to control parallelism

## Introduction

The last evolution of the asynchronous code is to use the async/await pattern.  By decorating a function with the `async` keyword we are effectively telling JavaScript that our function in simplistic terms will return a promise.  To use the `async` keyword simply place it before the function definition.

When a function is decorated with the `async` keyword, at least one `await` keyword must be used.  Notice in the code below that the await keyword is use before the  `values.reduce()`
  
```js
const add = async (...values) => await values.reduce((prev, current) => prev + current, 0);

const result = add(1,2,3); // 6
```

### The things we can `await`

The most exciting part about the `async/await` pattern is the simplicity at which we can incorporate the pattern.  Almost any function can turn convert into an `async` one, and the `await` keyword can be used on a Promise or value.  Meaning, we can literally await anything. 
 
When the `await` is encountered and the thing that it's waiting for is not a promise, `await` will wrap it in a promise, and you can think of the code implementation to look like similar to `Promise.resolve(value)`.

### When should we use `async/await`?

The usual answer to these questions is '... it depends', and it really does depend on what you are doing.  I've taken the slightly more aggressive  mentality of applying `async` to just about everything that makes sense.  I honestly, use it all over the place.
  
I like the pattern because it turns asynchronous code into code that appears synchronous.

## Assignment

> Using the [Pokemon API](https://pokeapi.co/docsv2/#) once again and the library `pokedex-promise-v2`

1. Create an abject literal that contains two properties: pokemon, items.  Export this object literal as the default.

```js
export default { 
  pokemon: {}, 
  items: {} 
};
```

Within the `pokemon: {}` property: 

1. Create a function `allNames()`.  Use the `async` keyword to retrieve all the names.  The return value should be an array of pokemon's name, and their id's: `[ { name, id }]` (You'll need to strip the id out of the url field)
4. Create a function `find(idOrName)`. Use the `async` keyword to retrieve a pokemon by its `name` or `id`.  The function should return back an object that contains a pokemon.

Within the `items: {}` property:

1. Create a function `all()`.  Use the `async` keyword to retrieve all the items from the api. The functions should return `[{ name, id}]`. You will also need to pull out the id out of the url.  (Make sure your not duplicating code)
2. Create a function `find(idOrName)`. Use the `async` keyword to retrieve an item by its `name` or `id`.  The function should return an object that contains an item.


### Resources

* [await definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [async definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
