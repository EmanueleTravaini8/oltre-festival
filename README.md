# OLTRE — sito del festival

Sito di una pagina sola per il festival OLTRE (12–13 settembre 2026, BASE Milano).

Questa guida è scritta per essere usata **senza sapere programmare**. Non devi
installare niente sul computer: si fa tutto dal sito di GitHub, dal browser.

---

# 📍 STATO DEL PROGETTO

**Ultimo aggiornamento: 26 agosto 2026**

> Questa sezione va aggiornata a ogni passo avanti, così si sa sempre a che
> punto siamo senza doversi ricordare nulla.

## ✅ Fatto

- Sito convertito da file di design a sito vero, testato su desktop e mobile
- Codice su GitHub: **https://github.com/EmanueleTravaini8/oltre-festival**
- Progetto Vercel collegato al repository: ogni modifica salvata su GitHub
  si ripubblica da sola in circa un minuto
- **Dominio collegato e attivo**
- **Contatti nel piè di pagina** (email e Instagram) compilati
- **Programma allineato al Cronoprogramma ufficiale** del 25 agosto: la domenica
  e' cambiata parecchio, il sabato no
- **Pixel Meta attivo e verificato** (ID `1718452102773040`): PageView e
  IntenzioneIscrizione partono davvero
- **Google Analytics attivo** (ID `G-3KHVF8JBP5`): visita, apertura della
  finestra di iscrizione e iscrizione completata
- **Tutti i workshop collegati a Eventbrite**: i sei bottoni aprono la finestra

### 🌐 Il sito è online

**https://www.oltre-festival.com**

Indirizzi che funzionano, tutti verificati il 23 agosto 2026:

| Indirizzo | Cosa fa |
|---|---|
| `www.oltre-festival.com` | il sito (indirizzo principale) |
| `oltre-festival.com` | reindirizza a `www` |
| `oltre-festival.vercel.app` | indirizzo tecnico di Vercel, sempre valido |

Il certificato di sicurezza (HTTPS) è attivo su entrambi i domini e si rinnova
da solo.

## ⏳ Da fare, in quest'ordine

### 1. Riempire `config.js` ← **SI RIPARTE DA QUI**

`config.js` è completo. Questo è il contenuto attuale:

| Cosa | Dove | Stato |
|---|---|---|
| ID del pixel Meta | `metaPixelId` | ✅ `1718452102773040` |
| ID di Google Analytics | `googleAnalyticsId` | ✅ `G-3KHVF8JBP5` |
| Sabato 15:00 — Di cosa sei fatto | `eb-sab-1500` | ✅ `1998890284650` |
| Sabato 17:00 — Sentire nel buio | `eb-sab-1700` | ✅ `1998890310728` |
| Domenica 10:00 — Il corpo sa di cosa ha bisogno | `eb-dom-1000` | ✅ `1998887696910` |
| Domenica 12:00 — Il corpo che integra | `eb-dom-1200` | ✅ `1998903753937` |
| Domenica 15:00–18:00 — Leggere il corpo (con guest) | `eb-dom-1500` | ✅ `1998903836183` |
| Domenica 18:30 — Quando la forma cede | `eb-dom-1830` | ✅ `1998903883324` |

Se un codice viene tolto, il sito non si rompe: quel bottone "Prenotati"
semplicemente non apre più nulla, senza errori.

Le istruzioni sono più sotto, ai punti 2, 4 e 5 di questa guida.


---

# GUIDA

## In due parole: come funziona

C'è un file, **`config.js`**, che contiene le uniche cose che cambiano nel tempo:
i codici di misurazione (pixel di Meta e Google Analytics) e i codici degli
eventi Eventbrite.

Ogni volta che salvi una modifica a quel file, **il sito si ripubblica da solo in
circa un minuto**. Non devi avvisare nessuno e non devi fare altri passaggi.

Tutto il resto (testi, colori, programma) sta in `index.html` e normalmente non
si tocca.

---

## 1. Modificare `config.js` dal sito di GitHub

Questa è la procedura che userai ogni volta. Vale per qualsiasi modifica.

1. Apri il repository su GitHub e clicca sul file **`config.js`** nell'elenco.
2. In alto a destra del riquadro con il testo, clicca l'icona della **matita**
   (se ci passi sopra col mouse compare la scritta *Edit this file*).
3. Modifica quello che ti serve. Le regole sono tre:
   - il testo va **sempre fra apici singoli**: `'1234567890'`
   - **non togliere le virgole** a fine riga
   - **non cambiare i nomi** a sinistra dei due punti (es. `'eb-sab-1500'`)
4. Scorri in fondo alla pagina e clicca il bottone verde **Commit changes**.
5. Si apre una finestrella: puoi lasciare tutto com'è e cliccare di nuovo
   **Commit changes**.

Fatto. **Dopo circa un minuto Vercel ha ripubblicato il sito da solo.**
Aggiorna la pagina del sito (Cmd+R) e vedi la modifica.

> Se ti sembra che non sia successo niente, aspetta ancora un minuto e ricarica
> tenendo premuto Shift, per saltare la cache del browser.

---

## 2. Il codice degli eventi Eventbrite (`eventi`)

Ogni workshop ha un bottone **"Prenotati"**. Perché il bottone apra la finestra
di iscrizione, gli devi dare il codice numerico dell'evento.

### Dove si trova il codice

Apri la pagina pubblica del tuo evento su Eventbrite e guarda l'indirizzo nella
barra del browser. Il codice è **il numero finale**:

```
https://www.eventbrite.it/e/workshop-sul-movimento-tickets-1234567890
                                                            ^^^^^^^^^^
                                                            questo
```

In questo esempio il codice è `1234567890`.

### Dove incollarlo

Dentro `config.js`, nella sezione `eventi`, alla riga del workshop giusto.
Le righe sono già commentate con giorno, ora e titolo, così non sbagli:

```js
eventi: {
  'eb-sab-1500': '1234567890',  // Sabato 15:30 — Workshop sul movimento: di cosa sei fatto?
  'eb-sab-1700': '',            // Sabato 17:00 — Workshop sulla consapevolezza: sentire nel buio
  ...
}
```

### ⚠️ L'evento deve essere PUBBLICATO

**Questo è l'errore più comune.** Se su Eventbrite l'evento è ancora in
**bozza** (*draft*), la finestra di iscrizione **non si apre**: resta bianca o
dà errore.

Su Eventbrite vai sull'evento e controlla che lo stato sia **"Live"** /
**"Pubblicato"**. Se è in bozza, clicca **Publish**.

### Cosa succede se lascio un codice vuoto

Niente di rotto. Quel bottone resta lì ma non apre nulla, e **non compaiono
errori**. Puoi riempire i codici uno alla volta, man mano che crei gli eventi.

---

## 3. Segnare un workshop come "posti esauriti" (`esauriti`)

Quando un workshop si riempie, non serve toccare la grafica: basta aggiungere il
suo codice alla lista `esauriti` in `config.js`.

I codici sono quelli a sinistra nella sezione `eventi` (`'eb-sab-1500'`,
`'eb-dom-1000'`, e così via), **non** i numeri di Eventbrite.

**Lista vuota** — tutti i workshop sono prenotabili (è lo stato di partenza):

```js
esauriti: [],
```

**Un workshop pieno:**

```js
esauriti: ['eb-dom-1000'],
```

**Più workshop pieni** — separali con la virgola:

```js
esauriti: ['eb-dom-1000', 'eb-dom-1830'],
```

### Cosa vede la persona sul sito

Per i workshop che metti in questa lista, al posto del bottone nero
**"Prenotati"** compare la scritta **"Posti esauriti"**: grigia, con il bordo
sottile, **non cliccabile**. Il resto del workshop (orario, titolo, descrizione)
resta visibile identico.

Per **riaprire** le iscrizioni togli il codice dalla lista e salva. Torna il
bottone "Prenotati" come prima.

---

## 4. Il pixel di Meta (`metaPixelId`)

Serve a misurare quante persone visitano il sito e quante cliccano "Prenotati".

### Dove trovare l'ID

1. Vai su **business.facebook.com** ed entra nel tuo Business Manager.
2. Nel menu a sinistra apri **Gestione eventi** (*Events Manager*).
3. Sempre a sinistra clicca **Origini dati** (*Data sources*).
4. Seleziona il tuo pixel nell'elenco.
5. Sotto il nome del pixel trovi l'**ID**: un numero lungo, circa 15 cifre.
   Cliccandoci sopra di solito lo copi.

Incollalo in `config.js`:

```js
metaPixelId: '123456789012345',
```

### Se lo lasci vuoto

Il sito funziona normalmente e **non viene caricato nessun codice di
tracciamento**. Nessun errore, nessuna richiesta di rete verso Meta.

### Cosa viene misurato

- **PageView** — ogni visita alla pagina.
- **IntenzioneIscrizione** — ogni clic su un bottone "Prenotati". L'evento porta
  con sé il campo `blocco` con il codice del workshop (es. `eb-dom-1000`), così
  in Meta puoi vedere quali workshop attirano più clic.

### Verifica del dominio

Se verifichi il dominio con il **metodo DNS**, non devi fare niente qui.

Se invece Meta ti chiede il metodo con il **meta tag**, apri `index.html`, cerca
in alto la riga:

```html
<!-- <meta name="facebook-domain-verification" content="" /> -->
```

Togli `<!--` all'inizio e `-->` alla fine, e incolla il codice di Meta dentro le
virgolette di `content=""`.

---

## 5. Google Analytics (`googleAnalyticsId`)

Serve a seguire il percorso completo: **quante persone arrivano sul sito →
quante aprono la finestra di iscrizione → quante la portano a termine**.

### Dove trovare l'ID

1. Vai su **analytics.google.com**.
2. In basso a sinistra apri **Amministrazione**.
3. Nella colonna della proprietà clicca **Flussi di dati** e apri il flusso web.
4. In alto trovi l'**ID misurazione**: comincia per `G-` (es. `G-3KHVF8JBP5`).

Incollalo in `config.js`:

```js
googleAnalyticsId: 'G-3KHVF8JBP5',
```

### Se lo lasci vuoto

Come per il pixel: il sito funziona e **non viene caricato nessun codice di
tracciamento**. Nessuna richiesta verso Google, nessun errore.

### I tre eventi che compongono il percorso

| Evento | Quando parte | Serve a |
|---|---|---|
| `page_view` | a ogni visita | contare chi arriva sul sito |
| `inizio_iscrizione` | al clic su "Prenotati" | contare chi apre la finestra |
| `iscrizione_completata` | a iscrizione conclusa | contare chi si iscrive davvero |

`page_view` lo conta Google da solo, non serve codice. Gli altri due partono dal
sito e portano con sé il campo **`workshop`** con il codice del blocco
(es. `eb-dom-1000`), così puoi vedere quali workshop convertono meglio.

### Cosa va fatto una volta sola dentro Google Analytics

Il codice sul sito è a posto, ma tre cose vanno impostate a mano nel pannello,
altrimenti i dati arrivano e non si vedono nei report:

1. **Registrare il campo `workshop`** — *Amministrazione → Definizioni
   personalizzate → Crea dimensione personalizzata*. Nome `workshop`, ambito
   *Evento*, parametro `workshop`. Senza questo passaggio i numeri totali si
   vedono, ma non riesci a distinguere un workshop dall'altro.
2. **Segnare `iscrizione_completata` come evento chiave** —
   *Amministrazione → Eventi*, interruttore **Contrassegna come evento chiave**.
   Da lì in poi viene contato come conversione.
3. **Costruire il funnel** — *Esplora → Esplorazione canalizzazione*, con tre
   passaggi in quest'ordine: `page_view`, `inizio_iscrizione`,
   `iscrizione_completata`.

I nuovi eventi compaiono nell'elenco solo **dopo** che sono arrivati almeno una
volta: fai un clic di prova sul sito, poi guarda in *Report → Tempo reale*.

### Il limite da conoscere

`iscrizione_completata` parte dalla funzione `onOrderComplete` che Eventbrite
richiama quando l'ordine si chiude **dentro la finestra sul nostro sito**.

Non parte se la persona si iscrive altrove: dalla pagina Eventbrite raggiunta
per altra via, dall'app, o nel caso raro in cui lo script di Eventbrite non si
carichi e il bottone funzioni da link normale. Il numero di Analytics quindi
**sottostima le iscrizioni**: la fonte vera dei conteggi resta Eventbrite.
Per il rapporto fra i tre passaggi va benissimo lo stesso.

---

## 6. I contatti nel piè di pagina

Sono gia' compilati:

- **Email**: `oltre_festival@outlook.it`
- **Instagram**: `https://www.instagram.com/oltre_festival/`
  (si apre in una scheda nuova, cosi' chi guarda non perde il sito)

Se un giorno cambiano, stanno in `index.html`, in fondo, nel piè di pagina.
L'email compare **due volte** sulla stessa riga: dentro `mailto:` e come
testo visibile. Vanno cambiate entrambe.

---

## 7. Struttura dei file

```
index.html      la pagina (testi, programma, FAQ) — normalmente non si tocca
config.js       ← l'unico file da modificare
README.md       questa guida
fonts/          il carattere Satoshi
img/            logo, simbolo e la foto del festival
```

---

## Note tecniche

Sito statico, senza build: Vercel pubblica i file così come sono.
**Non serve configurare nessun comando di build.**

Il bottone "Prenotati" imposta anche un indirizzo di riserva verso la pagina
Eventbrite dell'evento: se lo script di Eventbrite non parte (rete lenta, blocco
degli script), il clic porta comunque all'evento invece di non fare nulla.

Gli indirizzi di riserva usano `eventbrite.it`. Se preferisci `eventbrite.com`,
la riga da cambiare è `var BASE_URL` in fondo a `index.html`.
