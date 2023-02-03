(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {};
person.firstName = "Genesis";
person.lastName = "Sarabia";

console.log(person.firstName + " " + person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
console.log("--------");

person.sayHello = function sayHello(){
    console.log("Hello from " + person.firstName + " " + person.lastName + "!")
    }

console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
console.log("----------");

    function hebOffer(purchase){

        if (purchase >= 200){
            var discount = purchase * 0.12;
            var totalWithDiscount = purchase - discount;
            return console.log("Your purchase today is: $" + purchase.toFixed(2) + ". Because you purchased over $200 in your cart, you will receive a discount of: $" + discount.toFixed(2) +
                ". Your total with discount is: $" + totalWithDiscount.toFixed(2));
        } else {
            //they get no discount because they didn't buy over $200, so
            // just purchase variable is returned.
            return console.log("The total amount due for your cart" +
                " today is: $" + purchase.toFixed(2));

        }
    }

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        console.log("Hello, " + shopper.name + "!")
        hebOffer(shopper.amount);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
console.log("-------------");

   var books = [
        {title: "The Grapes of Wrath",
         author: {
                firstName: "John",
                lastName: "Steinbeck"
        }
        },
       {title: "Brave New World",
        author: {
               firstName: "Aldous",
               lastName: "Huxley",
           }
       },
       {title: "Harrison Bergeron",
        author: {
           firstName: "Kurt",
           lastName: "Vonnegut",
        }
       },
       {title: "Unsafe at Any Speed",
        author: {
           firstName: "Ralph",
           lastName: "Nader"
        }
       },
       {title: "A Streetcar Named Desire",
        author: {
           firstName: "Tennessee",
           lastName: "Williams"
        }
       }
    ];

    console.log(books[0].title);
    console.log(books[1].author.firstName);
    console.log(books[2].author.lastName);
    console.log(books[3].title);
    console.log(books[4].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
console.log("---------");

var bookList = [
    {
     index: "Book #1",
     title: "The Grapes of Wrath"   ,
     author: "John Steinbeck"
    },
    {
     index: "Book #2",
     title: "Brave New World",
     author: "Aldous Huxley"
    },
    {
     index: "Book #3",
     title: "Harrison Bergeron",
     author: "Kurt Vonnegut"
    }
];

bookList.forEach(function (book) {
        console.log(book.index + " Title: " + book.title + " Author: " + book.author);
});



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
console.log("----------------------------")
    function createBook(title, author) {
        return {
            title: title,
            author: author
        }
    }

    var bookShelf = [
        createBook("'The Grapes of Wrath' ", "John Steinbeck"),
        createBook("'Brave New World' ", "Aldous Huxley"),
        createBook("'Harrison Bergeron' ", "Kurt Vonnegut")
        ];

function showBookInfo (bookShelf){
        console.log("Title: " + bookShelf.title);
        console.log("Author: " + bookShelf.author);
}

bookShelf.forEach(function (book){
    showBookInfo(book);
    console.log("------")
    });



})();

