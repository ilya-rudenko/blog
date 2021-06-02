import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PostItem from "../../components/PostItem/PostItem";

import "./Home.scss";

//redux
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Fragment>
      <Header title="Главная" addPost />
      <div className="content-wrapper">
        {posts.length === 0 ? (
          <div className="placeholder">Здесь пока нет записей...</div>
        ) : (
          posts.map((post) => (
            <PostItem
              title={post.title}
              id={post.id}
              authorName={post.authorName}
              date={post.date}
              key={post.id}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Home;
