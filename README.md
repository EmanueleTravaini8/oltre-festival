# OLTRE — sito del festival

Sito di una pagina sola per **OLTRE**, festival itinerante e gratuito di
pratiche di movimento, respiro e ascolto.

**Online su https://www.oltre-festival.com**

---

# 📍 STATO DEL PROGETTO

## ✅ Fatto

- Sito convertito dal file di design a sito vero, testato su desktop e mobile
- Codice su GitHub: **https://github.com/EmanueleTravaini8/oltre-festival**
- Progetto Vercel collegato al repository: ogni modifica salvata su GitHub
  si ripubblica da sola in circa un minuto
- **Dominio collegato e attivo**, certificato HTTPS che si rinnova da solo
- **Pixel Meta attivo e verificato** (ID `1718452102773040`)
- **Google Analytics attivo** (ID `G-3KHVF8JBP5`) con il percorso completo
  visita → apertura iscrizione → iscrizione completata
- **Pagina della seconda edizione** (3 ottobre, Tempio del Futuro Perduto)

## ⏳ Da fare

| Cosa | Dove | Stato |
|---|---|---|
| Codice evento della **mattina** | `eventoIdMattina` in `config.js` | ⬜ **vuoto** |
| Codice evento del **pomeriggio** | `eventoIdPomeriggio` in `config.js` | ⬜ **vuoto** |
| Costo del pranzo | `costoPranzo` in `config.js` | ✅ `10 €` |
| Logo BASE Milano nel piè di pagina | file immagine mancante | ⬜ |

Finché i due codici restano vuoti il sito funziona regolarmente: i bottoni
"Iscriviti" portano alla sezione delle iscrizioni in fondo alla pagina, senza
errori.

---

# GUIDA

## In due parole: come funziona

C'è un file, **`config.js`**, che contiene le uniche cose che cambiano nel
tempo: i codici di misurazione, i due codici degli eventi Eventbrite e il
costo del pranzo.

Ogni volta che salvi una modifica a quel file, **il sito si ripubblica da solo
in circa un minuto**. Non devi avvisare nessuno e non devi fare altri passaggi.

Tutto il resto (testi, colori, programma) sta in `index.html` e normalmente
non si tocca.

---

## 1. Modificare `config.js` dal sito di GitHub

1. Vai su https://github.com/EmanueleTravaini8/oltre-festival
2. Clicca su **`config.js`** nell'elenco dei file
3. In alto a destra clicca l'icona a **matita** (*Edit this file*)
4. Modifica quello che ti serve, **restando dentro gli apici** `' '`
5. In fondo clicca **Commit changes**, lasciando selezionato
   *Commit directly to the `main` branch*

Dopo circa un minuto il sito è aggiornato.

---

## 2. I due codici degli eventi Eventbrite

La giornata si prenota in **due parti separate**, quindi su Eventbrite ci sono
due eventi distinti e in `config.js` ci sono due righe:

```js
eventoIdMattina: '1234567890',
eventoIdPomeriggio: '0987654321',
```

### Dove trovarli

Il codice è il numero finale dell'indirizzo dell'evento. Se l'indirizzo è

```
https://www.eventbrite.it/e/2001897962696?aff=oddtdtcreator
```

il codice da incollare è `2001897962696`. La coda dopo il punto interrogativo
(`?aff=...`) **non** va copiata.

Li trovi anche dal pannello organizzatore: eventbrite.it → **Gestisci i miei
eventi** → apri l'evento → il numero è nell'indirizzo della pagina.

### ⚠️ Gli eventi devono essere PUBBLICATI

Se restano in bozza su Eventbrite, la finestra di iscrizione non si apre.

### Quali bottoni usano quale codice

| Bottone | Evento |
|---|---|
| Barra in alto e copertina | nessuno: portano in fondo alla pagina |
| "Iscriviti" dentro *Quando la forma cede* (11:00) | mattina |
| "Iscriviti" dentro *Dal tappeto alla vita* (14:00) | pomeriggio |
| "Iscriviti alla mattina" in fondo | mattina |
| "Iscriviti al pomeriggio" in fondo | pomeriggio |

Quando il codice è compilato, quei bottoni aprono la finestra di iscrizione
**dentro il sito**. Se lo script di Eventbrite non si carica, diventano link
normali verso la pagina dell'evento: non si rompe niente.

### Cosa succede se ne lasci uno vuoto

Le due parti sono indipendenti: puoi compilarne una e lasciare l'altra vuota.
I bottoni della parte non ancora configurata portano semplicemente alla sezione
"Tieni il tuo posto" in fondo alla pagina. Nessun errore.

---

## 3. Il costo del pranzo (`costoPranzo`)

Compare nel programma, accanto a **Pranzo condiviso**. Scrivilo come vuoi che
si legga:

```js
costoPranzo: '10 €',
```

Diventa: *A cura del Tempio del Futuro Perduto: piatto completo, vegano e
senza glutine, 10 €.*

Se lo lasci vuoto la riga si chiude dopo "senza glutine", senza nominare il
prezzo.

---

## 4. Il pixel di Meta (`metaPixelId`)

Serve a misurare quante persone visitano il sito e quante cliccano "Iscriviti".

**Dove trovare l'ID:** business.facebook.com → **Gestione eventi** → **Origini
dati** → seleziona il pixel. È un numero di circa 15 cifre.

### Cosa viene misurato

- **PageView** — ogni visita alla pagina
- **IntenzioneIscrizione** — ogni clic su "Iscriviti"
- **IscrizioneCompletata** — ogni iscrizione conclusa nella finestra

Se lo lasci vuoto, **non viene caricato nessun codice di tracciamento**.

### Verifica del dominio

Se verifichi il dominio con il **metodo DNS**, non devi fare niente qui.

Se invece Meta ti chiede il metodo con il **meta tag**, apri `index.html`,
cerca in alto la riga:

```html
<!-- <meta name="facebook-domain-verification" content="" /> -->
```

Togli `<!--` all'inizio e `-->` alla fine, e incolla il codice di Meta dentro
le virgolette di `content=""`.

---

## 5. Google Analytics (`googleAnalyticsId`)

Serve a seguire il percorso completo: **quante persone arrivano sul sito →
quante aprono la finestra di iscrizione → quante la portano a termine**.

**Dove trovare l'ID:** analytics.google.com → **Amministrazione** → **Flussi
di dati** → apri il flusso web. È l'**ID misurazione**, comincia per `G-`.

### I tre eventi che compongono il percorso

| Evento | Quando parte | Serve a |
|---|---|---|
| `page_view` | a ogni visita | contare chi arriva sul sito |
| `inizio_iscrizione` | al clic su "Iscriviti" | contare chi apre la finestra |
| `iscrizione_completata` | a iscrizione conclusa | contare chi si iscrive davvero |

`page_view` lo conta Google da solo. Gli altri due portano con sé due campi:

- **`workshop`** — quale parte della giornata: `mattina-3-ottobre`,
  `pomeriggio-3-ottobre`, oppure `giornata-3-ottobre` per i bottoni della barra
  e della copertina, che non aprono un checkout ma portano alle iscrizioni
- **`posizione`** — quale bottone è stato premuto, fra `iscriviti-barra`,
  `iscriviti-hero`, `iscriviti-programma-mattina`,
  `iscriviti-programma-pomeriggio`, `iscriviti-fondo-mattina` e
  `iscriviti-fondo-pomeriggio`

Così vedi sia quale delle due parti tira di più, sia quale punto della pagina
convince davvero.

### Cosa è già stato impostato nel pannello

- dimensione personalizzata **`workshop`** (ambito Evento)
- `iscrizione_completata` contrassegnato come **evento chiave**
- esplorazione **canalizzazione** con i tre passaggi
- esplorazione **a forma libera** con il dettaglio per blocco

Per vedere anche `posizione` nei report va creata una seconda dimensione
personalizzata con lo stesso procedimento: *Amministrazione → Definizioni
personalizzate → Crea dimensione personalizzata*, nome `posizione`, ambito
**Evento**, parametro `posizione`.

### Il limite da conoscere

`iscrizione_completata` parte dalla funzione che Eventbrite richiama quando
l'ordine si chiude **dentro la finestra sul nostro sito**. Non parte se la
persona si iscrive dalla pagina Eventbrite raggiunta per altra via o
dall'app. Il numero di Analytics quindi **sottostima le iscrizioni**: la fonte
vera dei conteggi resta Eventbrite. Per il rapporto fra i tre passaggi va
benissimo lo stesso.

---

## 6. I contatti nel piè di pagina

Stanno in `index.html`, in fondo:

- email `oltre_festival@outlook.it`
- Instagram `https://www.instagram.com/oltre_festival/`

---

## 7. Struttura dei file

```
index.html          la pagina, con testi e programma
config.js           le impostazioni (l'unico file da modificare di solito)
vercel.json         un solo build per commit, niente anteprime dal branch di lavoro
README.md           questo file
fonts/              il carattere Satoshi
img/
  logo-oltre.png      il logo esteso
  symbol-ink.png      il simbolo nella barra in alto
  foto-hero.jpg       la foto della prima edizione
  logo-100idee.png    il logo del programma 100 IDEE
  logo-tempio.png     il logo del Tempio del Futuro Perduto
  logo-ink.png        non usato al momento
  foto-pratica-urbana.jpg  non usata al momento
```
