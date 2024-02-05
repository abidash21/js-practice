const arr=[12,23,34,45,56]
//iterable ds - array,object,string

//for of
for (const num of arr) {
    //console.log(num)
}

//maps
const map=new Map()
map.set(1,'a')
map.set(2,'b')
map.set(3,'c')

//console.log(map)

for (const key of map) {
   // console.log(key[1])
}//returns each tuple of map as array

for (const [key,value] of map) {
   // console.log(key,":-",value)
}

const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in myObj) {
    //console.log(key,myObj[key])
}

//for each
const coding = ["python","javascript","ruby","cpp"]

//coding.forEach( function(val){ console.log(val) })
//coding.forEach( (item) => console.log(item) )
function printme(item){
    console.log(item);
}
//coding.forEach(printme)
coding.forEach((item,index,arr) =>{
    console.log(item,index,arr)
})

const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "Ruby",
        langFile: "rb"
    },
    {
        langName: "Python",
        langFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFile)
})
