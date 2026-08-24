/* ===========================================================================
   OLTRE — IMPOSTAZIONI DEL SITO

   Questo e' l'UNICO file che devi modificare.
   Non serve saper programmare: si tratta solo di incollare dei numeri
   fra gli apici '' che trovi gia' pronti.

   Regole da rispettare, sono poche ma importanti:
     - il testo va SEMPRE fra gli apici singoli:  '1234567890'
     - non togliere le virgole a fine riga
     - non cambiare i nomi a sinistra dei due punti (es. 'eb-sab-1530')

   Se qualcosa si rompe, il sito non si blocca: i bottoni tornano
   semplicemente a essere link normali.

   Le istruzioni passo passo, con gli screenshot di dove cliccare,
   sono nel file README.md.
   =========================================================================== */

window.OLTRE_CONFIG = {

  /* -------------------------------------------------------------------------
     PIXEL META (Facebook / Instagram)

     Serve a misurare quante persone visitano il sito e quante cliccano
     "Prenotati". Se lo lasci vuoto il sito funziona lo stesso e non
     viene caricato nessun codice di tracciamento.

     Dove si trova: Meta Business Manager > Gestione eventi > Origini dati.
     E' un numero lungo di circa 15 cifre. Vedi README.md.
     ------------------------------------------------------------------------- */
  metaPixelId: '1718452102773040',


  /* -------------------------------------------------------------------------
     WORKSHOP CON POSTI ESAURITI

     Quando un workshop si riempie, aggiungi qui il suo codice fra apici.
     Sul sito il bottone "Prenotati" sparisce e al suo posto compare
     la scritta "Posti esauriti", in grigio e non cliccabile.

     Esempio con due workshop pieni:
         esauriti: ['eb-dom-1500', 'eb-dom-1830'],

     Per riaprire le iscrizioni basta togliere il codice da questa lista.
     Lasciala cosi' com'e' finche' non serve.
     ------------------------------------------------------------------------- */
  esauriti: [],


  /* -------------------------------------------------------------------------
     CODICI DEGLI EVENTI EVENTBRITE

     Per ogni workshop incolla fra gli apici il codice numerico
     dell'evento: e' il numero finale dell'indirizzo Eventbrite.

     Esempio: se l'indirizzo dell'evento e'
         https://www.eventbrite.it/e/workshop-movimento-tickets-1234567890
     il codice da incollare e' proprio       1234567890

     ATTENZIONE: l'evento deve essere PUBBLICATO su Eventbrite.
     Se resta in bozza, la finestra di iscrizione non si apre.

     Ogni riga lasciata vuota non da errori: quel bottone
     semplicemente non apre ancora nulla.
     ------------------------------------------------------------------------- */
  eventi: {
    'eb-sab-1530': '1998688465002',  // Sabato 15:30 — Workshop sul movimento: di cosa sei fatto?
    'eb-sab-1730': '',  // Sabato 17:30 — Workshop sulla consapevolezza: sentire nel buio
    'eb-dom-1000': '',  // Domenica 10:00 — Yoga: Il corpo sa di cosa ha bisogno
    'eb-dom-1145': '',  // Domenica 11:45 — Auto-osservazione: Leggere il corpo
    'eb-dom-1500': '',  // Domenica 15:00 — Workshop a sorpresa
    'eb-dom-1715': '',  // Domenica 17:15 — Esplorazione corporea: Quando la forma cede
    'eb-dom-1830': ''   // Domenica 18:30 — Meditazione somatica: Il corpo che integra
  }
};
