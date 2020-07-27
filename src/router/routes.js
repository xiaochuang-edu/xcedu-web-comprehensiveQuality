import Layout from '@page/layout.vue'

const emailLayout = {
  path: '/mfs-comprehensiveQuality',
  redirect: '/mfs-comprehensiveQuality/cqyList/homeBox',
  component: Layout,
  children: [{
    name: 'homeBox',
    path: 'cqyList/homeBox',
    component: () => import('@/pages/navList/homepage')
  }, {
    name: 'stuinfoBox',
    path: 'cqyList/stuinfoBox',
    component: () => import('@/pages/navList/stuinfo')
  }, {
    name: 'commentBox',
    path: 'cqyList/commentBox',
    component: () => import('@/pages/navList/tcComment')
  }, {
    name: 'summaryBox',
    path: 'cqyList/summaryBox',
    component: () => import('@/pages/navList/recordSummary')
  }, {
    name: 'printBox',
    path: 'cqyList/printBox',
    component: () => import('@/pages/navList/printRecord')
  }]
}

export default [emailLayout]
