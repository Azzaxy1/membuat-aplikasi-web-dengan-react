/* eslint-disable react/prop-types */
// import React from "react";
import { createRoot } from "react-dom/client";

const Button = ({ link }) => {
  return (
    <button>
      <a href={link}>Find out more</a>
    </button>
  );
};

const CardHeader = ({ category, image, title }) => {
  return (
    <header>
      <h3>{category}</h3>
      <img src={image} alt={title} />
    </header>
  );
};

const CardBody = ({ title, date, content, link }) => {
  return (
    <div>
      <p>{date}</p>
      <h1>{title}</h1>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
};

const Card = ({ image, category, title, date, content, link }) => {
  return (
    <article>
      <CardHeader image={image} category={category} title={title} />
      <CardBody title={title} date={date} content={content} link={link} />
    </article>
  );
};

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

const News = () => {
  // data News here
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2002",
      content: "CNN purchased Casey Neistat's Beme app for $1.5 million.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Travel",
      link: "#",
    },
  ];

  return (
    <div className="container">
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {/* Cara dengan mapping */}
      {someNews.map((news) => (
        <Card key={news.title} {...news} />
      ))}

      {/* {someNews.map((news, index) => (
        <Card key={index} {...news} />
      ))} */}

      {/* Cara dengan spread operator */}
      {/* <Card {...someNews[0]} />
      <Card {...someNews[1]} />
      <Card {...someNews[2]} /> */}

      {/* Cara manual */}
      {/* <Card
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      /> */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<News />);
