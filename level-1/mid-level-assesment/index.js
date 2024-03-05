//es5
function Book(title, author, year) {
    // grab relevant variables and store them within constructor function
    this.title = title;
    this.author = author;
    this.year = year;
    // return information in requested string format
    this.getDetails = function() {
        return "Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year
    }
}

//es6
class Book1{
    constructor(title, author, year){
        this.title = title
    }

    getDetails(){

    }
}

function myFunc(){
   return 2+3
}

const myFunc2 = () => 2 + 3

console.log(myFunc())
console.log(myFunc2())



const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);


console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960
console.log(book1)



// capstone - conditional statements, while loops, for loops, functions (passing data with parameters)