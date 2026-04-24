<template>
  <!-- Toast confirmation envoi -->
  <Transition name="toast">
    <div v-if="showToast"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 whitespace-nowrap">
      <span class="text-xl">✅</span>
      <span class="font-semibold">Votre demande a bien été envoyée&nbsp;! Nous vous répondrons rapidement.</span>
    </div>
  </Transition>

  <HeaderContainer />
  <HeroContainer />
  <EngagmentContainer />
  <QualityContainer />
  <ExpertContainer />
  <GearboxContainer />
  <ServiceContainer />
  <ProcessContainer />
  <FormContainer />
  <FooterContainer />
</template>

<script setup lang="ts">
import EngagmentContainer from './views/2EngagmentContainer.vue';
import GearboxContainer from './views/5GearboxContainer.vue';
import ProcessContainer from './views/7ProcessContainer.vue';
import FormContainer from './views/8FormContainer.vue';
import FooterContainer from './views/FooterContainer.vue';
import HeaderContainer from './views/HeaderContainer.vue';
import HeroContainer from './views/1HeroContainer.vue';
import QualityContainer from './views/3QualityContainer.vue';
import ExpertContainer from './views/4ExpertContainer.vue';
import ServiceContainer from './views/6ServiceContainer.vue';

import { ref, onMounted } from 'vue'

const showToast = ref(false)

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('sent') === '1') {
    showToast.value = true
    window.history.replaceState({}, '', window.location.pathname)
    setTimeout(() => { showToast.value = false }, 5000)
  }
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 1.5rem);
}
</style>
