const blogPluginExports = require("@docusaurus/plugin-content-blog");

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    async contentLoaded(...contentLoadedArgs) {
      await blogPluginInstance.contentLoaded(...contentLoadedArgs);
      const { actions, content } = contentLoadedArgs[0];
      const { setGlobalData } = actions;
      const { blogTags } = content;
	  setGlobalData({blogTags});	
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
