let x: [string, number];

x = ["hello", 10];

// Initialize it incorrectly
// x = [10, "hello"];

// OK, 'string' can be assigned to 'string | number'
x[3] = "world";

console.log(x[5].toString());

// Error, 'boolean' isn't 'string | number'
// x[6] = true;
