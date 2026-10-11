# OLTRE — sito del festival

Sito di una pagina sola per **OLTRE**, festival itinerante e gratuito di
pratiche di movimento, respiro e ascolto.

**Online su https://www.oltre-festival.com**

---

# 📍 STATO DEL PROGETTO

**Ultimo aggiornamento: 11 ottobre 2026**

> Questa sezione va aggiornata a ogni passo avanti, così si sa sempre a che
> punto siamo senza doversi ricordare nulla.

## ✅ Fatto

- Il sito non è più la pagina di un singolo evento: è la **vetrina permanente**
  del progetto. Racconta cosa facciamo, cosa abbiamo fatto, com'è stato, e
  qual è la prossima tappa
- Codice su GitHub: **https://github.com/EmanueleTravaini8/oltre-festival**
- Dominio collegato, certificato HTTPS che si rinnova da solo
- Ogni modifica salvata su GitHub si ripubblica da sola in circa un minuto
- **Banner dei cookie**: Meta e Google Analytics partono solo dopo "Accetta"
- **Pagina privacy** (`privacy.html`), con i dati legali ancora da compilare
- **Galleria** con cinque foto della prima edizione

## ⏳ Da fare

| Cosa | Dove | Stato |
|---|---|---|
| Data e spazio della tappa di novembre | `prossimaTappa` in `config.js` | ⬜ vuoti |
| Link Eventbrite della tappa | `prossimaTappa.linkEventbrite` | ⬜ vuoto |
| Dati del titolare nella privacy | `privacy.html` | ⬜ 9 segnaposto |
| Numero presenze 12–13 settembre | già scritto in `index.html` | ✅ |
| Logo di BASE Milano nel piè di pagina | file immagine mancante | ⬜ per ora c'è il nome in testo |

Finché i campi della prossima tappa restano vuoti il sito funziona
regolarmente: dice che la data è in arrivo e invita a seguire Instagram.

---

# GUIDA

## In due parole: come funziona

C'è un file, **`config.js`**, che contiene le uniche cose che cambiano nel
tempo: la prossima tappa, le foto della galleria e i codici di misurazione.

Ogni volta che salvi una modifica a quel file, **il sito si ripubblica da solo
in circa un minuto**. Non devi avvisare nessuno e non devi fare altri passaggi.

Tutto il resto (testi, colori, sezioni) sta in `index.html` e normalmente
non si tocca.

**Nessun campo è obbligatorio.** Se ne lasci uno vuoto il sito non si rompe:
l'elemento collegato sparisce e basta.

---

## 1. Modificare `config.js` dal sito di GitHub

1. Vai su https://github.com/EmanueleTravaini8/oltre-festival
2. Clicca su **`config.js`** nell'elenco dei file
3. In alto a destra clicca l'icona a **matita** (*Edit this file*)
4. Modifica quello che ti serve, **restando dentro gli apici** `' '`
5. In fondo clicca **Commit changes**, lasciando selezionato
   *Commit directly to the `main` branch*

Dopo circa un minuto il sito è aggiornato. Se ti sembra che non sia successo
niente, aspetta ancora un minuto e ricarica tenendo premuto Shift.

---

## 2. La prossima tappa

Sono quattro campi dentro `prossimaTappa`. Comandano **tre punti del sito
insieme**: la scritta nella barra in alto, il riquadro nella copertina e la
sezione "Prossima tappa".

```js
prossimaTappa: {
  etichetta: 'Prossima tappa · novembre',
  data: '',
  spazio: '',
  linkEventbrite: ''
},
```

### I tre modi in cui si comporta

**A) Come adesso: `data`, `spazio` e `linkEventbrite` vuoti**

Il sito dice *"Novembre 2026. Data e spazio in arrivo: li annunciamo prima su
Instagram."* con i bottoni Instagram ed Eventbrite.

**B) Hai data e spazio, ma le iscrizioni non sono ancora aperte**

```js
data: 'Sabato 22 novembre 2026',
spazio: 'Fabbrica del Vapore',
linkEventbrite: '',
```

Il sito mostra data e spazio ovunque, con la scritta *"Iscrizioni in
apertura"*.

**C) Le iscrizioni sono aperte**

Aggiungi anche il link:

```js
linkEventbrite: 'https://www.eventbrite.it/e/1234567890',
```

Compare il bottone **Iscriviti**, che apre Eventbrite in una scheda nuova.

> **L'`etichetta`** è quella che si legge nella barra in alto. Tienila corta:
> su telefono c'è poco posto.

---

## 3. Le foto della galleria

Ogni foto è una riga dentro `galleria`, con tre campi:

```js
{
  file: '01-movimento',
  alt: 'Un gruppo di persone in movimento al centro della sala',
  didascalia: 'BASE Milano, settembre 2026'
},
```

- **`file`** — il nome del file **senza estensione e senza la misura**
- **`alt`** — descrizione per chi non vede la foto. Descrivi cosa succede
- **`didascalia`** — facoltativa, compare sotto la foto. Puoi lasciarla `''`

### Aggiungere una foto

Servono **due file** nella cartella `img/galleria/`, uno piccolo e uno grande:

```
06-cerchio-800.webp     (lato lungo 800 px)
06-cerchio-1600.webp    (lato lungo 1600 px)
```

Poi aggiungi una riga in `config.js` con `file: '06-cerchio'`.

Il sito sceglie da solo quale delle due servire, a seconda dello schermo.
Tieni ogni file **sotto i 250 KB**.

### Togliere una foto

Cancella la sua riga da `config.js`. I file restano nella cartella ma non si
vedono più. Se svuoti del tutto l'elenco, la galleria sparisce dal sito.

### Come si comporta lo slideshow

Si scorre con il dito, con le frecce, o con i tasti ← e → della tastiera.
Avanza da solo ogni 6 secondi e **si ferma per sempre al primo tocco**, così
non scappa mentre guardi. Chi ha chiesto al proprio dispositivo di ridurre le
animazioni non vede l'avanzamento automatico.

---

## 4. Il banner dei cookie

Al primo accesso compare un avviso con **Accetta** e **Rifiuta**, di pari peso.

- **Se la persona rifiuta**, non viene caricato niente: nessuna richiesta verso
  Meta o Google
- **Se accetta**, partono Pixel e Analytics
- La scelta resta salvata nel suo browser e si può cambiare dal link
  **Preferenze cookie** in fondo alla pagina

Se svuoti `metaPixelId` e `googleAnalyticsId` in `config.js`, non viene
caricato nulla comunque, qualunque cosa scelga la persona.

---

## 5. Misurazione (Meta e Google Analytics)

```js
metaPixelId: '1718452102773040',
googleAnalyticsId: 'G-3KHVF8JBP5'
```

**Dove trovarli:**

- Pixel — business.facebook.com → **Gestione eventi** → **Origini dati**
- Analytics — analytics.google.com → **Amministrazione** → **Flussi di dati**
  (è l'ID misurazione, comincia per `G-`)

### Gli eventi che vengono registrati

Ogni evento viene mandato **sia a Google Analytics sia a Meta**, con lo stesso
nome, e porta con sé il campo **`posizione`**: dice quale bottone è stato
premuto, così si capisce quale punto della pagina funziona.

| Evento | Quando parte |
|---|---|
| `page_view` | a ogni visita (lo conta Google da solo) |
| `clic_instagram` | clic su un bottone verso Instagram (barra, copertina, piè di pagina, prossima tappa) |
| `segui_eventbrite` | clic su "Segui su Eventbrite" |
| `contatto_spazi` | clic su "Scrivici per ospitare una tappa" |
| `galleria_scorri` | prima volta che qualcuno scorre la galleria, **una sola volta per visita** |
| `iscrizione_prossima_tappa` | clic su "Iscriviti", solo quando il link è compilato |

Per vedere `posizione` nei report di Google va creata una dimensione
personalizzata: *Amministrazione → Definizioni personalizzate → Crea
dimensione personalizzata*, nome `posizione`, ambito **Evento**, parametro
`posizione`.

> **Nota:** i numeri di Analytics contano i clic, non le iscrizioni. Chi si
> iscrive lo fa su Eventbrite, dove il nostro codice non arriva: la fonte vera
> dei conteggi resta Eventbrite.

---

## 6. La pagina privacy

`privacy.html` è scritta, ma **i dati legali sono ancora da compilare**: sono
evidenziati in viola e dicono *DA COMPLETARE*. Vanno riempiti prima di
mandare il link a enti o istituzioni.

Mancano: ragione sociale del titolare, indirizzo, partita IVA, data di ultimo
aggiornamento, tempi di conservazione e l'elenco dei responsabili.

---

## 7. Aggiungere un file nuovo al sito

⚠️ **Da sapere, altrimenti il sito si rompe.**

Il file `.gitignore` funziona a **lista bianca**: esclude tutto e poi riammette
i file uno per uno. Se aggiungi un file nuovo nella cartella principale (per
esempio `sitemap.xml`), devi anche aggiungere una riga in `.gitignore`:

```
!sitemap.xml
```

Senza quella riga il file **non arriva su GitHub** e in produzione il sito non
lo trova.

Le cartelle `img/` e `fonts/` sono già riammesse per intero: tutto quello che
metti lì dentro viene pubblicato senza bisogno di toccare `.gitignore`.

---

## 8. Struttura dei file

```
index.html          la pagina
privacy.html        informativa privacy e cookie
config.js           ← l'unico file da modificare
robots.txt          istruzioni per i motori di ricerca
favicon.ico         icona nella linguetta del browser
apple-touch-icon.png icona quando si salva il sito sul telefono
vercel.json         impostazioni di pubblicazione
README.md           questa guida
fonts/              il carattere Satoshi
img/                logo, simbolo, foto e anteprima social
img/galleria/       le foto dello slideshow, in due misure
```

---

## Note tecniche

Sito statico, senza build: Vercel pubblica i file così come sono. **Non serve
configurare nessun comando di build.**

Le foto della galleria sono in formato WebP, servite in due misure con
`srcset`. Gli originali non stanno nel repository.

Il primo caricamento pesa circa **510 KB**.
