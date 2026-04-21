<template>
  <section class="relative h-screen flex items-center justify-center text-center text-neutral-50">

    <!-- Background image -->
    <div class="absolute inset-0">
      <img src="@/assets/images/photo_3.webp" alt="Moteur coupe transversale pistons"
        class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl px-6">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        Stock Moteur – <span class="text-primary">Moteurs et boîtes de vitesses d’occasion</span> garantis
      </h1>

      <p class="mt-6 text-lg text-neutral-200">
        Pièces testées et compatibles avec votre véhicule.
        Livraison 24/48h partout en France.
      </p>

      <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <a href="#contact" class="bg-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          🔧 Demander une pièce
        </a>

        <a href="tel:+33601966526"
          class="border border-neutral-50 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 hover:text-black transition">
          📞 Appeler maintenant
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
