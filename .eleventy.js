const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  let metadata = await Image(src, {
    widths: [400, 800, null],
    formats: ["webp", null],
    urlPath: "/images/",
    outputDir: "./dist/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = config => {
  // Move SVG images
  config.addPassthroughCopy('./src/images/');

  // Enable imageshortcodes for our images
  config.addNunjucksAsyncShortcode("image", imageShortcode);

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Set directories to pass through to the dist folder
  // config.addPassthroughCopy('./src/images/');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};