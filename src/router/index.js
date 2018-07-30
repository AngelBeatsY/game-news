import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import News from '@/components/news/news'
import gsNews from '@/components/news/gsNews'
import vgNews from '@/components/news/vgNews'
import Forum from '@/components/forum/forum'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      components: {
        myHelloWorld: HelloWorld,
        // myHeader: Header
      }
    },
    {
      path: '/news',
      name: 'news',
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
      redirect: '/news/vgNews'
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    }
  ]
})
