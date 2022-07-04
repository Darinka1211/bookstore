import React from "react";
import "./BookSlider.scss";

import { BookCart } from "../BookCart/BookCart";

interface IBook  {
    image: string;
    isbn13: string;
    price: string;
    subtitle: string;
    title: string;
    url: string;
  };

interface IBookSlider {
    books: IBook [];
}
export const BookSlider= ({books}:IBookSlider)=>{
    const settings={
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider" {...settings}>
         {books.map((book) => (
            <div className="div__isbn13" key={book.isbn13}>
                 <BookCart book={book} />
            </div>
         ))}
         </div>
  );
         }
         export default BookSlider;