_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_
<!-- {{useSiteData}} -->
</RedDiv>

<button @click="count++">点我！</button>
<script lang="ts">
import { h, ref } from 'vue'
import {useSiteData,useSiteLocaleData,usePageData,usePageFrontmatter,useRouteLocale} from '@vuepress/client'
const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

export default {
  components: {
    RedDiv,
  },
  mounted() {
      console.log(usePageData().value)
  },
  setup() {
    const msg = 'Markdown 中的 Vue'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style>
.red-div {
  color: red;
}
</style>