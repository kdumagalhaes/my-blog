import React from 'react';

import { WrapperMain } from './MainStyles';
import Post from '../Post/Post';

import { getPosts } from '../../api/posts';

const Main = ({ posts }) => {
  return (
    <WrapperMain>
      <Post title="This is a very big title that will serve as a test blabla bla" />
      <Post title="This is a short title just for testing" />
    </WrapperMain>
  );
};



export default Main;
