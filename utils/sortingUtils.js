// Bubble Sort (record swap steps)
export function recordBubbleSortSteps(array) {
  const swaps = [];
  const arr = [...array];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps.push([j, j + 1]);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log(swaps);
  return swaps;
}

// Selection Sort (record swap steps)
export function recordSelectionSort(array) {
  const swaps = [];
  const arr = [...array]; 

  for(let i = 0; i < arr.length; i++){
    let minIndex = i; 
    for(let j = i; j < arr.length; j++){
      if(arr[minIndex] > arr[j]) {  minIndex = j; }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    
    console.log(`swaps ${i} , ${minIndex}`);
    swaps.push([i, minIndex]);
  }
  console.log(swaps);
  return swaps;
}