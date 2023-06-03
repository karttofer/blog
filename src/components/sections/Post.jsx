import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";

import { LayoutBlog } from "../compound/main";

const PostHeader = ({ storyInfo, userInfo }) => {
  const dateObj = new Date(storyInfo["pubDate"]);

  return (
    <LayoutBlog.Header className="post-header">
      <h1>{storyInfo.title}</h1>
      <div className="post-header">
        <img src={userInfo["img"]} />
        <div>
          <p>
            {userInfo["author"]
              .replace("Stories by ", "")
              .replace(" on Medium", "")}
          </p>
          <p>
            {" "}
            Published Date ·{" "}
            {dateObj.toISOString().slice(0, 19).replace("T", " ")}
          </p>
        </div>
      </div>
    </LayoutBlog.Header>
  );
};

const Post = () => {
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch("https://blog-api-a4z1.onrender.com/post/")
      .then((el) => el.json())
      .then(setPost);
  }, []);
  console.log(post.blog?.stories[3], post.blog?.user);
  return (
    <LayoutBlog>
      {post.blog && (
        <PostHeader
          storyInfo={post.blog.stories[2]}
          userInfo={post.blog.user}
        />
      )}

      <LayoutBlog.Main>
        <section className="post-content">
          <ReactMarkdown></ReactMarkdown>
          {post.blog?.stories[2]["content:encoded"] &&
            parse(post.blog?.stories[2]["content:encoded"])}
        </section>
      </LayoutBlog.Main>
    </LayoutBlog>
  );
};

export default Post;
