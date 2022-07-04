import { createSlice } from "@reduxjs/toolkit";
import { IRecommendedBooksSlice } from "./types";

const initialState: IRecommendedBooksSlice = {
  recommendedBooks: [
    {
      title: "Learn HTML5 and JavaScript for iOS",
      subtitle: "Web Standards-based Apps for iPhone, iPad, and iPod touch",
      isbn13: "9781430240389",
      price: "$27.76",
      image: "https://itbook.store/img/books/9781430240389.png",
      url: "https://itbook.store/books/9781430240389",
    },
    {
      title: "JavaScript for Kids",
      subtitle: "A Playful Introduction to Programming",
      isbn13: "9781593274085",
      price: "$24.15",
      image: "https://itbook.store/img/books/9781593274085.png",
      url: "https://itbook.store/books/9781593274085",
    },
    {
      title: "JavaScript for PHP Developers",
      subtitle: "A Concise Guide to Mastering JavaScript",
      isbn13: "9781449320195",
      price: "$10.50",
      image: "https://itbook.store/img/books/9781449320195.png",
      url: "https://itbook.store/books/9781449320195",
    },
    {
      title: "Using Node.js for UI Testing",
      subtitle:
        "Learn how to easily automate testing of your web apps using Node.js, Zombie.js, and Mocha",
      isbn13: "9781782160526",
      price: "$14.99",
      image: "https://itbook.store/img/books/9781782160526.png",
      url: "https://itbook.store/books/9781782160526",
    },
    {
      title: "Learning Node.js for Mobile Application Development",
      subtitle:
        "Make use of Node.js to learn the development of a simple yet scalable cross-platform mobile application",
      isbn13: "9781785280498",
      price: "$35.99",
      image: "https://itbook.store/img/books/9781785280498.png",
      url: "https://itbook.store/books/9781785280498",
    },
    {
      title: "Node.js for PHP Developers",
      subtitle: "Porting PHP to Node.js",
      isbn13: "9781449333607",
      price: "$20.36",
      image: "https://itbook.store/img/books/9781449333607.png",
      url: "https://itbook.store/books/9781449333607",
    },
    {
      title: "XML and JSON Recipes for SQL Server",
      subtitle: "A Problem-Solution Approach",
      isbn13: "9781484231166",
      price: "$30.71",
      image: "https://itbook.store/img/books/9781484231166.png",
      url: "https://itbook.store/books/9781484231166",
    },
    {
      title: "Java XML and JSON, 2nd Edition",
      subtitle: "Document Processing for Java SE",
      isbn13: "9781484243299",
      price: "$34.81",
      image: "https://itbook.store/img/books/9781484243299.png",
      url: "https://itbook.store/books/9781484243299",
    },
    {
      title: "Java Cookbook, 4th Edition",
      subtitle: "Problems and Solutions for Java Developers",
      isbn13: "9781492072584",
      price: "$47.65",
      image: "https://itbook.store/img/books/9781492072584.png",
      url: "https://itbook.store/books/9781492072584",
    },
    {
      title: "Delphi Cookbook, 3rd Edition",
      subtitle:
        "Recipes to master Delphi for IoT integrations, cross-platform, mobile and server-side development",
      isbn13: "9781788621304",
      price: "$49.99",
      image: "https://itbook.store/img/books/9781788621304.png",
      url: "https://itbook.store/books/9781788621304",
    },
  ],
};

const recommendedBooksSlice = createSlice({
  name: "recommendedBooks",
  initialState,
  reducers: {},
});

export default recommendedBooksSlice.reducer;
