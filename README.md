# React - Patterns

## Lecture structure: 
1. Review on Primitive Types and Data Structures 
2. Mutability vs Immutability
3. Spread Operator 
4. ES6 deconstructuring concept


Review on Primitive Types and Data Structures 
### Primitive Types: 

-> String
-> Number
-> Boolean
-> Symbol
-> null
-> BigInt
-> undefined

### Non-Primitive Data Types (reference types )

-> Object
-> Array
-> Functions

2.Mutability vs Immutability

Primitive Types:
<img width="700" alt="Screenshot 2022-12-02 at 13 44 50" src="https://user-images.githubusercontent.com/37075225/205343195-3037fbde-83fe-4ed5-8e60-ddfde6620e72.png">

Non Primitive Types: 
<img width="700" alt="Screenshot 2022-12-02 at 13 51 34" src="https://user-images.githubusercontent.com/37075225/205344010-27c3829e-b6b2-461b-a266-c3e190f70246.png">

```
Considering this: when we want to change a reference data type. We need to create copies from it to modify it
```

3. The Spread Operator 

(three dots operator `...`)

Allows us to grab individual elements of any iterable data structure 
<img width="499" alt="Screenshot 2022-12-02 at 14 15 34" src="https://user-images.githubusercontent.com/37075225/205348626-fac58548-ad39-4d26-819b-cfdc532cdb01.png">


This operator helps us to successfully and efficiently make shallow copies from referecence (non primitive) data structures. We use it a lot for state modification in React. 

4. Deconstructuring 

Allow us to unpack values from arrays. 

```
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```
