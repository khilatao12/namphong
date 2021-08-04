let arrX = [0,1,2,3,4,5,6,7,8]
let arrSquare = []
let arrOdds = []
arrX.forEach(i =>{
    arrSquare.push(i*i)
})
arrX.forEach(e=>{
    if(e%2 == 1){
        arrOdds.push(e)
    }
    
})
console.log(arrSquare);
console.log(arrOdds)