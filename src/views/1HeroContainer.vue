<template>
  <section class="relative h-screen flex items-center justify-center text-center text-neutral-50 pt-12">

    <!-- Background image -->
    <!-- <div class="absolute inset-0">
      <img src="@/assets/images/photo_3.webp" alt="Moteur coupe transversale pistons"
        class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/70"></div>
    </div> -->

    <!-- Content -->
    <div class="relative z-10 max-w-4xl px-6">
      <h1 class="text-4xl md:text-5xl 2xl:text-6xl font-bold leading-tight">
        Stock Moteur<br><span class="text-primary">Moteurs et
          boîtes de vitesses d’occasion
        </span>
      </h1>

      <div class="mt-4 grid grid-cols-6">
        <div class="col-span-6 sm:hidden w-full flex justify-end my-2 sm:my-0">
          <div class="star w-54 p-3">
            Garantie 3 à 12 mois selon le modèle
          </div>
        </div>

        <div class="mt-2 col-span-6 sm:col-span-4 sm:col-start-2">
          <p class="text-lg text-neutral-200  2xl:text-2xl">
            Pièces testées et compatibles avec votre véhicule.<br>
            Livraison 24/48h partout en France.
          </p>
        </div>

        <div class="mt-4 col-span-1 hidden sm:block">
          <div class="star w-42 p-3 text-sm">
            Garantie 3 à 12 mois selon le modèle
          </div>
        </div>
      </div>

      <div class="mt-8 2xl:mt-12 flex flex-col md:flex-row gap-4 justify-center  2xl:text-xl">
        <a href="#contact" class="bg-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          <span aria-hidden="true">🔧</span> Demander une pièce
        </a>

        <a href="tel:+33601966526"
          class="border border-neutral-50 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 hover:text-black transition">
          <span aria-hidden="true">📞</span> Appeler maintenant
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.star {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  line-height: 1.05;
  position: relative;
  border-radius: 999px;
  /* oval */
  background: var(--primary);
  box-sizing: border-box;
  transform: rotate(5deg);
}

/* Starburst spikes (pointed triangles) around the oval using conic wedges masked by an inner ellipse */
#star::after {
  /* content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 2.2rem);
  height: calc(100% + 2.2rem);
  border-radius: 50%; */
  /* narrow wedges produce pointy spikes */
  /* background: repeating-conic-gradient(var(--primary) 0deg 6deg, transparent 6deg 12deg);
  z-index: -1; */
  /* mask the center with an ellipse so wedges become pointed spikes */
  /* -webkit-mask: radial-gradient(ellipse at center, transparent 48%, black 48%);
  mask: radial-gradient(ellipse at center, transparent 48%, black 48%); */
}
</style>
