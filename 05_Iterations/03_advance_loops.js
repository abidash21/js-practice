const myNum = [1,2,3,4,5,6,7,8,9]

//filter
const newNum = myNum.filter( (num) => num>4 )
//console.log(newNum)

const arrNum = []
myNum.forEach( (num) => {
    if (num>4) arrNum.push(num)
})

//console.log(arrNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (book) => book.publish >= 1995 && book.genre === "History")
  console.log(userBooks)

  //const arr = myNum.map( (num) => num+10)

  const arr = myNum.map( (num) => num*10).map( (num) => num+1).filter((num) => num>=40)
  console.log(arr)

//reduce
const tot=myNum.reduce( (acc,curr) => acc+curr,0)
console.log(tot)


