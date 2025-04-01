

export function testing() {

    const books = [
        { title: "Book A", price: 500 },
        { title: "Book B", price: 300 },
        { title: "Book C", price: 700 }
      ];
      
      const totalPrice = books.reduce((acc, book) => acc + book.price, 0);
      
      console.log(totalPrice); // Output: 1500
      
   }