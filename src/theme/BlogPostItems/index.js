import React from 'react';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme/BlogPostItem';
import clsx from 'clsx';



export default function BlogPostItemsWrapper({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  const hasSidebar = true;
  return (
    <>
      <div className="row">
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}>
            <div
              className={clsx('col', {
                'col--4 margin-bottom--lg': hasSidebar,
                'col--9 col--offset-1': !hasSidebar,
              })}>

              <BlogPostItemComponent>
                <BlogPostContent />
              </BlogPostItemComponent>
            </div>
          </BlogPostProvider>
        ))}
      </div>
    </>
  );
}



