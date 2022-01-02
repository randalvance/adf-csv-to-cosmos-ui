import Vue from 'vue'
import VueRouter from 'vue-router'
import Uploader from '../views/Uploader.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Uploader
  },
  {
    path: '/status/:pipelineRunId',
    name: 'Status',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pipeline-status" */ '../views/PipelineStatus.vue')
  },
  {
    path: '/data/:pipelineRunId',
    name: 'Data',
    component: () => import(/* webpackChunkName: "data" */ '../views/DataViewer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
