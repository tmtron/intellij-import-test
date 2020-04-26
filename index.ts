import {snakeCase} from "snake-case";

/**
 * note: the snake-case package is explicitly imported in package.json: auto-import works
 */
const x = snakeCase('snakeCase');

/**
 * note: the camel-case package is NOT explicitly imported in package.json: auto-import does not work, even though
 * we import change-case
 */
const camel = camelCase

interface  Foo {
    bar:String;
}

// const fn = (foo) => foo.bar;
