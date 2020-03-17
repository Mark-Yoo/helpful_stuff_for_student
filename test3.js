// 1. 선형 탐색

// function linearSearch(array, target) {
//   let searchedTarget = '';

//   for(let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       searchedTarget = i;
//       break;
//     } else if (searchedTarget === ''){
//       searchedTarget = -1;
//     }
//   }

//   return searchedTarget;
// }

// function linearSearch(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     if (array[i] === target) return i;
//   }

//   return -1;
// }

// console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1


// 2. 이진 탐색
// function binarySearch(array, target) {
//   let begin = 0;
//   let finish = array.length - 1;
  
//   while(begin >= finish) {
//     const middle = Math.floor((begin + finish) / 2);
//     console.log(middle);

//     if (array[middle] === target) return middle;
//     if (array[middle] > target) {
//       finish = middle - 1;
//       console.log(finish);
//     } else {
//       begin = middle + 1;
//       console.log(begin)
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

// 3. 버블소트
// function bubbleSort(array) {
//   function swapNode(array, index1, index2) {
//     temporaryNode = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temporaryNode;
//   }

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j+1]) {
//         swapNode(array, j, j + 1);
//       }
//     }
//   }
//   console.log(array);
// }

// console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
// console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
// console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]

// 4. 선택 정렬
// function selectionSort(array) {
//   function swapNode(array, index1, index2) {
//     let temporaryNode = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temporaryNode;
//   }

//   for (let i = 0; i < array.length; i++) {
//     let minimumNumIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if(array[minimunNumIndex] > array[j]) {
//         minimumNumIndex = j;
//       }
//     }
//     swapNode(array, i, minimumNumIndex);
//   }
//   return array;
// }

// console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
// console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
// console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
