<template>
  <header class="fixed top-0 left-0 w-full max-w-full bg-neutral-50 shadow z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo + Nom -->
      <div class="flex items-center gap-3">
        <img src="@/assets/images/logo.webp" alt="Stock Moteur Logo" class="h-10 w-auto">
        <span class="text-xl font-bold text-neutral-800 hidden sm:block">
          Stock <span class="text-primary">Moteur</span>
        </span>
      </div>

      <!-- Contact rapide -->
      <div class="hidden md:flex items-center gap-6">
        <a href="tel:+33601966526" class="text-neutral-700 font-medium hover:text-primary transition">
          📞 06 01 96 65 26
        </a>
        <a href="#contact"
          class="bg-primary text-neutral-50 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          Demander une pièce
        </a>
      </div>

      <!-- Contact rapide (mobile)-->
      <div class="flex md:hidden items-end gap-6">
        <a href="tel:+33601966526" class="text-neutral-700 font-medium hover:text-primary transition">
          📞 06 01 96 65 26
        </a>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
