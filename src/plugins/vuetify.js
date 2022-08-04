import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VIcon } from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VIcon,
  },
});

export default new Vuetify({
  //   icons: {
  //     iconfont: "mdi", // default - only for display purposes
  //   },
});
