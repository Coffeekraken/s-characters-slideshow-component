module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-icon-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-icon-component
        </h1>
        <p class="p p--lead m-b-bigger">
          Easily integrate icons using various driver like "img", "fonticon", "svg", "fontawesome", "material" and "foundation"
        </p>
        <p class="p m-b">
          <s-icon icon="address-book" driver="img" icons-path="/demo/icons" title="Address book"></s-icon>
          "img" driver
        </p>
        <p class="p m-b">
          <s-icon icon="address-book" driver="svg" icons-path="/demo/icons" title="Address book"></s-icon>
          "svg" driver
        </p>
        <p class="p m-b">
          <s-icon icon="address-book" driver="fontawesome" title="Address book"></s-icon>
          "fontawesome" driver
        </p>
        <p class="p m-b">
          <s-icon icon="3d_rotation" driver="material" title="3d rotation"></s-icon>
          "material" driver
        </p>
        <p class="p m-b">
          <s-icon icon="heart" driver="foundation" title="Heart"></s-icon>
          "foundation" driver
        </p>
      `
    },
    css: {
      language: 'sass',
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
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import SIconComponent from './dist/index'
      `
    }
  }
}
