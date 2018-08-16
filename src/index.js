import SkeletonPage from './SkeletonPage.vue'
import SkeletonTitle from './SkeletonTitle.vue'
import SkeletonList from './SkeletonList.vue'

function install(Vue, options) {
    Vue.component('skeleton-page', SkeletonPage);
    Vue.component('skeleton-title', SkeletonTitle);
    Vue.component('skeleton-list', SkeletonList);
}

const VueSkeletonElement = { SkeletonPage, SkeletonTitle, SkeletonList, install }

export default VueSkeletonElement
export { SkeletonPage, SkeletonTitle, SkeletonList, install }