const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter
// const newNums = myNums.filter(num => num > 4);
const newNums = myNums.filter((num) => {
    return num > 4
});
// console.log(newNums);


const newNums2 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num);
    }
});
// console.log(newNums2);


const books = [
    { title: 'Book 1', genre: 'Fiction', publish: 1981, edition: 2004, rating: 4.5 },
    { title: 'Book 2', genre: 'Non-Fiction', publish: 1990, edition: 2005, rating: 3.8 },
    { title: 'Book 3', genre: 'Fiction', publish: 1975, edition: 2000, rating: 4.2 },
    { title: 'Book 4', genre: 'Science Fiction', publish: 2005, edition: 2015, rating: 4.9 },
    { title: 'Book 5', genre: 'Biography', publish: 1995, edition: 2010, rating: 3.5 }
];

const fictionBooks = books.filter(book => book.genre === 'Fiction');
// console.log(fictionBooks);

const highRatedBooks = books.filter(book => book.rating > 4.0);
// console.log(highRatedBooks);

const recentBooks = books.filter(book => book.publish > 1990);
// console.log(recentBooks);

const recentHighRatedBooks = books.filter(book => book.publish > 1990 && book.rating > 4.0);
// console.log(recentHighRatedBooks);



// Map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumers = myNumers.map(num => num + 10);
// console.log(newNumers);


const newNumers2 = myNumers.map(num => num * 10)
                                .map(num => num + 1)
                                .filter(num => num >= 40);
// console.log(newNumers2);


const bookTitles = books.map(book => book.title);
// console.log(bookTitles);




// Reduce
const myNumbers = [1, 2, 3, 4, 5];

// arrow function with implicit return
// const sum = myNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// normal function with explicit return
const sum = myNumbers.reduce((accumulator, currentValue) => {
    // console.log(`Accumulator : ${accumulator} and Current Value : ${currentValue}`);
    return accumulator + currentValue;
}, 0);

// console.log(sum);


const shoppingCart = [
    { itemName: "Js Course", price: 2999 },
    { itemName: "Python Course", price: 1999 },
    { itemName: "Data Science Course", price: 3999 },
    { itemName: "Web Development Course", price: 4999 }
];

const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);