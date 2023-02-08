// function pivot(arr,start=0, end = arr.length+1) {

    // function swap(array,i,j) {
    //     var temp = array[i];
    //     array[i]=array[j];
    //     array[j]=temp;
    // }
    // var pivot = arr[start];
    // var swapIdx=start;
    // for (let i = start+1; i < arr.length; i++) {
    //    if (pivot>arr[i]) {
    //     swapIdx++;
    //     swap(arr,swapIdx,i)
    //    } 
    // }
    // swap(arr,start,swapIdx)
    // return swapIdx;
// }

// function quickSort(arr,left=0, right=arr.length-1) {
    // if (left<right) {
    //     let pivotIndex= pivot(arr,left,right)

    //     // left 
    //     quickSort(arr,left,pivotIndex-1);
    //      // right

    //      quickSort(arr,pivotIndex+1,right)
    // }
    // return arr;
// }




function pivot(arr,start) {
       function swap(array,i,j) {
        var temp = array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    var pivot = arr[start];
    var swapIdx=start;
    for (let i = start+1; i < arr.length; i++) {
       if (pivot>arr[i]) {
        swapIdx++;
        swap(arr,swapIdx,i)
       } 
    }
    swap(arr,start,swapIdx)
    return swapIdx;
}
function quickSort(arr,left=0, right=arr.length-1) {
    if (left<right) {
        let pivotIndex= pivot(arr,left)

        // left 
        quickSort(arr,left,pivotIndex-1);
         // right

         quickSort(arr,pivotIndex+1,right)
    }
    return arr;
}


console.log(quickSort([0,-76,78,1,99,102,-87,5,28]));

