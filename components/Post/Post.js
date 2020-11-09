import React from 'react';
import { ArticleTag } from './PostStyles';

const Post = ({title, content}) => {
  return (
    <ArticleTag>
      <h2>
        <a href="/">{title}</a>
      </h2>
      <small>May 20, 2020</small>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </ArticleTag>
  );
};

export default Post;
