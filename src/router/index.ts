// Imports default

import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Welcome from "@/domains/user/views/WelcomeView.vue";
import Login from "../domains/auth/views/Login.vue";
import Person from "@/domains/auth/views/Person.vue";
import UsersAll from "@/domains/auth/views/UsersAll.vue";
import ManagerUsers from "@/domains/teacher/views/ManagerUsers.vue";

// Routes of domains

import authRoutes from "@/domains/auth/router/auth";
import teacherRoutes from "@/domains/teacher/router/teacherRoutes";
import userRoutes from "@/domains/user/router/userRoutes";
import technologyRoutes from "@/domains/technology/router/technologyRoutes";
import portugueseRoutes from "@/domains/portuguese/router/portugueseRoutes";
import managerRoutes from "@/domains/active/manager/router/index";
import UsersRoutes from "@/domains/active/user/router/index";
import formsRoutes from "@/domains/forms/router/formsRoutes";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/person",
    name: "Person",
    component: Person,
  },
  {
    path: "/users/all",
    name: "Users",
    component: UsersAll,
  },
  {
    path: "/manager/users",
    name: "Manager Users",
    component: ManagerUsers,
  },

  // Routes of domains

  ...authRoutes,
  ...teacherRoutes,
  ...userRoutes,
  ...technologyRoutes,
  ...portugueseRoutes,
  ...managerRoutes,
  ...UsersRoutes,
  ...formsRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
