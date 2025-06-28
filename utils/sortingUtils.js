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
  
    return swaps;
  }