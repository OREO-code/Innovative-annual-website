import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Gallery from "../views/Gallery"
import Organizer from "../views/Organizer"
import Login from '@/views/Login.vue'
import Arrangment from '@/views/Arrangment.vue'
import Itemlist from '@/views/ItemList.vue'
import ItemDetail from '@/views/ItemDetail.vue'
import BackstageLogin from '../views/Backstage/BackstageLogin.vue'
import Notice from '../views/Backstage/Notice.vue'
import Paper from '../views/Backstage/Paper.vue'
import Recommend from '../views/Backstage/Recommend.vue'
import Reform from '../views/Backstage/Reform.vue'
import Rotation from '../views/Backstage/Rotation.vue'
import Timeline from '../views/Backstage/Timeline.vue'
import IndexManage from '../views/Backstage/IndexManage.vue'
import Team from '../views/Backstage/Team.vue'
import RecommendDt from '../views/Backstage/RecommendDt.vue'
import RecommendNew from '../views/Backstage/RecommendNew.vue'
import PaperDt from '../views/Backstage/PaperDt.vue'
import PaperNew from '../views/Backstage/PaperNew.vue'
import ReformDt from '../views/Backstage/ReformDt.vue'
import ReformNew from '../views/Backstage/ReformNew.vue'
import NoticeEdit from '../views/Backstage/NoticeEdit.vue'
import NoticeDetail from '../views/NoticeDetail'
import annex from '../views/Backstage/annex'
import Show1 from '../views/Show1.vue'
import Show2 from '../views/Show2.vue'
import Show3 from '../views/Show3.vue'
import ShowVote from '../views/ShowVote.vue'
import Vote from '../views/Vote.vue'
import UserLogin from '../views/UserLogin.vue'
import Navmenu from '../views/Backstage/Navmenu.vue'
import Addtplt from '../views/Backstage/Addtplt.vue'
import Template from '../views/Template.vue'
import VoteBack from '../views/Backstage/VoteBack.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
    children: [
      {
        path: '/Show1',
        name: 'Show1',
        component: Show1
      },
      {
        path: '/Show2',
        name: 'Show2',
        component: Show2
      },
      {
        path: '/Show3',
        name: 'Show3',
        component: Show3
      },
    ]
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Organizer
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Arrangment',
    name: 'Arrangment',
    component: Arrangment
  },
  {
    path: '/itemlist',
    name: 'Itemlist',
    component: Itemlist
  },
  {
    path: '/itemdetail',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/BackstageLogin',
    name: 'BackstageLogin',
    component: BackstageLogin
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/NoticeDetail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/NoticeEdit',
    name: 'NoticeEdit',
    component: NoticeEdit
  },
  {
    path: '/annex',
    name: 'annex',
    component: annex
  },
  {
    path: '/Paper',
    name: 'Paper',
    component: Paper
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend
  },

  {
    path: '/Reform',
    name: 'Reform',
    component: Reform
  },
  {
    path: '/Rotation',
    name: 'Rotation',
    component: Rotation
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/IndexManage',
    name: 'IndexManage',
    component: IndexManage
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  }, {
    path: '/RecommendDt',
    name: 'RecommendDt',
    component: RecommendDt
  },
  {
    path: '/RecommendNew',
    name: 'RecommendNew',
    component: RecommendNew
  },
  {
    path: '/ReformDt',
    name: 'ReformDt',
    component: ReformDt
  },
  {
    path: '/ReformNew',
    name: 'ReformNew',
    component: ReformNew
  },
  {
    path: '/PaperDt',
    name: 'PaperDt',
    component: PaperDt
  },
  {
    path: '/PaperNew',
    name: 'PaperNew',
    component: PaperNew
  },
  {
    path: '/showvote',
    name: 'ShowVote',
    component: ShowVote
  },
  {
    path: '/vote',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/Navmenu',
    name: 'Navmenu',
    component: Navmenu
  },
  {
    path: '/Addtplt',
    name: 'Addtplt',
    component: Addtplt
  },
  {
    path: '/Template',
    name: 'Template',
    component: Template
  },
  {
    path: '/VoteBack',
    name: 'VoteBack',
    component: VoteBack
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router