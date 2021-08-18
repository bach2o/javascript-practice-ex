function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    console.log(title + " by " + author + ", " + pages + " " + read);
  }
}

const theHobbit = new Book('The Hobbit', 'Gandalf', '420', 'yes');
console.log(theHobbit.info());