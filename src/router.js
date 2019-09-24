import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Vuex)

// const indexHeader = () => import('./components/IndexHeader')
// const indexAside = () => import('./components/IndexAside')
const indexFooter = () => import('./components/IndexFooter')
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      components: { // 命名视图+懒加载
        default: () => import('./views/Home.vue'),
        indexFooter
      }
    },
    {
      path: '/poem',
      name: 'poem',
      components: {
        default: () => import('./views/Poem.vue'),
        indexFooter
      }
    },
    {
      path: '/poem/poemTeaching',
      name: 'poemTeaching',
      components: {
        default: () => import('./views/poem/PoemTeaching'),
        indexFooter
      }
    },
    {
      path: '/poem/poemAppreciation',
      name: 'poemAppreciation',
      components: {
        default: () => import('./views/poem/PoemAppreciation'),
        indexFooter
      }
    },
    {
      path: '/music',
      name: 'music',
      components: {
        default: () => import('./views/Music.vue'),
        indexFooter
      }
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        default: () => import('./views/Blog.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_ecmascript',
      name: 'blog_ecmascript',
      components: {
        default: () => import('./views/blog/Blog_ecmascript.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_git',
      name: 'blog_git',
      components: {
        default: () => import('./views/blog/Blog_git.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_netSecurity',
      name: 'blog_netSecurity',
      components: {
        default: () => import('./views/blog/Blog_netSecurity.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_node',
      name: 'blog_node',
      components: {
        default: () => import('./views/blog/Blog_node.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_webpack',
      name: 'blog_webpack',
      components: {
        default: () => import('./views/blog/Blog_webpack.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_css',
      name: 'blog_css',
      components: {
        default: () => import('./views/blog/frontEnd/Blog_css.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_html',
      name: 'blog_html',
      components: {
        default: () => import('./views/blog/frontEnd/Blog_html.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_javascript',
      name: 'blog_javascript',
      components: {
        default: () => import('./views/blog/frontEnd/Blog_javascript.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_vue',
      name: 'blog_vue',
      components: {
        default: () => import('./views/blog/frontEnd/Blog_vue.vue'),
        indexFooter
      }
    },
    {
      path: '/blog/blog_react',
      name: 'blog_react',
      components: {
        default: () => import('./views/blog/frontEnd/Blog_react.vue'),
        indexFooter
      }
    },
    {
      path: '/world3D',
      name: 'world3D',
      components: {
        default: () => import('./views/World3D.vue'),
        indexFooter
      }
    },
    {
      path: '/game',
      name: 'game',
      components: {
        default: () => import('./views/Game.vue'),
        indexFooter
      }
    }
  ]
})

export default router
