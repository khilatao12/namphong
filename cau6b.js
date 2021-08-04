let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]
let n = prompt("Sở thích")
for(let i = 0; i<student.length ;i++){
    for(let k = 0; k<student[i].hobbies.length;k++){
        if(n === student[i]["hobbies"][k]){
            console.log(student[i]["name"])
            console.log( student[i]["hobbies"]);
        }
    }
}