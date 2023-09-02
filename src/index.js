import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { books } from "./books";//normal export
import  Book  from "./Book";//export by default


const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
