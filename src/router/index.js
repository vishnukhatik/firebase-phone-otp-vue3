import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import Login from "../layout/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Patients from "../views/Patients.vue";
import OtpVerify from "../layout/OtpVerification.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: { name: "dashboard" },
      component: Layout,
      children: [
        {
          path: "/",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/patients",
          name: "patients",
          component: Patients,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/otp-verify",
      name: "otpVerify",
      component: OtpVerify,
    },
  ],
});

export default router;
