<script setup lang="ts">
import { useRouter } from 'vue-router'
import ProgressSpinner from 'primevue/progressspinner';
import { jumpIfTokenValid } from '@/utils/utils';
const r = useRouter();

jumpIfTokenValid('/dashboard').catch(() => {
  r.push('/login');
})
</script>

<template>
  <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8"
                   fill="var(--surface-ground)" animationDuration=".5s"
                   aria-label="Custom ProgressSpinner" />
</template>
