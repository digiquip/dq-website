"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[6004],{2504:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/dq-website/nb/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"26. august 2021","tags":[{"label":"facebook","permalink":"/dq-website/nb/blog/tags/facebook"},{"label":"hello","permalink":"/dq-website/nb/blog/tags/hello"},{"label":"docusaurus","permalink":"/dq-website/nb/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"nextItem":{"title":"MDX Blog Post","permalink":"/dq-website/nb/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/dq-website/nb/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"1. august 2021","tags":[{"label":"docusaurus","permalink":"/dq-website/nb/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/dq-website/nb/blog/welcome"},"nextItem":{"title":"Our principles of development","permalink":"/dq-website/nb/blog/principles-of-development"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"principles-of-development","metadata":{"permalink":"/dq-website/nb/blog/principles-of-development","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Our principles of development","description":"These are general guidelines when developing for DigiQuip. Whenever you feel that they don\u2019t apply to your current task, stop and think and then discuss it with someone else in the team to make sure that we avoid to many deviations from these principles.","date":"2019-05-29T00:00:00.000Z","formattedDate":"29. mai 2019","tags":[{"label":"development","permalink":"/dq-website/nb/blog/tags/development"},{"label":"howto","permalink":"/dq-website/nb/blog/tags/howto"},{"label":"internal","permalink":"/dq-website/nb/blog/tags/internal"}],"readingTime":2.765,"hasTruncateMarker":false,"authors":[{"name":"Andreas N. Lydersen","title":"CEO","url":"https://github.com/alydersen","imageURL":"https://github.com/alydersen.png","key":"andreas"}],"frontMatter":{"slug":"principles-of-development","title":"Our principles of development","authors":"andreas","tags":["development","howto","internal"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/dq-website/nb/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/dq-website/nb/blog/first-blog-post"}},"content":"These are general guidelines when developing for DigiQuip. Whenever you feel that they don\u2019t apply to your current task, stop and think and then discuss it with someone else in the team to make sure that we avoid to many deviations from these principles.\\n\\n## General principles\\n\\n### Proper Layers\\n\\nWe have a properly layered structure of our software. The easiest three layers to identify is our Database, Backends and Frontends. Obviously, we can have several of each, but there is an important principle in this layering: We do not allow functions that belong in one layer to be set in another. Examples: We do not set database logic in the backend layer, and we do not apply security measures in the frontend if it should be in the backend.\\n\\nAnother important thing about the layers is that we treat them as freestanding and with a purpose of their own. We should be able to have two backends talking to the same database without repeating code (see \u201cDRY\u201d below).  We should have proper security on every layer. We should make every layer usable by multiple other layers (so that we don\u2019t make a backend specifically for only one frontend).\\n\\n### The obvious ones\\n*KISS (Keep It Simple, Short)* and *DRY (Don\u2019t Repeat Yourself)*.\\n\\nNot fully test-driven development, but test-focused\\nStarting everything with writing the test is the ideal, but not always practical. Our principle is that we will strive to write tests for most, especially now that AI is helping us.\\n\\n### Small PRs\\n\\n## Principles for database Development\\n\\n### UUIDs for Primary Keys (PK)\\nThere are pros and cons with having UUIDs for PKs, where size is the biggest con. In our scenario, where we have several databases where we potentially want to merge over time, UUIDs will ensure that we can avoid PK conflicts. Also, it is a nice and simple security measure.\\n\\n### Use default values, restrictions and triggers\\nFollowing the principle of proper layering, we use these functions to make sure that the database makes it easy for the backend to stay \u201cDRY\u201d. E.g. we make PK values by default rather than having the backend creating them (you can always set a default value yourself if you need to). If we know that a field only should have specifically formatted strings, don\u2019t just set the schema for string, but set the restriction also. In general, you should be able to read a schema and understand what the database wants as content.\\n\\n### Databases are testable!\\nLike everything else, databases are testable, and we should write tests that makes sure that we are achieving what we need while maintaining regression consistency.\\n\\n### Clean up after yourself and others\\nIf you find stuff in the schema that is no longer in use or you are writing functionality that replaces something, create a migration that removes the unneeded stuff.\\n\\n### Migrations goes both ways\\nOften, to save a bit of time, migrations contain \u201cup\u201d but not \u201cdown\u201d. Don\u2019t save that time \u2013 write the \u201cdown\u201d unless there is a very good reason not to.\\n\\n### For us, JSON is OK to use in the schema\\nA controversial subject for some, but we are OK with using JSON as a field type if it removes unneeded complexities elsewhere.\\n\\n## Principles for backend development"},{"id":"first-blog-post","metadata":{"permalink":"/dq-website/nb/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"28. mai 2019","tags":[{"label":"hola","permalink":"/dq-website/nb/blog/tags/hola"},{"label":"docusaurus","permalink":"/dq-website/nb/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Our principles of development","permalink":"/dq-website/nb/blog/principles-of-development"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);