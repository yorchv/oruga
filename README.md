# Oruga.js

Walk thru your array by steps. You can move forwards and backwards.

## Use
Insert the oruga.js script into your stack.
1. **Create a new Oruga**
```sh
  var absolem = new Oruga([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```
2. ** Get the current state **
```sh
  absolem.get(); // [1, 2, 3]
```
3. ** Get the next step **
```sh
  absolem.next(); // [2, 3, 4]
```
4. ** Get the previous step **
```sh
 absolem.prev(); // [1, 2, 3]
```
### Options
- ** Size ** (Default: 3)
```sh
var heimlich = new Oruga([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { size: 5 });
heimlinch.get(); // [1, 2, 3, 4, 5]
heimlinch.next(); // [2, 3, 4, 5, 6]
```
- ** Step ** (Default: 1)
```sh
var heimlich = new Oruga([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { step: 2 });
heimlinch.get(); // [1, 2, 3]
heimlinch.next(); // [3, 4, 5]
```
- ** Origin ** (Default: 0)
```sh
var heimlich = new Oruga([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { origin: 3 });
heimlinch.get(); // [4, 5, 6]
heimlinch.next(); // [5, 6, 7]
```

Created by Jorge Vivas - 2014
License MIT: You are free to use and modify this code for any use, on the condition that this copyright notice remains.