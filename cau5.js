let arr = [1,5,4,6,7,8]
let a=prompt('nhập số đầu')
let b=prompt('nhập số cuối')
function filterRange(arr,a,b){
    if(a>b){
        return
    }
    else{
        let filteredArr=[]
        for(let i=0;i<a;i++){
            filteredArr.push(arr[i])
        }
        for(let k = b +++ 1;k<arr.length;k++){
            filteredArr.push(arr[k])
        }
        console.log(filteredArr)
        console.log(arr)
    }
}
filterRange(arr,a,b)