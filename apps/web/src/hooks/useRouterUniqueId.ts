import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * 获取当前路由的唯一标识
 */
export function useRouterUniqueId() {
  const id = computed(() => useRoute().fullPath)
  return id
}
