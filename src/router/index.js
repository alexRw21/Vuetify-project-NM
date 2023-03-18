// Composables
import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/UsersList.vue';
import AddUser from '../views/AddUser.vue';
import CarList from '../views/CarList.vue';
import MyRes from '../components/MyRes.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
    ],
  },
  {
    path: "/usersList",
    name: "Users",
    component: UsersList
},
{
    path: "/addUser",
    name: "Add",
    component: AddUser
},
{
  path: "/carList",
  name: "Car",
  component: CarList
},
{
  path: "/myRes",
  name: "MyRes",
  component: MyRes
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
