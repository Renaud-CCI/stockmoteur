<template>
  <section class="py-20 bg-neutral-100">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-3xl font-bold text-center mb-12">
        Nos points forts
      </h2>

      <div ref="grid" class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">

        <div class="p-6 bg-neutral-50 rounded-xl shadow">
          <h3 class="h-auto sm:h-10 font-semibold text-primary mb-3">
            ✅ Compatibilité garantie
          </h3>
          <p class="text-neutral-600 text-sm">
            Nous garantissons la compatibilité de la pièce proposée avec votre véhicule.
          </p>
        </div>

        <div class="p-6 bg-neutral-50 rounded-xl shadow">
          <h3 class="h-auto sm:h-10 font-semibold text-primary mb-3">
            🚚 Expédition rapide
          </h3>
          <p class="text-neutral-600 text-sm">
            Expédition dans toute la France métropolitaine en 24/48 h.
          </p>
        </div>

        <div class="p-6 bg-neutral-50 rounded-xl shadow">
          <h3 class="h-auto sm:h-10 font-semibold text-primary mb-3">
            💳 Paiement sécurisé
          </h3>
          <p class="text-neutral-600 text-sm">
            Paiement sécurisé avec possibilité de régler en 4 fois.
          </p>
        </div>

        <div class="p-6 bg-neutral-50 rounded-xl shadow">
          <h3 class="h-auto sm:h-10 font-semibold text-primary mb-3">
            🇫🇷 Produit français
          </h3>
          <p class="text-neutral-600 text-sm">
            Des produits issus d’un réseau français fiable.
          </p>
        </div>

        <div class="p-6 bg-neutral-50 rounded-xl shadow">
          <h3 class="h-auto sm:h-10 font-semibold text-primary mb-3">
            🛡️ Garantie 3 à 12 mois
          </h3>
          <p class="text-neutral-600 text-sm">
            Nos pièces sont garanties entre 3 et 12 mois selon le produit.
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
  const useSide = width < 768
  const cards: HTMLElement[] = grid.value ? Array.from(grid.value.querySelectorAll('.p-6') as NodeListOf<HTMLElement>) : []
  cards.forEach((card, i) => {
    const anim = useSide ? (i % 2 === 0 ? 'fade-right' : 'fade-left') : 'fade-up'
    card.setAttribute('data-aos', anim)
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
