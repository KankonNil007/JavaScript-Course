console.log('Hello');

console.log('Kankon' + 'Nil');

// There is typeof function which tells us if the value is string or number or anything else

console.log(typeof 2);

console.log(typeof 'hello');

// Type Coersion : if you add a string to a number it turns into a string

console.log('KankonNil' + 7);

// Now we will do some examples

console.log('$' + (2095 + 799) / 100);

console.log('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

/*
    There are three ways to create a string:
    1.First one is Quotes''
    2.Second one is Double Quotes""
    3.Third one is Template Strings``

    Hint: There is a problem to use the same character as the creation character. To solve this problem is by using backslashes(\) and then the desired problematic character to use the character without any errors.
*/

console.log('JavaScript');

console.log("I'm learning JavaScript");

console.log(`I'm learning JavaScript`);

console.log('I\'m learning JavaScript');

// There is new command for creating new lines which is \n

console.log('Kankon \nNil');

// Interpolation : A special use for template strings which makes calculation inside strings more efficient.

console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`);

// Multi line strings is new feature for template strings.

console.log(`Kankon
    Nil`);