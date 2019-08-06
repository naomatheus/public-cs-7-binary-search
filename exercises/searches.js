// if you get stuck on these problems, they are pseudocoded in the slides in the lesson on myGA.
const things = [1,3,5,7,9];

function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    const midIndex = Math.floor(arr.length/2)
    const midEle = arr[Math.floor(arr.length/2)]
    // console.log(midEle);
    if (midEle === element){
    	// console.log('found it in middle', element);
    	// console.log(arr.indexOf(element));
    	return arr.indexOf(element);
    } 
    // cut in half
    const leftArr = arr.splice(0, midIndex)
   	const rightArr = arr 

   	for (let i = 0; i < leftArr.length; i++){
   		if (leftArr[i] === element){
   			console.log('found it in left side: ', element);
   			return arr.indexOf(element)
   		}
   	}
   	// check left if there

   	for (let j=0; j < rightArr.length; j++){
   		if (rightArr[j] === element){
   			// console.log('found it in right side: ', element);
   			return arr.indexOf(element);
   		}
   	}
   	// check right if there
}

	    	

function recursiveBinarySearch(arr, element, newArr){
   //  search through the array recursively for the element
   if (newArr === undefined) {
       newArr = arr
   }
   console.log(newArr);
   if (newArr.length > 1) {
        const middleIndex = Math.floor(newArr.length / 2)
        if (newArr[middleIndex] === element) {
            console.log('ran middleindex');
            return arr.indexOf(element)
        }
      
        if (newArr[middleIndex] < element) {
            console.log('ran right side check');
            newArr = newArr.slice(middleIndex)
            return recursiveBinarySearch(arr, element, newArr)
        } else if (newArr[middleIndex] > element) {
            console.log('ran left side check');
            newArr = newArr.slice(0, middleIndex)
            return recursiveBinarySearch(arr, element, newArr)
        }
       
   } else {
       console.log('ran else');
       if (newArr[0] === element) {
           return arr.indexOf(element)
       } else {
            return -1
       }
   }
   //  you may need to add more parameters to this function!
   //  if the element is not found, return -1
   //  if the element is found, return the index at which it was found
}




binarySearch(things, 5);

recursiveBinarySearch(things, 21, things[0],things[things.length])


module.exports = {
    binarySearch,
    recursiveBinarySearch
}