let arr = [1,5,4,6]
let a=prompt('nhập số đầu')
let b=prompt('nhập số cuối')
function filterRange(arr,a,b){
    if(a>b){
        return
    }
    else{
        let filteredArr=[]
        for(let i=a;i<=b;i++){
            filteredArr.push(arr[i])
        }
        console.log(filteredArr)
    }
}
filterRange(arr,a,b)