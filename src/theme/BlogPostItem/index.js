import React, { useState } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useLocation } from '@docusaurus/router';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import clsx from 'clsx';
import BrandLogo from '../../components/BrandLogo';


export default function BlogPostItemWrapper(props) {

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  const [blogList, setBlogList] = useState({})
  const { metadata, isBlogPostPage } = useBlogPost();


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap.from('.navbar', {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        let element = document.querySelector('.navbar');
        if (element) {
          if (self.direction === 1) {
            element.classList.add("my-class");
          }
          if (self.direction === -1) {
            element.classList.add("up");
          }
          if (self.progress === 0) {
            element.classList.remove("up");
            element.classList.remove("my-class");
          }
        }
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

    setCurrentPath(location.pathname);
  }, [currentPath])



  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setBlogList(metadata);
    }
    return () => {
      ignore = true;
    }

  }, [blogList]);


  return (
    <>
      {isBlogPostPage ? 
      <div className="blog-post-center">
             <BlogPostItem {...props} />
      </div>
        : <BlogPage item={blogList} />
      }
    </>
  );
}




function BlogPage(props) {
  const items = props.item;
  const location = useLocation();
  let pathOfImage = '';
  if (location.pathname.indexOf("tags") > -1) {
    pathOfImage = '../../'
  } else {
    pathOfImage = '';
  }
 
  return (
    <>
      {items && items.frontMatter && <div className="row">
        <div
          className={clsx('col', {
            'col--12': true,
          })}>
          <article itemProp="blogPost" itemScope="" itemType="http://schema.org/BlogPosting">
            <div className="post-card">
              <div className='post-img'>
              <a itemProp="url" href={items.permalink}>
                <BrandLogo Img={`${pathOfImage}` + items.frontMatter.image } width={''} height={''} alt={''} />
                </a>
                </div>
              <div className="post-content">
                    <a itemProp="url" href={items.permalink}>{items.frontMatter.title}</a>
                  <p>{items.description}</p>
              </div>
            </div>
          </article>
        </div>
      </div>}
    </>
  )
}
