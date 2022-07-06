 // The global variable
 const s = [23, 65, 98, 5];

 Array.prototype.myMap = function(callback) {
   const newArray = [];
   // Only change code below this line
   for (let item of this) {
     newArray.push(callback(item));
   }
   // Only change code above this line
   return newArray;
 };
 
 const new_s = s.myMap(function(item) {
   return item * 2;
 });


// Second solution 
 // The global variable
 const s2 = [23, 65, 98, 5];

 Array.prototype.myMap2 = function(callback) {
   const newArray = [];
   // Only change code below this line
   this.forEach(item => newArray.push(callback(item)));
   // Only change code above this line
   return newArray;
 };
 
 const new_s2 = s2.myMap2(function(item) {
   return item * 2;
 });
