function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; 
        let j = i - 1;


        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; 
            j--;
        }


        arr[j + 1] = current;
    }

    return arr; 
}


let array = [10, 1, 3,8, 20 , 5, 6];

let sortedArray = insertionSort(array);
console.log("Tableau trié:", sortedArray);
