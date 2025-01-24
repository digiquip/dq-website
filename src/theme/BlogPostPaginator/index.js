import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import SocialShare from '../../components/SocialShare';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostPaginatorWrapper(props) {
  const {nextItem, prevItem} = props;
  const {metadata, isBlogPostPage} = useBlogPost();
  return (

    <>
    <div className="elfsight-app-40f7f869-862f-4fca-8b20-4dc354b7dc2a" data-elfsight-app-lazy></div>
    <SocialShare props={metadata} />
    <nav
      className="pagination-nav docusaurus-mt-lg blog-post-center"
      aria-label={translate({
        id: 'theme.blog.post.paginator.navAriaLabel',
        message: 'Blog post page navigation',
        description: 'The ARIA label for the blog posts pagination',
      })}>
      {prevItem && (
        <PaginatorNavLink
          {...prevItem}
          subLabel={
            <Translate
              id="theme.blog.post.paginator.newerPost"
              description="The blog post button label to navigate to the newer/previous post">
              Newer Post
            </Translate>
          }
        />
      )}
      {nextItem && (
        <PaginatorNavLink
          {...nextItem}
          subLabel={
            <Translate
              id="theme.blog.post.paginator.olderPost"
              description="The blog post button label to navigate to the older/next post">
              Older Post
            </Translate>
          }
          isNext
        />
      )}
    </nav>
    </>
  );
}
