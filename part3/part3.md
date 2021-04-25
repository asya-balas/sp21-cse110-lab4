1.  The bug is that the program is storing the inputted values as strings, instead of as integers. So it is concatenating the two numbers together instead of adding them. 
2.  I would fix this bug by adding `parseInt(num1)` and `parseInt(num2)` in Line 9, and by adding a `;` at the end of Line 9, after the expression is done. [Screenshot](2021-04-25%20(2).png)
3. citylots.js
4. part2.js:2
5. 11.7 MB
6. 174 ms
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()