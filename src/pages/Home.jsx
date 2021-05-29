import React, { Fragment } from "react";

import Button from "../components/Button";
import Header from "../components/Header";
import PostItem from "../components/PostItem";

//redux
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Fragment>
      <Header title="Главная" />
      <div className="content-wrapper">
        {posts.map((post) => (
          <PostItem
            title={post.title}
            id={post.id}
            authorName={post.authorName}
            date={post.date}
            key={post.id}
          />
        ))}
        <Button text="Добавить запись" type="blue" to="/add-post" />
      </div>
    </Fragment>
  );
};

export default Home;
