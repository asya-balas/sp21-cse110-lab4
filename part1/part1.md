### Part 1a
1. Line 9 will print: `values added: 20`
2. Line 13 will print: `final result: 20`
3. Line 9 will print: `values added: 20`
4. Line 13 will return an error because the code is trying to print `result`'s value, which is 20. However, `result` was declared using the `let` keyword inside the `if` code block, so it isn't accessable in Line 13 outside of the `if` code block, hence the error.
5. Line 9 will return an error because it is trying to assign a value to a `const` variable, which cannot be done.
6. Line 13 will return an error, as `const` variables behave in the same manner as `let` variables - they cannot be accessed outside of the code block they were created in. (Same explanation as Question 4, as `const` and `let` behave the same with code blocks)
   
### Part 1b 
1. Line 12 will print: `3` ; this is because `var` variables have a global scope. As `i` was delcared using `var`, it can be accessed outside of the `for` loop it was created in. Additionally, as Line 12 is outside of the `for` loop, when it is accessing `i`, it will be the value of `i` that causes the for loop to halt, which is `3` in this case.
2. Line 13 will print: `150` ; again, this is because `var discountedPrice` has a global scope and can be accessed outside of the code block it was created in. `150` is the calculated value for `discountedPrice` during the last for loop iteration as `prices[i]` = 300 and `discount` = 0.5
3. Line 14 will print: `150`. This is for the same reason as the above question. The last calculated value of `finalPrice` is done when `i = 2`, so `discountedPrice = 150`, and doing the calculation in Line 8 results in `finalPrice = 150`. 
4. This code doesn't return anything that we can see. The call to `return` ends the `discountPrices` function, but as `discounted` is an array and we haven't assigned it to anything in the main "body" of the code, we don't see anything being returned. So the reference to `discounted` is returned, but we don't see it because we haven't assigned it to anything. 
5. There will be an error at Line 12 because `i` cannot be accessed outside of the `for` loop as it was declared with `let`. Essentially, the variable `i` is not defined at Line 12. 
6. An error will be returned at Line 13 because `discountedPrice` is not defined there as it was defined in Line 7 using the `let` keyword in the `for` loop. Therefore, `discountedPrice` cannot be accessed at Line 13. 
7. Line 14 will print: `150` because `finalPrice` was declared/instantiated in the beginning of the function, not within the `for` loop. Although it gets defined in the `for` loop, we can access the variable `finalPrice` anywhere in the function.
8. This function's return is very similar to that of Part 1b, Question 4. We don't see anything being returned, but that's because the function returns a reference to the `discounted` array created in the beginning of the function. There is no error because `discounted` was delcared within the function, but outside of the `for` loop, so the variable can be accessed anywhere within the `discountPrices` funcion.
9. There will be an error at Line 11 because the variable `i` is not defined outside of the `for` loop.
10. `3` is returned. This is because the `length` variable was declared at the beginning of the function, not within the `for` loop. This makes it accessable throughout the entire function, as it is how `const` variable behave.
11. This function will return a reference to a filled `discounted` array. This is because the `const` keyqord just means that `discounted` cannot point to another array, but its contents can still be changed.
12. 
    A. `student.name`  
    B. `student["Grad Year"]`  
    C. `student.greeting()`  
    D. `student["Favorite Teacher"].name`   
    E. `student.courseload[0]`
13. Arithmetic
    A. '3' + 2 = '32' since integers map to their exact string representation       
    B. '3' - 2 =  1 since `-` is not part of string converison, the `'3'` will map to its integer representation  
    C. 3 + null = 3 since null maps to 0  
    D. '3' + null = '3null' since null maps to its exact string representation when doing a string conversion  
    E. true + 3 = 4 since true maps to 1  
    F. false + null = 0 since false maps to 0 and null maps to 0  
    G. '3' + undefined = '3undefined' since `+` can be concatenation in string conversion, undefined becomes its exact string representation  
    H. '3' - undefined = NaN since undefined becomes `NaN` when doing a numeric conversion  
14. Comparison
    A. '2' > 1 = true since string '2' becomes a number 2  
    B. '2' < '12' = false since comparisons between two strings compares each individual character. Here, '2' is greater than '1', so the comparison is true  
    C. 2 == '2' = true since '2' becomes a number 2  
    D. 2 === '2' = false since the number 2 does not equal the string '2' - they're both of different types    
    E. true == 2 = false since the integer 2 isn't coverted to a boolean, and true doesn't equal 2  
    F. true === Boolean(2) = true since Boolean(2) becomes true, and because `true` and `Boolean(2)` are of the same data type  
15. `==` is a regular equality check and if a comparison is being done between two different data types, will convert one of them so that they're the same. It also can't differentiate `0` from `false`. This one is called a 'non-strict equality check' as it does type conversion. `===` on the other hand, does comparisons without doing any type conversions, allowing us to differentiate between `0` and `false`. This one is called 'strict equality check' as it doesn't do type conversion.
16. [See answer here](part1b-question16.js)
17. The result will be that the modifyArray will return a reference to `newArr` that contains the values `[2, 4, 6]`. When the call is first made, `newArr` is constructed as empty, and then we enter the `for` loop. The first time through the `for` loop, `i = 0`. We add `callback(array[i])` to newArr. This will call the `doSomething` function with the `array[i]` parameter, which will be `array[0] = 1` in this case. We then execute the `doSomething` function on 1, and get 2 back. This is done for all the elements in `array`, which is `[1,2,3]`, resulting in `newArr = [2,4,6]`.
18. [See answer here](part1b-question18.js)
19. The output is 1, 4, 3, 2. 2 is printed last because of the 1 sec delay. Although 3 has the delay of 0 sec, this doesn't always happen immediately, especially since `console.log(4)` has no delay before executing.