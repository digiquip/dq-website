import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';


export default function BlogLayoutWrapper(props) {
 
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar?.items?.length > 0;

  return (
    <>
      <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className={clsx('col', {
              'col--12': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="https://schema.org/Blog">
            {children}
          </main>
        </div>
      </div>
    </Layout>
    </>
  );
}
