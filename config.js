/* ===========================================================================
   OLTRE — IMPOSTAZIONI DEL SITO

   Questo e' l'UNICO file che devi modificare.
   Non serve saper programmare: si tratta solo di scrivere dei valori
   fra gli apici '' che trovi gia' pronti.

   Regole da rispettare, sono poche ma importanti:
     - il testo va SEMPRE fra gli apici singoli:  'cosi'
     - non togliere le virgole a fine riga
     - non cambiare i nomi a sinistra dei due punti (es. 'data')

   Nessun campo e' obbligatorio. Se ne lasci uno vuoto il sito non si
   rompe: l'elemento collegato sparisce e basta.

   Le istruzioni passo passo sono nel file README.md.
   =========================================================================== */

window.OLTRE_CONFIG = {

  /* -------------------------------------------------------------------------
     1. LA PROSSIMA TAPPA

     Questi quattro campi comandano tre punti del sito insieme: la scritta
     nella barra in alto, il riquadro nella copertina e la sezione
     "Prossima tappa".

     Si comportano in tre modi, a seconda di cosa scrivi:

     A) TUTTO VUOTO (tranne etichetta) — come adesso
        Il sito dice che la data e' in arrivo e invita a seguire Instagram.

     B) DATA E SPAZIO COMPILATI, linkEventbrite VUOTO
        Il sito mostra data e spazio, con la scritta "Iscrizioni in apertura".

     C) ANCHE linkEventbrite COMPILATO
        Compare il bottone "Iscriviti", che apre Eventbrite in una scheda nuova.

     ------------------------------------------------------------------------- */
  prossimaTappa: {

    // Compare nella barra in alto. Tienila corta: su telefono c'e' poco posto.
    etichetta: 'Prossima tappa · novembre',

    // Es. 'Sabato 22 novembre 2026'. Vuoto = "data in arrivo".
    data: '',

    // Es. 'Tempio del Futuro Perduto'. Vuoto = non viene nominato nessuno spazio.
    spazio: '',

    // Indirizzo completo della pagina Eventbrite della tappa.
    // Deve cominciare con https://
    linkEventbrite: ''
  },


  /* -------------------------------------------------------------------------
     2. LA PAGINA EVENTBRITE DI OLTRE

     E' la pagina che raccoglie tutti i nostri eventi: serve al bottone
     "Segui su Eventbrite", cosi' chi vuole viene avvisato delle prossime date.
     Se la lasci vuota, quel bottone non compare.
     ------------------------------------------------------------------------- */
  linkEventbriteOrganizzatore: 'https://www.eventbrite.com/o/oltre',


  /* -------------------------------------------------------------------------
     3. LE FOTO DELLA GALLERIA

     Ogni riga e' una foto. I campi sono tre:

       file       il nome del file SENZA estensione e SENZA la misura.
                  Esempio: se nella cartella img/galleria/ ci sono
                      06-cerchio-800.webp  e  06-cerchio-1600.webp
                  qui scrivi soltanto     '06-cerchio'

       alt        descrizione per chi non vede la foto (lettori di schermo).
                  Descrivi cosa succede, non "foto di".

       didascalia facoltativa, compare sotto la foto. Puoi lasciarla ''.

     Per AGGIUNGERE una foto: metti i due file in img/galleria/ (uno con
     -800 e uno con -1600 nel nome) e aggiungi una riga qui sotto.
     Per TOGLIERLA: cancella la sua riga. Le foto restano nella cartella
     ma non si vedono piu'.

     Se svuoti del tutto l'elenco, la galleria sparisce dal sito.
     ------------------------------------------------------------------------- */
  galleria: [
    {
      file: '01-movimento',
      alt: 'Un gruppo di persone in movimento al centro della sala, altre in primo piano sfocate',
      didascalia: 'BASE Milano, settembre 2026'
    },
    {
      file: '02-sala',
      alt: 'La sala vista per lungo, con decine di persone distese sul pavimento',
      didascalia: 'BASE Milano, settembre 2026'
    },
    {
      file: '03-allungamenti',
      alt: 'Persone sedute a terra durante un allungamento laterale',
      didascalia: ''
    },
    {
      file: '04-coppie',
      alt: 'Persone a terra che lavorano in coppia nella sala grande',
      didascalia: 'BASE Milano, settembre 2026'
    },
    {
      file: '05-respiro',
      alt: 'Persone sedute distanziate in una sala luminosa, durante una pratica di respiro',
      didascalia: ''
    }
  ],


  /* -------------------------------------------------------------------------
     4. PIXEL META (Facebook / Instagram)

     Serve a misurare quante persone visitano il sito e cosa ci fanno.
     Si carica SOLO dopo che la persona ha premuto "Accetta" sul banner
     dei cookie. Se lasci il campo vuoto non viene caricato comunque nulla.

     Dove si trova: Meta Business Manager > Gestione eventi > Origini dati.
     ------------------------------------------------------------------------- */
  metaPixelId: '1718452102773040',


  /* -------------------------------------------------------------------------
     5. GOOGLE ANALYTICS

     Come sopra: si carica solo dopo "Accetta".

     Dove si trova: Google Analytics > Amministrazione > Flussi di dati.
     E' l'ID misurazione, comincia per G-
     ------------------------------------------------------------------------- */
  googleAnalyticsId: 'G-3KHVF8JBP5'
};
