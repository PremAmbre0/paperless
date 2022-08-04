import Vue from "vue";
import VueRouter from "vue-router";
import Authentication from "../views/Authentication.vue";
import DashBoard from "../views/DashBoard.vue";
import MyDataSets from "../views/MyDataSets.vue";
import MyJobs from "../views/MyJobs.vue";
import MyTemplates from "../views/MyTemplates.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/paperless/MyTemplates" },
  { path: "/auth", component: Authentication },
  { path: "/paperless/dashboard", component: DashBoard },
  { path: "/paperless/my-templates", component: MyTemplates },
  { path: "/paperless/my-datasets", component: MyDataSets },
  { path: "/paperless/my-jobs", component: MyJobs },
];

const router = new VueRouter({
  routes,
});

export default router;
