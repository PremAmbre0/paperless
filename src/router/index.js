import Vue from "vue";
import VueRouter from "vue-router";
import Authentication from "../views/Authentication.vue";
import DashBoard from "../view/Dashboard.vue";
import MyDataSets from "../views/MyDataSets.vue";
import MyJobs from "../views/MyJobs.vue";
import MyTemplates from "../views/MyTemplates.vue";
import Paperless from "../views/Paperless.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/auth", component: Authentication },
  {
    path: "/paperless", component: Paperless,
    children: [
      { path: "/paperless/DashBoard", component: DashBoard },
      { path: "/paperless/MyTemplates", component: MyTemplates },
      { path: "/paperless/MyDataSets", component: MyDataSets },
      { path: "/paperless/MyJobs", component: MyJobs }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
