import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.css';

export default createVuetify();

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const vuetify = createVuetify({
  ssr: true,
});
