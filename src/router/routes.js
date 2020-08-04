import Layout from '@page/layout.vue'

const comprehensiveQualityLayout = {
  path: '/mfs-comprehensiveQuality',
  redirect: '/mfs-comprehensiveQuality/homeBox',
  component: Layout,
  children: [{
    name: 'homeBox',
    path: '/mfs-comprehensiveQuality/homeBox',
    component: () => import('@/pages/navList/homepage')
  }, {
    name: 'stuinfoBox',
    path: '/mfs-comprehensiveQuality/stuinfoBox',
    component: () => import('@/pages/navList/stuinfo')
  }, {
    name: 'commentBox',
    path: '/mfs-comprehensiveQuality/commentBox',
    component: () => import('@/pages/navList/tcComment')
  }, {
    name: 'summaryBox',
    path: '/mfs-comprehensiveQuality/summaryBox',
    component: () => import('@/pages/navList/recordSummary')
  }, {
    name: 'printBox',
    path: '/mfs-comprehensiveQuality/printBox',
    component: () => import('@/pages/navList/printRecord')
  }, {
    name: 'countBox',
    path: '/mfs-comprehensiveQuality/countBox',
    component: () => import('@/pages/navList/datastatistics')
  }, {
    name: 'settingBox',
    path: '/mfs-comprehensiveQuality/settingBox',
    component: () => import('@/pages/navList/setup')
  }]
}

export default [comprehensiveQualityLayout]
