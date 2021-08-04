let arr = [1,5,4,6,7,8]
let a=prompt('nhập số đầu')
let b=prompt('nhập số cuối')
function filterRange(arr,a,b){
    if(a>b){
        return
    }
    else{  
        arr.splice(a,b)
    }
    console.log(arr)
}

filterRange(arr,a,b)