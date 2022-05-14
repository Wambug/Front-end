import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Course from '../views/Course.vue'
import Instructor from '../views/Instructor.vue'
import MyLearning from '../views/MyLearning.vue'
import User from '../views/User.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Courses from '../views/Courses.vue'
import Perfomance from '../views/Perfomance.vue'
import Communication from '../views/Communication.vue'
import CreateCourse from '../views/Create_course.vue' 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta:{requiresAuth:true}
  },
  {
    path: '/course',
    name: 'Course',
    component:Course
  },
  {
    path: '/mylearning',
    name: 'MyLearning',
    component: MyLearning,
    meta:{requiresAuth:true}
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User
  },
  {
    path: '/InstructorDashboard',
    name: 'Instructor',
    component: Instructor,
    meta:{requiresAuth:true},
    children:[
      {
        path:'/courses',
        name: 'Courses',
        component: Courses
      },
     {
       path:'perfomance',
       name:'Perfomance',
       component:Perfomance,
     },
     {
       path:'communication',
       name:'Communication',
       component:Communication,
     },
     {
       path:'CreateCourse',
       name:'CreateCourse',
       component:CreateCourse,
     }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn ) {
    if (to.path === '/mylearning' || to.path == '/instructor-dashboard' ){
      next('/') 
      return
    }
   next('/') 
  }
  next()
})

export default router
