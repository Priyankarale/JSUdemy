/*In this exercise, we have an array called arr. In the console.log() statement we use the array.length property to get the number of array elements. The statement logs true if the array has 3 elements.
Task: Add a third element to the array. It can have any value.
 */

let arr=["Priyanka",28,'female'];
console.log(arr.length)
arr.push("IT Engineer")
console.log(arr)
/*In the code below we try the access the first element of the array. But, we introduced a slight mistake. Fix the mistake and run the code.
 */

console.log(arr[0])

/*Write function to get last element of an array */

function arrOne(arr){
  for(i=0;i<=arr.length-1;i++){
    if(i===arr.length-1)
      {
        console.log(arr[i]);
      }
  }
}
arrOne(arr)
let num =[1,2,3,4,5]
console.log(num.join(','))