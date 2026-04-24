<template>
  <section class="py-20">
    <div class="max-w-5xl mx-auto px-6 text-center">

      <h2 class="text-3xl font-bold mb-12">
        Notre fonctionnement
      </h2>

      <div ref="grid" class="grid md:grid-cols-5 gap-8">

        <div>
          <!-- <div class="text-primary text-3xl font-bold mb-2">1</div> -->
          <div class="text-2xl mb-4">📞</div>
          <p class="text-neutral-600">
            Vous nous contactez avec les informations de votre véhicule.
          </p>
        </div>

        <div>
          <!-- <div class="text-primary text-3xl font-bold mb-2">2</div> -->
          <div class="text-2xl mb-4">🔍</div>
          <p class="text-neutral-600">
            Nous vérifions la compatibilité et sélectionnons la pièce adaptée.
          </p>
        </div>

        <div>
          <!-- <div class="text-primary text-3xl font-bold mb-2">3</div> -->
          <div class="text-2xl mb-4">💳</div>
          <p class="text-neutral-600">
            Paiement sécurisé, avec possibilité de règlement en 4 fois.
          </p>
        </div>

        <div>
          <!-- <div class="text-primary text-3xl font-bold mb-2">4</div> -->
          <div class="text-2xl mb-4">🚚</div>
          <p class="text-neutral-600">
            Expédition en 24/48h partout en France métropolitaine.
          </p>
        </div>

        <div>
          <!-- <div class="text-primary text-3xl font-bold mb-2">5</div> -->
          <div class="text-2xl mb-4">📦</div>
          <p class="text-neutral-600">
            Suivez votre colis en temps réel jusqu'à sa livraison.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AOS from 'aos'

const grid = ref<HTMLElement | null>(null)

function applyAos() {
  const width = window.innerWidth
  const isMobile = width < 768
  const cards: HTMLElement[] = grid.value ? Array.from(grid.value.querySelectorAll(':scope > div') as NodeListOf<HTMLElement>) : []
  cards.forEach((card, i) => {
    card.setAttribute('data-aos', 'zoom-in')
    // duration = animation length; delay = when it starts (used for staggering)
    const duration = isMobile ? '100' : '300'
    const delay = isMobile ? '0' : String((i + 1) * 400)
    card.setAttribute('data-aos-duration', duration)
    card.setAttribute('data-aos-delay', delay)
    card.setAttribute('data-aos-offset', '100')
  })
  AOS.refresh()
}

onMounted(() => {
  applyAos()
  window.addEventListener('resize', applyAos)
})

onBeforeUnmount(() => window.removeEventListener('resize', applyAos))
</script>

<style scoped></style>
