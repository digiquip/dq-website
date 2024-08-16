import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function HeaderWrapper(props) {
  const { isBlogPostPage} = useBlogPost();
  return (
    <>
      <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      {isBlogPostPage ? (
       <BlogPostItemHeaderAuthors />
      ) : (
        ''
      )}

    </header>
    </>
  );
}
