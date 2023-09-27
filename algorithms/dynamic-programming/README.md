# Dynamic Programming - getting my feet wet.

Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure (array, map,etc). Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup. So the next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution, thereby saving computation time.


```
We will illustrate by showing various problems and their solutions using dynamic programming.
```
Topics/Examples;


1.  [#Fibonacci] (./fib.js)