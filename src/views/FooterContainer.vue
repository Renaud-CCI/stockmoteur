<template>
  <footer class="bg-neutral-900 text-neutral-400 py-10 px-6 text-sm">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 2xl:px-24">

      <div class="col-span-1 text-center sm:text-left">
        <p class=" text-neutral-50 font-semibold">EURL STOCK MOTEUR</p>

        <p>
          11, le Riou – 81240 ALBINE – France
        </p>

        <!-- Contact rapide -->
        <p class="hidden sm:block">
          <a href="tel:+33601966526" class="hover:text-primary transition">
            <span aria-hidden="true">📞</span> 06 01 96 65 26
          </a>
          &nbsp;|&nbsp;
          <a href="mailto:stockmoteur@laposte.net" class="hover:text-primary transition">
            <span aria-hidden="true">✉</span> stockmoteur@laposte.net
          </a>
        </p>

        <!-- Contact rapide smartphone -->
        <p class="block sm:hidden">
          <a href="tel:+33601966526" class="hover:text-primary transition">
            <span aria-hidden="true">📞</span> 06 01 96 65 26
          </a>
          <br>
          <a href="mailto:stockmoteur@laposte.net" class="hover:text-primary transition">
            <span aria-hidden="true">✉</span> stockmoteur@laposte.net
          </a>
        </p>
      </div>

      <div class="col-span-1 flex justify-center sm:justify-end sm:items-end sm:pb-2">
        <button class="hover:text-neutral-50 underline underline-offset-2" @click="trackOpen = true">
          Suivre votre colis
        </button>
      </div>

      <div class="col-span-1 text-center sm:text-left">
        <p class="hidden sm:block">
          SIRET : 81739436400019 – TVA intracommunautaire : FR18817394364
        </p>
        <p class="block sm:hidden">
          SIRET : 81739436400019<br>TVA intracommunautaire : FR18817394364
        </p>
      </div>

      <div class="col-span-1 flex justify-center sm:justify-end gap-6">
        <button class="hover:text-neutral-50 underline underline-offset-2" @click="modalOpen = true">
          Conditions de garantie
        </button>
        <button class="hover:text-neutral-50 underline underline-offset-2" @click="legalOpen = true">
          Mentions légales
        </button>
      </div>

      <p class="text-xs mt-4 col-span-1 sm:col-span-2 text-center text-neutral-500">
        Site éco-conçu par <a href="https://www.creation-site-loire.fr/" target="_blank"
          class="hover:text-primary transition">
          Renaud Bresson
        </a>
      </p>

    </div>
  </footer>

  <!-- Modale Conditions de garantie -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog"
        aria-modal="true" aria-label="Conditions de garantie">

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70" @click="modalOpen = false"></div>

        <!-- Panneau -->
        <div
          class="relative z-10 bg-white text-neutral-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">

          <!-- En-tête -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-200 shrink-0">
            <h2 class="text-lg font-bold">Conditions de garantie</h2>
            <button @click="modalOpen = false"
              class="text-neutral-500 hover:text-neutral-900 transition text-2xl leading-none" aria-label="Fermer">
              &times;
            </button>
          </div>

          <!-- Contenu scrollable -->
          <div class="overflow-y-auto px-6 py-6 text-sm space-y-5 leading-relaxed">

            <div class="text-center">
              <p class="font-bold text-base uppercase">Stock Moteur</p>
              <p class="font-semibold uppercase">Pièces d'occasion garanties</p>
              <p class="mt-2 text-neutral-500">Conditions générales valables à compter du : <strong>01/01/2016</strong>
              </p>
            </div>

            <p>
              Les achats auprès de notre société sont soumis aux présentes conditions générales de vente et conditions
              particulières qui prévalent sur toutes autres sauf dérogation formelle et expresse de notre part.
              Acceptation des conditions : le client reconnaît avoir pris connaissance, au moment de la passation de
              commande, des conditions de vente et déclare les accepter sans réserves.
            </p>

            <section>
              <h3 class="font-bold mb-1">1 – Prix</h3>
              <p>
                Le prix de chaque produit est exprimé en euros, à la date de vente. Il ne comprend ni le transport, ni
                la caution (consigne) éventuelle qui peuvent se rajouter. Toutes nos ventes aux particuliers sont
                payables au comptant.
                Le paiement s'effectue dans nos établissements en espèces, virement ou carte bancaire portant le sigle
                CB.
              </p>
            </section>

            <section>
              <h3 class="font-bold mb-2">2 – Garantie légale</h3>
              <p class="mb-3">
                Le vendeur a l'obligation de garantir l'acheteur contre les vices cachés de la pièce vendue dans les
                conditions définies par les articles L. 211-4, L. 211-5 et L. 211-12 du Code de la Consommation ainsi
                que les articles 1641 et 1648 du Code Civil.
              </p>
              <div class="space-y-3 pl-4 border-l-2 border-neutral-200">
                <div>
                  <p class="font-semibold">Article L. 211-4</p>
                  <p>Le vendeur est tenu de livrer un bien conforme au contrat et répond des défauts de conformité
                    existant lors de la délivrance. Il répond également des défauts de conformité résultant de
                    l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa
                    charge par le contrat ou a été réalisée sous sa responsabilité.</p>
                </div>
                <div>
                  <p class="font-semibold">Article L. 211-5</p>
                  <p class="mb-2">Pour être conforme au contrat, le bien doit :</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>être propre à l'usage habituellement attendu d'un bien semblable et, le cas échéant,
                      correspondre à la description donnée par le vendeur et posséder les qualités que celui-ci a
                      présentées à l'acheteur sous forme d'échantillon ou de modèle ;</li>
                    <li>présenter les qualités qu'un acheteur peut légitimement attendre eu égard aux déclarations
                      publiques faites par le vendeur, par le producteur ou par son représentant, notamment dans la
                      publicité ou l'étiquetage ;</li>
                    <li>présenter les caractéristiques définies d'un commun accord par les parties ou être propre à tout
                      usage spécial recherché par l'acheteur, porté à la connaissance du vendeur et que ce dernier a
                      accepté.</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold">Article L. 211-12</p>
                  <p>L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du
                    bien.</p>
                </div>
                <div>
                  <p class="font-semibold">Article 1641</p>
                  <p>Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent
                    impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage que l'acheteur ne
                    l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.</p>
                </div>
                <div>
                  <p class="font-semibold">Article 1648</p>
                  <p>L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur dans un délai de deux
                    ans à compter de la découverte du vice. Dans le cas prévu par l'article 1642-1, l'action doit être
                    introduite, à peine de forclusion, dans l'année qui suit la date à laquelle le vendeur peut être
                    déchargé des vices ou des défauts de conformité apparents.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="font-bold mb-1">3 – Pièces non garanties</h3>
              <p>Au vu de l'état, de l'année, de l'origine et de l'expertise, certains de nos groupes de pièces sont
                hors d'usage donc vendus sans garantie. Ils sont en vente uniquement pour la récupération de pièce et/ou
                de matière. En cas d'avarie, l'acheteur n'aura aucun recours.</p>
            </section>

            <section>
              <h3 class="font-bold mb-1">4 – Durée</h3>
              <p>Les pièces font l'objet d'une garantie de <strong>3 mois</strong> à compter de la date figurant sur la
                facture (toutes réclamations devront être faites par lettre recommandée avec accusé de réception).
                Concernant les moteurs, un défaut sur le joint de culasse devra être signalé dans un délai de
                <strong>quinze jours</strong> à compter de la date figurant sur la facture.
              </p>
            </section>

            <section>
              <h3 class="font-bold mb-1">5 – Information client</h3>
              <p>Les conditions de mise en œuvre de la garantie décrites ci-après sont affichées dans le point de vente
                et jointes à la facture de la pièce vendue.</p>
            </section>

            <section>
              <h3 class="font-bold mb-1">6 – Conditions générales de l'exécution de la garantie</h3>
              <p>Pour que la garantie s'applique, le montage des pièces doit être conforme aux normes constructeurs.
                L'acheteur devra faire effectuer les réglages par un professionnel.</p>
              <p class="mt-2">La garantie s'effectuera par voie d'échange dans la limite des stocks disponibles. En
                aucun cas la garantie ne couvre les frais de dépose, repose, consommables, accessoires, port, dépannage,
                immobilisation et location de véhicules. En cas d'impossibilité d'échange, le vendeur procédera au
                remboursement de la pièce après récupération de cette dernière (le retour est à la charge de
                l'acheteur).</p>
              <p class="mt-2">Toute intervention sur la pièce, mauvais montage ou défaut de mise au point fait échec à
                la mise en œuvre de la garantie.</p>
            </section>

            <section>
              <h3 class="font-bold mb-2">7 – Conditions particulières d'exécution de la garantie</h3>
              <p class="mb-3">Le non-respect des préconisations faites par le constructeur fait échec à la mise en œuvre
                de la garantie.</p>
              <div class="space-y-3 pl-4 border-l-2 border-neutral-200">
                <div>
                  <p class="font-semibold">Moteurs</p>
                  <p>La garantie s'applique sur le moteur (bloc moteur embiellé + culasse) mais ne s'applique pas sur
                    les pièces périphériques (pompe à injection, injecteurs, turbo…). Si le système d'injection et le
                    turbo sont laissés à titre gracieux sur le moteur, l'acheteur doit les contrôler et les changer si
                    nécessaire.</p>
                </div>
                <div>
                  <p class="font-semibold">Boîte – Pont</p>
                  <p>Les joints spi ne sont pas garantis, l'acheteur doit les contrôler et les changer si nécessaire.
                    Aucun dommage résultant d'une fuite liée à un joint spi non changé ne sera pris en charge. Les
                    embrayages de boîte (si présents) sont laissés à titre gracieux ; l'acheteur doit les contrôler et
                    les changer si nécessaire.</p>
                </div>
                <div>
                  <p class="font-semibold">Alternateur et démarreur</p>
                  <p>Avant montage, l'acheteur doit contrôler les circuits électriques.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="font-bold mb-1">8 – Exonération de la responsabilité du vendeur</h3>
              <p class="mb-2">L'entreprise se trouve dégagée de toute responsabilité si la défectuosité provient :</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>directement d'une défectuosité ou d'une inadaptation d'une autre pièce du véhicule,</li>
                <li>d'une utilisation de la pièce en dehors de la destination prévue par le constructeur,</li>
                <li>d'une modification ou adaptation de la pièce non autorisée ou non prévue par le constructeur,</li>
                <li>d'une utilisation anormale ou d'une inobservation des préconisations d'entretien, ou d'un
                  endommagement accidentel,</li>
                <li>d'un montage ne répondant pas aux prescriptions du constructeur.</li>
              </ul>
            </section>

            <section>
              <h3 class="font-bold mb-1">9 – Règlement des litiges</h3>
              <p>Notre société ne peut être tenue pour responsable des dommages de toute nature, tant matériels
                qu'immatériels ou corporels, qui pourraient résulter d'un mauvais fonctionnement ou de la mauvaise
                utilisation des produits vendus.</p>
              <p class="mt-2">La responsabilité de notre société sera, en tout état de cause, limitée au montant des
                achats du client.</p>
              <p class="mt-2">En cas de difficultés dans l'application du présent contrat, l'acheteur a la possibilité,
                avant toute action en justice, de rechercher une solution amiable avec notre société. À défaut,
                l'affaire sera portée devant le tribunal compétent. Dans le cadre d'un litige entre professionnels,
                l'affaire sera portée devant le tribunal de commerce du lieu dont dépend le siège social du vendeur.</p>
            </section>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Modale Suivi de colis (formulaire) -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="trackOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog"
        aria-modal="true" aria-label="Suivi de colis">

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70" @click="trackOpen = false"></div>

        <!-- Panneau -->
        <div
          class="relative z-10 bg-white text-neutral-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">

          <!-- En-tête -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-200 shrink-0">
            <h2 class="text-lg font-bold">Suivre votre colis</h2>
            <button @click="trackOpen = false"
              class="text-neutral-500 hover:text-neutral-900 transition text-2xl leading-none" aria-label="Fermer">
              &times;
            </button>
          </div>

          <!-- Contenu scrollable -->
          <div class="overflow-y-auto px-6 py-6 text-sm">

            <form class="space-y-6" action="https://formsubmit.co/‌334c083b8ef2f7504ad05661fc3f0029" method="POST">

              <input type="hidden" name="_next" value="https://stockmoteur.vercel.app/?sent=1">
              <input type="hidden" name="_subject" value="Suivi de colis - stockmoteur.fr">
              <input type="text" name="website" class="hidden">

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block mb-2">Nom <span class="text-red-500">*</span></label>
                  <input name="nom" type="text" required aria-required="true"
                    class="w-full p-3 rounded bg-neutral-50 text-black">
                </div>

                <div>
                  <label class="block mb-2">Téléphone <span class="text-red-500">*</span></label>
                  <input name="téléphone" type="tel" required aria-required="true"
                    class="w-full p-3 rounded bg-neutral-50 text-black">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block mb-2">Email <span class="text-red-500">*</span></label>
                  <input name="email" type="email" required aria-required="true"
                    class="w-full p-3 rounded bg-neutral-50 text-black">
                </div>

                <div>
                  <label class="block mb-2">N° de facture <span class="text-red-500">*</span></label>
                  <input name="numero-de-facture" type="text" required aria-required="true"
                    class="w-full p-3 rounded bg-neutral-50 text-black">
                </div>
              </div>

              <div>
                <label class="block mb-2">Commentaires / Message <span class="text-red-500">*</span></label>
                <textarea name="message" rows="4" required aria-required="true"
                  class="w-full p-3 rounded bg-neutral-50 text-black"></textarea>
              </div>

              <button type="submit" class="w-full bg-primary py-3 rounded font-semibold hover:opacity-90 transition">
                Envoyer ma demande de suivi
              </button>

            </form>

          </div>

        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Modale Mentions légales -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="legalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog"
        aria-modal="true" aria-label="Mentions légales">

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70" @click="legalOpen = false"></div>

        <!-- Panneau -->
        <div
          class="relative z-10 bg-white text-neutral-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">

          <!-- En-tête -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-200 shrink-0">
            <h2 class="text-lg font-bold">Mentions légales &amp; Données personnelles</h2>
            <button @click="legalOpen = false"
              class="text-neutral-500 hover:text-neutral-900 transition text-2xl leading-none" aria-label="Fermer">
              &times;
            </button>
          </div>

          <!-- Contenu scrollable -->
          <div class="overflow-y-auto px-6 py-6 text-sm space-y-6 leading-relaxed">

            <section>
              <h3 class="font-bold text-base mb-2">1. Éditeur du site</h3>
              <ul class="space-y-1 text-neutral-700">
                <li><strong>Dénomination&nbsp;:</strong> Stock Moteur</li>
                <li><strong>Forme juridique&nbsp;:</strong> EURL</li>
                <li><strong>Adresse&nbsp;:</strong> 11, le Riou – 81240 Albine – France</li>
                <li><strong>Téléphone&nbsp;:</strong> 06 01 96 65 26</li>
                <li><strong>Email&nbsp;:</strong> stockmoteur@laposte.net</li>
                <li><strong>SIRET&nbsp;:</strong> 81739436400019</li>
                <li><strong>TVA intracommunautaire&nbsp;:</strong> FR18817394364</li>
              </ul>
            </section>

            <section>
              <h3 class="font-bold text-base mb-2">2. Hébergement</h3>
              <ul class="space-y-1 text-neutral-700">
                <li><strong>Nom&nbsp;:</strong> Vercel Inc.</li>
                <li><strong>Adresse&nbsp;:</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
                <li><strong>Site&nbsp;:</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                    class="underline hover:text-primary">https://vercel.com</a></li>
              </ul>
            </section>

            <section>
              <h3 class="font-bold text-base mb-2">3. Propriété intellectuelle</h3>
              <p class="text-neutral-700">
                L'ensemble du contenu du site (textes, images, logo) est la propriété de Stock Moteur, sauf mention
                contraire.
                Certaines images sont issues de banques d'images libres de droits.
              </p>
            </section>

            <section>
              <h3 class="font-bold text-base mb-2">4. Données personnelles (RGPD)</h3>
              <div class="space-y-3 text-neutral-700">
                <div>
                  <p class="font-semibold">Données collectées</p>
                  <p>Nom, téléphone, email, informations véhicule.</p>
                </div>
                <div>
                  <p class="font-semibold">Finalité</p>
                  <p>Répondre aux demandes de devis ou d'information.</p>
                </div>
                <div>
                  <p class="font-semibold">Durée de conservation</p>
                  <p>Les données sont conservées le temps nécessaire au traitement de la demande.</p>
                </div>
                <div>
                  <p class="font-semibold">Sous-traitant</p>
                  <p>Les données du formulaire transitent via le service <a href="https://formsubmit.co" target="_blank"
                      rel="noopener noreferrer" class="underline hover:text-primary">FormSubmit.co</a>.</p>
                </div>
                <div>
                  <p class="font-semibold">Droits des utilisateurs</p>
                  <p>Conformément au RGPD, vous pouvez demander l'accès, la modification ou la suppression de vos
                    données en nous contactant à <a href="mailto:stockmoteur@laposte.net"
                      class="underline hover:text-primary">stockmoteur@laposte.net</a>.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 class="font-bold text-base mb-2">5. Cookies</h3>
              <p class="text-neutral-700">Le site n'utilise aucun cookie à des fins de suivi ou d'analyse.</p>
            </section>

            <section>
              <h3 class="font-bold text-base mb-2">6. Conception &amp; développement</h3>
              <p class="text-neutral-700">
                Site conçu et développé par <a href="https://www.creation-site-loire.fr/" target="_blank"
                  rel="noopener noreferrer" class="underline hover:text-primary">Renaud Bresson</a>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const modalOpen = ref(false)
const legalOpen = ref(false)
const trackOpen = ref(false)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    modalOpen.value = false
    legalOpen.value = false
    trackOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
