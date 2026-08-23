# OLTRE — sito del festival

Sito di una pagina sola per il festival OLTRE (12–13 settembre 2026, BASE Milano).

Questa guida è scritta per essere usata **senza sapere programmare**. Non devi
installare niente sul computer: si fa tutto dal sito di GitHub, dal browser.

---

# 📍 STATO DEL PROGETTO

**Ultimo aggiornamento: 23 agosto 2026**

> Questa sezione va aggiornata a ogni passo avanti, così si sa sempre a che
> punto siamo senza doversi ricordare nulla.

## ✅ Fatto

- Sito convertito da file di design a sito vero, testato su desktop e mobile
- Codice su GitHub: **https://github.com/EmanueleTravaini8/oltre-festival**
- **Sito online: https://oltre-festival.vercel.app**
- Bottoni Eventbrite e pixel Meta pronti, in attesa solo dei codici

## ⏳ Da fare, in quest'ordine

### 1. Collegare il dominio `oltre-festival.com` ← **SI RIPARTE DA QUI**

Nel progetto su Vercel: **Settings → Domains → Add**, scrivi
`oltre-festival.com` e conferma. Se propone anche `www.oltre-festival.com`
con redirect, si può accettare.

**Il DNS è già pronto** (verificato il 23 agosto 2026): i nameserver sono già
`ns1.vercel-dns.com` / `ns2.vercel-dns.com` e i record A puntano agli IP di
Vercel. Al momento il dominio risponde `404`, che è esattamente lo stato
"dominio non ancora associato a un progetto".

Quindi non c'è nessuna attesa: appena lo aggiungi il sito compare subito, e
non verrà chiesto di modificare nessun DNS.

### 2. Riempire `config.js`

Nel progetto Vercel: **Settings → Domains → Add**, scrivi `oltre-festival.com`
e conferma.

I nameserver puntano già a Vercel. Se il dominio risulta ancora non pronto,
la propagazione DNS non è finita: riprova più tardi, senza cambiare nulla.

### 3. Riempire `config.js`

Nessuno di questi campi è ancora compilato:

| Cosa | Dove | Stato |
|---|---|---|
| ID del pixel Meta | `metaPixelId` | ⬜ vuoto |
| Sabato 15:30 — Di cosa sei fatto | `eb-sab-1530` | ⬜ vuoto |
| Sabato 17:30 — Sentire nel buio | `eb-sab-1730` | ⬜ vuoto |
| Domenica 10:00 — Il corpo sa di cosa ha bisogno | `eb-dom-1000` | ⬜ vuoto |
| Domenica 11:45 — Leggere il corpo | `eb-dom-1145` | ⬜ vuoto |
| Domenica 15:00 — Workshop a sorpresa | `eb-dom-1500` | ⬜ vuoto |
| Domenica 17:15 — Quando la forma cede | `eb-dom-1715` | ⬜ vuoto |
| Domenica 18:30 — Il corpo che integra | `eb-dom-1830` | ⬜ vuoto |

Finché restano vuoti il sito funziona regolarmente: i bottoni "Prenotati"
semplicemente non aprono ancora nulla, e non compaiono errori.

Le istruzioni sono più sotto, ai punti 2 e 4 di questa guida.

### 4. Sistemare due segnaposto nei testi

Nel piè di pagina di `index.html` (vedi punto 5 di questa guida):

- l'email è ancora `ciao@example.com`
- il link Instagram punta a `instagram.com/` senza nome profilo

---

# GUIDA

## In due parole: come funziona

C'è un file, **`config.js`**, che contiene le uniche cose che cambiano nel tempo:
il codice del pixel di Meta e i codici degli eventi Eventbrite.

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
   - **non cambiare i nomi** a sinistra dei due punti (es. `'eb-sab-1530'`)
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
  'eb-sab-1530': '1234567890',  // Sabato 15:30 — Workshop sul movimento: di cosa sei fatto?
  'eb-sab-1730': '',            // Sabato 17:30 — Workshop sulla consapevolezza: sentire nel buio
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

I codici sono quelli a sinistra nella sezione `eventi` (`'eb-sab-1530'`,
`'eb-dom-1000'`, e così via), **non** i numeri di Eventbrite.

**Lista vuota** — tutti i workshop sono prenotabili (è lo stato di partenza):

```js
esauriti: [],
```

**Un workshop pieno:**

```js
esauriti: ['eb-dom-1500'],
```

**Più workshop pieni** — separali con la virgola:

```js
esauriti: ['eb-dom-1500', 'eb-dom-1830'],
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

## 5. Cose ancora da sistemare nei testi

Nel sito ci sono due segnaposto rimasti dal file di partenza. Stanno in
`index.html`, in fondo, nel piè di pagina:

- **Email**: `mailto:ciao@example.com`, con la scritta `[email]`.
  Va sostituita con l'indirizzo vero.
- **Instagram**: il link punta a `https://instagram.com/` senza nome profilo.
  Va completato, es. `https://instagram.com/oltre.festival`.

---

## 6. Struttura dei file

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
