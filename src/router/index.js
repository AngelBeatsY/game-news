import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/news/news'
import gsNews from '@/components/news/gsNews'
import vgNews from '@/components/news/vgNews'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: News,
    children: [{
        path: 'gsNews',
        component: gsNews
      },
      {
        path: 'vgNews',
        component: vgNews
      }
    ],
    redirect: '/vgNews'
  }]
})
