//================== Assigment # 5 ==================//


// // Question # 1



var rows = 3;
var cols = 3;

var emptyArray = [];

for (var i = 0; i < rows; i++) {
    emptyArray[i] = []; 
    for (var j = 0; j < cols; j++) {
        emptyArray[i][j] = 1; 
    }
}

console.log(emptyArray);






// // Question # 2
// var arr = [0,1,2,3]
// document.write(

// arr[0]+" "+[1]+" "+[2]+" "+[3]+"<br>"+
// [1]+" "+[0]+" "+[1]+" "+[2]+"<br>"+
// [2]+" "+[1]+" "+[0]+" "+[1]+"<br>"

// )


// // Question # 3

// for (var i=1; i<=10; i++){
//     document.write(i + "<br>")
// }

// // Question # 4

// var num1 = prompt("Enter a Number to show its Multiplication Table");
// var lenght = prompt("Multiplication Length of Talbe")

// for (var i=1; i<=lenght; i++){
// document.write(num1 + "x" + i + "=" + num1 * i + "<br>")

// }


// // Question # 5


// var fruits = ['apple','banana','mango','orange','strawberry']

// for(i=0; i<=4; i++){

//     document.write (`<h1>${fruits[i]}</h1>
       
//     `)
// }

// document.write(`
// <h3> Element at index  0 is  ${fruits[0]} </h3> 
// <h3> Element at index  1 is  ${fruits[1]} </h3> 
// <h3> Element at index  2 is  ${fruits[2]} </h3> 
// <h3> Element at index  3 is  ${fruits[3]} </h3> 
// <h3> Element at index  4 is  ${fruits[4]} </h3> 
// `)


// // Question # 6 (a)

// document.write("<h1>Counting</h1>")
// for (var i=1; i<=15; i++){
//     document.write(i + ",")
// }

// // Question # 6 (b)
// document.write("<h1> Reverse Counting</h1>")
// for (var i=10; i>=1; i--){
//     document.write(i + ",")
// }


// // Question # 6 (c)
// document.write("<h1> Even No.s</h1>");
// for (var i=0; i<=20; i++){
//     if(i % 2 === 0){

//     document.write(i + ",")} 
// }

// // Question # 6 (d)
// document.write("<h1> Odd No.s</h1>");
// for (var i=0; i<=20; i++){
//     if(i % 2 !== 0){

//     document.write(i + ",")}
// }


// // Question # 6 (e)
// document.write("<h1> Series</h1>");
// for (var i=1; i<=20; i++){
//     if(i % 2 === 0){

//     document.write(i + "K, ")}
// }


// // Question # 7

// var order = prompt("Welcom to ABC Bakery.What do you want to order sir/Ma'am");
// var arrA = ['cake','apple pie','cookie','chips','patties']


// var itemChecked = false;
// for(var i=0; i<arrA.length; i++){
//     if(order===arrA[i]){
//         itemChecked = true
//     document.write(`<h1> ${arrA[i]}  is available at index No ${i}</h1>`);
//     break

// }
// }

// if (itemChecked === false){
//     document.write( `<h1> ${order}  in Not Available at our Bakery</h1>`);
// }

// // Question # 8

// var A = [24, 53, 78, 91, 12];
// var largestNo = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNo) {
//         largestNo = A[i];
//     }
// }

// document.write(largestNo);



 // // Question # 9

//  var A = [24, 53, 78, 91, 12];
//  var smallestNo = A[0];
 
//  for (var i = 1; i < A.length; i++) {
//      if (A[i] < smallestNo) {
//          smallestNo = A[i];
//      }
//  }
 
//  document.write(smallestNo);
 
// // Question # 10

// for (var i=5; i<=100; i=i+5){
//     document.write(i + ",")
// }


    
    



