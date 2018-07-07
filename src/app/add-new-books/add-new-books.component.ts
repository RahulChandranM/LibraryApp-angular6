import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-new-books',
  templateUrl: './add-new-books.component.html',
  styleUrls: ['./add-new-books.component.css']
})
export class AddNewBooksComponent implements OnInit {

  private successMessage;
  private warningMessage;

  constructor(private http: HttpClient) {  }

  searchIsbnValue: string;
  booksData: any;

  bookDetails: any = {
    "Title": '',
    "Author": '',
    "Description": '',
    "PublishedOn": '',
    "Publisher": '',
    "Image": '',
    "Category": ''
  };

  ngOnInit() {
    this.successMessage = '';
    this.warningMessage = '';
  }

  searchIsbn() {
    this.successMessage = "";
    let data: any = this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.searchIsbnValue);
    if (data) {
      data.subscribe(data => {
        this.bookDetails.Author = "";
        this.bookDetails.Category = "";
        this.warningMessage = "";
        if (data && data.items && data.items[0]) {
          this.warningMessage = "";
          this.booksData = data.items[0];
          this.bookDetails.Title = this.booksData.volumeInfo.title;
          this.booksData.volumeInfo.authors.forEach(author => {
            this.bookDetails.Author = this.bookDetails.Author + " " + author;
          })
          this.bookDetails.Description = this.booksData.volumeInfo.description;
          this.bookDetails.PublishedOn = this.booksData.volumeInfo.publishedDate;
          this.bookDetails.Publisher = this.booksData.volumeInfo.publisher;
          this.bookDetails.Image = this.booksData.volumeInfo.imageLinks.thumbnail;
          this.bookDetails.ID = this.booksData.id;
          this.bookDetails.StockStatus = 'Available';
          this.booksData.volumeInfo.categories.forEach(category => {
            this.bookDetails.Category = this.bookDetails.Category + " " + category;
          })
        } else {
          this.warningMessage = "Please enter valid ISBN number!";
        }
      })
    } else {
      this.warningMessage = "Please enter valid ISBN number!";
    }
  }

}
