<script setup lang="ts">
import { useRouterUniqueId } from '@/hooks/useRouterUniqueId'

const routerUniqueId = useRouterUniqueId()
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :key="routerUniqueId">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
