/* ===========================================================================
   OLTRE — IMPOSTAZIONI DEL SITO

   Questo e' l'UNICO file che devi modificare.
   Non serve saper programmare: si tratta solo di incollare dei valori
   fra gli apici '' che trovi gia' pronti.

   Regole da rispettare, sono poche ma importanti:
     - il testo va SEMPRE fra gli apici singoli:  '1234567890'
     - non togliere le virgole a fine riga
     - non cambiare i nomi a sinistra dei due punti (es. 'eventoIdMattina')

   Se qualcosa si rompe, il sito non si blocca: i bottoni "Iscriviti"
   tornano semplicemente a portare in fondo alla pagina.

   Le istruzioni passo passo sono nel file README.md.
   =========================================================================== */

window.OLTRE_CONFIG = {

  /* -------------------------------------------------------------------------
     PIXEL META (Facebook / Instagram)

     Serve a misurare quante persone visitano il sito e quante cliccano
     "Iscriviti". Se lo lasci vuoto il sito funziona lo stesso e non
     viene caricato nessun codice di tracciamento.

     Dove si trova: Meta Business Manager > Gestione eventi > Origini dati.
     ------------------------------------------------------------------------- */
  metaPixelId: '1718452102773040',


  /* -------------------------------------------------------------------------
     GOOGLE ANALYTICS

     Serve a vedere quante persone arrivano sul sito, quante aprono la
     finestra di iscrizione e quante la portano a termine.
     Come per il pixel: se lo lasci vuoto non viene caricato nulla.

     Dove si trova: Google Analytics > Amministrazione > Flussi di dati.
     ------------------------------------------------------------------------- */
  googleAnalyticsId: 'G-3KHVF8JBP5',


  /* -------------------------------------------------------------------------
     I DUE EVENTI EVENTBRITE DELLA GIORNATA

     La giornata si prenota in due parti separate: la mattina e il
     pomeriggio hanno ciascuna il proprio evento su Eventbrite, quindi
     qui vanno incollati DUE codici, uno per riga.

     Il codice e' il numero finale dell'indirizzo Eventbrite.

     Esempio: se l'indirizzo dell'evento della mattina e'
         https://www.eventbrite.it/e/2001897962696
     il codice da incollare e' proprio       2001897962696

     Se l'indirizzo ha una coda dopo un punto interrogativo, tipo
     ?aff=oddtdtcreator, quella parte NON va copiata.

     ATTENZIONE: gli eventi devono essere PUBBLICATI su Eventbrite.
     Se restano in bozza, la finestra di iscrizione non si apre.

     Ogni riga lasciata vuota non da errori: i bottoni di quella parte
     della giornata portano semplicemente alla sezione "Tieni il tuo
     posto" in fondo alla pagina. Le due parti sono indipendenti: puoi
     compilarne una e lasciare l'altra vuota.
     ------------------------------------------------------------------------- */
  eventoIdMattina: '2001897962696',
  eventoIdPomeriggio: '2002094653002',


  /* -------------------------------------------------------------------------
     COSTO DEL PRANZO

     Compare nel programma, accanto a "Pranzo condiviso".
     Scrivilo come vuoi che si legga, per esempio '10 €' oppure
     'offerta libera'.

     Se lo lasci vuoto, la riga dice solo "A cura del Tempio del Futuro
     Perduto." senza nominare il prezzo.
     ------------------------------------------------------------------------- */
  costoPranzo: '10 €'
};
