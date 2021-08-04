// let b1 = (n)=>{
//     var output = ""
//     for(let i = 1; i <= n; i++){
//         if(i%2==0){
//             output = output+i+","
//         }
//     }
//     console.log(output)
// }

// b1(8)

// let b="123"
// let a="234"

// c=a+b
// console.log(c)

// let student = [
//     {
//         name: "NVA",
//         age: 16,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     },
//     {
//         name: "NVB",
//         age: 18,
//         course: ["mindX 01", "mindX 02", "mindX 04"]
//     },
//     {
//         name: "NVC",
//         age: 17,
//         course: ["mindX 01", "mindX 03", "mindX 04"]
//     },
//     {
//         name: "NVD",
//         age: 15,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     }
//     ]

// let n = prompt("Độ tuổi cần tìm")
//     for(let i =0; i<4;i++){
//         if(n == student[i]["age"]){
//             console.log(student[i]["name"])
//         }
//         if(n<15 or n>18){
            //     console.log("không tìm thấy")
            // }
//     }

let getDataAPI = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
    let preData = await fetch(api)
    let data = await preData.json()
    
    render(data)
}

let render = (data)=>{
    let html = document.querySelector(".content")
    let {name,main:{temp},weather:{0:{icon,description}}} = data
    let dom = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <p>${parseInt(temp - 273)}</p>
    <hr>
    <h1>${name}</h1>
    <p class="paragragh">${description}</p>
    `
    html.innerHTML = dom
}

let input = document.querySelector("#input")
input.onsubmit = (e)=>{
    e.preventDefault()
    let city = input.city.value
    getDataAPI(city)
}




