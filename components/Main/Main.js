import React from 'react';

import { WrapperMain } from './MainStyles';
import Post from '../Post/Post';

import { getPosts } from '../../api/posts';

const Main = ({ posts }) => {
  return (
    <WrapperMain>
      <Post />
      <Post />
      <Post />
      <Post />
    </WrapperMain>
  );
};



export default Main;
