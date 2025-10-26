export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/AppLogin.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/:id",
        name: "TaskView",
        component: () => import("../../../frontend/src/views/TaskView.vue"),
        meta: { layout: "AppLayoutMain" },
      },
      {
        path: "/tasks/create",
        name: "TaskCreate",
        component: () => import("../../../frontend/src/views/TaskCreate.vue"),
        meta: { layout: "AppLayoutMain" },
      },
      {
        path: "/tasks/edit/:id",
        name: "TaskEdit",
        component: () => import("../../../frontend/src/views/TaskEdit.vue"),
        meta: { layout: "AppLayoutMain" },
      },
    ],
  },
  {
    name: "Counter Base",
    path: "/counter-0",
    component: () => import("../demo0/DemoCounter.vue"),
  },
  {
    name: "Counter Pinia",
    path: "/counter-4",
    component: () => import("../demo4/DemoCounter.vue"),
  },
];
