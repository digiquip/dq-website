import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';



export default function BlogLayoutWrapper(props) {
  const [tagsArray, setTagsArray] = useState([])
  const [tags, setTagsList] = useState([])
  const { siteConfig } = useDocusaurusContext();
  const [activeButton, setActiveButton] = useState('all');
  const location = useLocation();
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar?.items?.length > 0;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      let parsed = (url) => {
        var parts = url.split("/");
        if (parts[parts.length - 2] === 'tags') {
          setActiveButton(parts[parts.length - 1])
          return parts[parts.length - 1]
        }
        setActiveButton('all')
        return ''
      }
      parsed(location.pathname)

      let listBlogItems = children && children?.length > 0 ? children : [];
      listBlogItems.forEach(items => {
        if (items?.type?.name == 'BlogPostItemsWrapper') {

          {
            items.props.items && items.props.items.map((element) => (
              element.content.frontMatter.tags.forEach(ele => {
                let jsonObj = {
                  label: ele,
                  permalink: ele
                }
                tagsArray.push(jsonObj)
              })
            ))
          }

          let jsonObj = {
            label: 'all',
            permalink: siteConfig.baseUrl + 'blog'
          }
          tagsArray.splice(0, 0, jsonObj)
          const uniqueArr = tagsArray.map(item => item.label).filter((value, index, self) => self.indexOf(value) === index);
          setTagsList(uniqueArr);
        }

      });

    }

    let element = document.querySelector('.navbar');
    if (tagsArray && tagsArray.length > 0) {
      element.classList.remove('white-header')
    } else {
      element.classList.add('white-header')
    }

    return () => {
      ignore = true;
    }

  }, [tagsArray]);

  const clickButtonHandler = (value) => {
    setActiveButton(value)
  }

  return (
    <>
      <Layout {...layoutProps}>

        {tags && tags.length > 0 ? <section className='blog-items-banner'>
          <div className={clsx('hero-25  hero hero--primary heroBanner')}>
            <div className="container">
              <h1 className='section-title'>God lesing<span className='orange'>.</span></h1>
              <nav className="categories-blog">
                {tags.map((items, i) => (
                  <a
                    key={i}
                    className={activeButton === items ? 'active' : ''}
                    onClick={(e) => clickButtonHandler(items)}
                    href={items != 'all' ? siteConfig.baseUrl + `${'blog/tags/'}` + items : siteConfig.baseUrl + `${'blog'}`}
                  >
                    <span>{items}</span></a>
                ))}
              </nav>
            </div>
            <span className="bg"></span>
          </div>
        </section> : <div className='margin-vert--lg'> </div>}

        <section className="post-items-main">
          <div className="container margin-vert--lg">
            <div className="row">
              <main
                className={clsx('col', {
                  'col--12 mainblog': hasSidebar,
                  'col--9 col--offset-1': !hasSidebar,
                })}
                itemScope
                itemType="https://schema.org/Blog">
                {children}
              </main>
            </div>
            {/\/blog\/?$/.test(location.pathname) && 
              <div
                className="elfsight-app-ffc7fb08-4ac1-4121-8929-9cb66e965724"
                data-elfsight-app-lazy
                style={{ margin: '20px 0' }}
              ></div>
            }
          </div>
        </section>
      </Layout>
    </>
  );
}
