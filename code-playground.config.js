module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-characters-slideshow-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-characters-slideshow-component
        </h1>
        <h1 class="h1 m-b">
          <s-characters-slideshow values="['Hello World','How are you universe?']"></s-characters-slideshow>
        </h1>
        <h2 class="h2">
          <s-characters-slideshow characters="#" timeout="2000" duration="300" values="['Hi their!','How are you today?','I m fine thanks and you?']"></s-characters-slideshow>
        </h2>
      `
    },
    css: {
      language: "sass",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
      `
    },
    js: {
      language: "js",
      data: `
        import SCharactersSlideshowComponent from './dist/index'
      `
    }
  }
}
