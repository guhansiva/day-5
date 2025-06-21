const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
  isAvailable: true,
  getSummary: function() {
    return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
  }
};

// Example usage
console.log(book.getSummary());
