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
  }]
}

export default [emailLayout]
