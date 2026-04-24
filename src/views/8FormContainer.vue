<template>
  <section id="contact" class="py-20 bg-secondary text-neutral-50">
    <div class="max-w-3xl mx-auto px-6">

      <h2 class="text-3xl font-bold text-center mb-10">
        Demander une pièce
      </h2>

      <form class="space-y-6" action="https://formsubmit.co/ce1e642bd6990aef0ef9fdee3d7b0f6a" method="POST">

        <input type="hidden" name="_next" value="https://stockmoteur.vercel.app/?sent=1">
        <input type="hidden" name="_subject" value="Nouvelle demande sur stockmoteur.fr">
        <input type="text" name="website" class="hidden">

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-2">Nom <span class="text-red-500">*</span></label>
            <input name="name" type="text" required aria-required="true"
              class="w-full p-3 rounded bg-neutral-50 text-black">
          </div>

          <div>
            <label class="block mb-2">Téléphone <span class="text-red-500">*</span></label>
            <input name="phone" type="tel" required aria-required="true"
              class="w-full p-3 rounded bg-neutral-50 text-black">
          </div>
        </div>

        <div>
          <label class="block mb-2">Email <span class="text-red-500">*</span></label>
          <input name="email" type="email" required aria-required="true"
            class="w-full p-3 rounded bg-neutral-50 text-black">
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-2">Immatriculation <span class="text-neutral-300">(optionnel)</span></label>
            <input name="plate" type="text" class="w-full p-3 rounded bg-neutral-50 text-black">
          </div>

          <div>
            <label class="block mb-2">Pièce recherchée <span class="text-red-500">*</span></label>
            <select name="part" required aria-required="true" class="w-full p-3 rounded bg-neutral-50 text-black">
              <option value="">-- Choisir --</option>
              <option value="moteur">Moteur</option>
              <option value="boite">Boite</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block mb-2">Commentaires / Message <span class="text-red-500">*</span></label>
          <textarea name="message" rows="4" required aria-required="true"
            class="w-full p-3 rounded bg-neutral-50 text-black"></textarea>
        </div>

        <button type="submit" class="w-full bg-primary py-3 rounded font-semibold hover:opacity-90 transition">
          Obtenir une proposition
        </button>

      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
