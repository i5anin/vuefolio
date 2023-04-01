import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.css';

export default createVuetify();

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('v-'),
        };
        return options;
      });
  },
};
