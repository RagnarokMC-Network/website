"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";

import styles from "./page.module.scss";

const Regolamento = () => {
  const [tab, setTab] = useState(0);

  return (
    <main>
      <Hero
        title="Regolamento"
        crumb={["Home", "Regole"]}
        href={["/", "/regolamento"]}
      />

      <section>
        <SectionDescriptor
          title="Il nostro regolamento"
          description="Leggi il regolamento del nostro network. Riguarda tutte le piattaforme marcate RagnarokMC"
        />

        <div className={styles.rulesWrapper}>
          <div className={styles.tab}>
            <button
              className={tab == 0 ? styles.btnActive : ""}
              onClick={() => setTab(0)}
            >
              Generale
            </button>
            <button
              className={tab == 1 ? styles.btnActive : ""}
              onClick={() => setTab(1)}
            >
              Account e Servizi
            </button>
            <button
              className={tab == 2 ? styles.btnActive : ""}
              onClick={() => setTab(2)}
            >
              Chat e Altro
            </button>
            <button
              className={tab == 3 ? styles.btnActive : ""}
              onClick={() => setTab(3)}
            >
              Cheats e Bug
            </button>
            <button
              className={tab == 4 ? styles.btnActive : ""}
              onClick={() => setTab(4)}
            >
              Discord
            </button>
            <button
              className={tab == 5 ? styles.btnActive : ""}
              onClick={() => setTab(5)}
            >
              Towny
            </button>
          </div>
          <div className={styles.content}>
            <div
              className={tab == 0 ? styles.active : styles.unactive}
              id="tab0"
            >
              <div className={styles.title}>
                <h4>
                  Sezione 1: Premesse, Regole di carattere generale/informativo
                </h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Nel momento in cui l'utente accede ai nostri servizi, tra
                    cui: server Minecraft, Discord e web è sottoposto
                    automaticamente al regolamento qui vigente e si impegna ad
                    accertarlo, rispettarlo e tenersi continuamente aggiornato
                    sugli eventuali cambiamenti.
                    <ul>
                      <li>
                        I nostri servizi sono identificabili ufficialmente dagli
                        indirizzi IP o URL presenti nel nostro sito ufficiale:
                        https://www.ragnarokmc.it
                      </li>
                      <li>
                        Il regolamento è soggetto a continui cambiamenti che
                        possono essere apportati in qualsiasi momento
                        dall'amministrazione e con validità immediata.
                      </li>
                      <li>
                        Il regolamento è accettato automaticamente non appena
                        viene effettuato un accesso ai nostri servizi (con
                        conseguente registrazione).
                      </li>
                    </ul>
                  </li>
                  <li>
                    L'utente è responsabile di tutte le azioni commesse
                    all'interno dei nostri servizi attraverso il suo account,
                    anche se queste non sono state direttamente da lui commesse.
                    <ul>
                      <li>
                        l'utente si impegna ad avere pieno controllo del proprio
                        account, attuando una serie di comportamenti e procedure
                        per tutelare l’accesso al suo account, per esempio,
                        impostando password sicure e ad astenersi dal diffondere
                        informazioni personali o nel diffondere (anche
                        prestando) il proprio account.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lo staff ha tutta l'autorità necessaria per far rispettare
                    il regolamento.
                    <ul>
                      <li>
                        Gli utenti devono collaborare con lo staff in ogni modo
                        possibile, impegnandosi a rispettare il regolamento,
                        segnalando bug e trasgressori.
                      </li>
                      <li>
                        I membri dello staff possono attribuire sanzioni
                        disciplinari e sanzioni tecniche agli utenti per
                        infrazioni del regolamento.
                      </li>
                      <li>
                        Per sanzioni "disciplinari" si intendono tutte quelle
                        azioni che portano ad un allontanamento dal server o ad
                        un divieto di utilizzo della chat, tali sanzioni possono
                        essere temporanee e permanenti in base alle diverse
                        situazioni definite dal regolamento.
                      </li>
                      <li>
                        Per sanzioni "tecniche" si intendono tutte quelle azioni
                        che non portano ad allontanamenti dal server o
                        dall'utilizzo della chat, ma rimozione di oggetti,
                        eliminazione di strutture, reset dell'account e la
                        rimozione di oggetti o privilegi acquistati nel nostro
                        store.
                      </li>
                      <li>
                        Le sanzioni tecniche possono essere accumulate in caso
                        di infrazioni multiple, in contemporanea o aggravanti;
                        invece, le sanzioni disciplinari possono essere
                        accumulate solo per un massimo di 90 giorni di ban o di
                        60 giorni di mute; in caso, un'infrazione preveda come
                        pena il ban o mute permanente verrà applicata solo tale
                        sanzione disciplinare con eventuale sanzione tecnica.
                      </li>
                      <li>
                        Lo STAFF è riconosciuto attraverso le apposite
                        targhette.
                      </li>
                      <li>
                        Lo STAFF può utilizzare i warn per avvisare/avvertire
                        ufficialmente un utente in qualsiasi situazione di
                        infrazione/i e/o comportamento/i non proprio corretto/i
                        all’interno dell’ambiente di gioco.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Tutti gli utenti hanno il diritto e il dovere di segnalare
                    allo staff eventuali bug e trasgressori del regolamento,
                    mediante l'apposita sezione sul nostro server Discord o
                    eventualmente, attraverso la presenza di appositi comandi
                    all'interno del gioco.
                    <ul>
                      <li>
                        Le segnalazioni devono essere integrate con apposito
                        materiale (foto, video, audio) e integrato con opportuna
                        descrizione scritta.
                      </li>
                      <li>
                        Le segnalazioni possono essere effettuate anche contro
                        membri dello STAFF che non rispettano il regolamento,
                        non svolgono regolarmente le loro attività e che fanno
                        abuso di potere, il tutto deve essere considerevolmente
                        dettagliato, motivato e provato.
                      </li>
                      <li>
                        Le segnalazioni vanno presentate, rispettando i canoni
                        indicati nel regolamento stesso e/o in base alle
                        indicazioni presenti nella sezione dedicata del server
                        Discord, qualora esse dovessero essere effettuate in
                        modo errato o con scarsa documentazione o dovessero
                        presentare un gran numero di errori di scrittura, tali
                        da rendere la segnalazione difficilmente comprensibile,
                        essa verrà rifiutata e scartata all’istante.
                      </li>
                      <li>
                        Per presentare una segnalazione verso un’utente o un
                        membro dello staff, non devono essere passati più di 7
                        giorni dal momento dall’accaduto, di conseguenza una
                        segnalazione presentata in ritardo verrà immediatamente
                        rifiuta e scartata. (è fatta deroga la possibilità di
                        mantenere materiale/prove “incriminanti” verso un
                        qualsiasi utente o staff fino a 30 giorni per consentire
                        di effettuare un’unica segnalazione in caso di
                        recidività in piccole infrazioni).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Tutti gli utenti hanno diritto ad effettuare un reclamo in
                    caso di sanzioni tecniche e/o disciplinari a loro carico
                    inflitte dal nostro staff.
                    <ul>
                      <li>
                        I membri dello staff, in caso di accusa o dibattito,
                        hanno l’ultima parola su tutto e su ogni situazione, in
                        caso di assenza di prove o prove ritenute non
                        sufficientemente valide.
                      </li>
                      <li>
                        I reclami devono essere effettuati attraverso l'apposita
                        sezione nel nostro server Discord seguendo le
                        indicazioni presenti e fornendo opportuna documentazione
                        scritta e visiva (foto, video); in caso di mancanza o
                        prove non ritenute sufficientemente valide, si applica
                        il punto 1.5.a del regolamento.
                      </li>
                      <li>
                        I reclami possono essere effettuati per sanzioni di tipo
                        ban con durate superiori ai 2 giorni e di tipo mute per
                        durate superiori a 12 ore e verranno presi in
                        considerazione se effettuati entro 48 ore dall'avvenuta
                        sanzione e/o sanzioni.
                      </li>
                      <li>
                        I reclami possono essere accettati o respinti da parte
                        degli amministratori responsabili a compiere tale
                        attività, le sanzioni possono subire un incremento, una
                        diminuzione o essere totalmente annullate a discrezione
                        del membro dello staff incaricato, seguendo comunque il
                        regolamento e in base alle analisi effettuate valutando
                        le motivazioni/informazioni fornite dall’utente.
                      </li>
                      <li>
                        L'esito relativo alle decisioni prese a proposito dei
                        reclami ricevuti viene pubblicato e comunicato entro 24
                        ore dall'effettuazione del reclamo.
                      </li>
                      <li>
                        In caso il reclamo venga presentato in ritardo o per
                        circostanze non descritte nel punto 1.5.c o per
                        motivazioni, prove insufficienti tali da provocare il
                        rifiuto del reclamo stesso, si addebita la sanzione
                        "reclamo" che prevede un aumento della sanzione
                        "disciplinare" precedente di 3 giorni di ban e/o 2
                        giorni di mute; in caso di non presenza di sanzione
                        disciplinare la sanzione "reclamo" prevede 1 giorno di
                        ban; la sanzione reclamo viene applicata anche in caso
                        di reclami aperti per altri e/o per perdita di tempo
                        allo staff con possibili aggravanti.
                      </li>
                      <li>
                        Non è possibile presentare reclami per i singoli warn o
                        per sanzioni di tipo ban e mute derivate dai warn stessi
                        (per esempio dopo il terzo warn c'è il ban temporaneo).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lo staff non è responsabile di perdita di dati, truffe e/o
                    divulgazione di informazioni personali.
                    <ul>
                      <li>
                        Nessuno all’interno dello staff ti chiederà mai
                        informazioni personali, come codice fiscale, indirizzo,
                        carte di credito, password o qualsiasi altra
                        informazione riservata, per tanto diffida da chi ti
                        chiede tali informazioni.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Gli utenti sono sottoposti ad una serie di aggravanti in
                    caso di infrazioni della stessa tipologia ripetute in un
                    breve periodo di tempo o per altri motivi validi, le
                    aggravanti comportano un aumento delle sanzioni verso il
                    trasgressore e dipendono da una combinazione delle regole.
                    <ul>
                      <li>
                        In caso di recidività su una stessa infrazione la stessa
                        avrà un incremento del 100% (il doppio) in termini di
                        durata temporale della sanzione disciplinare precedente,
                        per un massimo di 4 incrementi in un anno, alla quinta
                        infrazione scatterà il ban permanente.
                      </li>

                      <li>
                        Al passare di un anno dalla data dell’ultima infrazione,
                        il conteggio delle aggravanti per recidività nella
                        stessa infrazione sarà azzerato.
                      </li>
                      <li>
                        Oltre alle aggravanti esistono anche delle attenuanti
                        che in base alla situazione valutata dall’amministratore
                        incaricato potrebbero ridurre la durata della o delle
                        sanzioni a sua discrezione.
                      </li>
                      <li>
                        I fondatori del server possono a loro totale discrezione
                        concedere la grazia ad un giocatore che ha commesso una
                        o più infrazioni del regolamento.
                      </li>
                      <li>
                        Sono da considerarsi “aggravanti” tutte le azioni in
                        contrasto con il regolamento rivolte verso lo staff e/o
                        il server, comportando: un aumento del 50% (eventuale
                        approssimazione per eccesso) della durata totale (somma)
                        delle sanzioni disciplinari per la quale si sta operando
                        (e per la quale l’utente è coinvolto).
                      </li>
                      <li>
                        I membri dello staff possono applicare degli
                        avvisi/avvertimenti veri e propri (warn) in caso di
                        infrazioni di bassa gravità o per altri motivi,
                        raggiungere in 30 giorni un numero superiore a 3
                        avvertimenti comporterà un ban temporaneo dal server che
                        può variare da 3 a 14 giorni (scaduti i 30 giorni o
                        applicato il ban temporaneo il conteggio sarà
                        automaticamente azzerato).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Nel caso non sia presente una regola ben specifica per una
                    determinata situazione vige il buon senso dell’utente e ogni
                    azione considerata dannosa per il server o per gli altri
                    utenti o che mette l’utente in questione in una situazione
                    di vantaggio eccessivo (per un bug o altre problematiche)
                    sarà sanzionata a discrezione dello staff secondo le linee
                    guida dettate dal regolamento.
                  </li>
                  <li>
                    Ai sensi del punto 1.2.b, un membro dello staff con ruolo di
                    amministratore o fondatore, può implementare regole
                    aggiuntive o modificare quelle esistenti, con una validità
                    temporanea in singole modalità di gioco, discord o in tutti
                    i servizi, qualora sia necessario; tali sanzioni possono
                    essere solo più restrittive di quelle già presenti nel
                    regolamento e possono essere comunicate anche con un
                    annuncio formale su discord o sul gioco stesso
                    <ul>
                      <li>
                        Le sezioni da 1 a 4 (comprese) hanno validità su tutti i
                        servizi di gioco offerti, discord incluso dove
                        possibile, inoltre la sezione 5 è dedicata in modo
                        generico al server discord e ogni sezione dalla 5 in poi
                        è riservata solo ed esclusivamente alla modalità di
                        gioco o servizio a cui è dedicata, salvo diversa
                        indicazione; pertanto, le sezioni dedicate ereditano le
                        sezioni da 1 a 5.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={tab == 1 ? styles.active : styles.unactive}
              id="tab1"
            >
              <div className={styles.title}>
                <h4>Sezione 2: Acquisti online, Sicurezza, Account</h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Effettuando acquisti dal nostro store ufficiale:
                    https://store.ragnarokmc.it stai effettuando una donazione
                    per consentire al server di rimanere funzionante e per
                    permettere la sua crescita ed espansione, aiutando i
                    fondatori a sostenere le spese economiche; in cambio del tuo
                    “gesto” ti viene fornito un riconoscimento in gioco in base
                    alla donazione effettuata.
                    <ul>
                      <li>
                        I vantaggi che ti vengono offerti in cambio della tua
                        donazione come oggetti o privilegi speciali possono
                        essere revocati in qualsiasi momento da parte dello
                        staff, parzialmente o totalmente in caso di infrazioni
                        del regolamento.
                      </li>
                      <li>
                        Essere identificato come “VIP” (utente privilegiato) o
                        con qualsiasi altro grado superiore ad un utente normale
                        non ti esonera dal ricevere sanzioni da parte dello
                        staff o dell’amministrazione.
                      </li>
                      <li>
                        Tentare di eseguire chargeback (richiesta di rimborso
                        forzato) è assolutamente vietato l'amministrazione di
                        RagnarokMC, si riserva il diritto di modificare o
                        sospendere il pacchetto acquistato e/o limitare
                        l'accesso alla piattaforma di gioco, comporta: una
                        sanzione disciplinare di sospensione permanente
                        dell’account e rimozione dei vantaggi ottenuti.
                      </li>
                      <li>
                        In caso di chiusa temporanea o permanente di uno o di
                        più dei nostri servizi (anche tutti), gli utenti NON
                        riceveranno nessun rimborso in caso avessero effettuato
                        (anche un istante prima) una o più donazioni.
                      </li>
                      <li>
                        In tutti i casi descritti nel punto 2.1.d, e nel caso (a
                        discrezione dell’amministrazione) di un reset
                        (ripristino totale o parziale) di una o più modalità e/o
                        servizi, tutti gli stati privilegiati, VIP e altri (i
                        ruoli STAFF non sono da considerarsi) verranno
                        definitivamente revocati e considerati come mai
                        avvenuti.
                      </li>
                      <li>
                        Un utente premium che cambia nome ha diritto ad avere
                        sul suo nuovo account i privilegi acquistati sul account
                        col vecchio nome, valido solo se questi sono a durata
                        permanente, in caso contrario non otterrà nulla.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Effettuare scambi di oggetti o “vendere” oggetti o progressi
                    di gioco ad altri utenti in cambio di denaro reale non è
                    permesso, neanche se questo verrà speso e utilizzato per il
                    network stesso, salvo diversa indicazione da parte di un
                    amministratore o fondatore, comporta: una sanzione
                    disciplinare di sospensione permanente dell’account di
                    gioco.
                    <ul>
                      <li>
                        Effettuare azioni di qualsiasi tipo allo scopo di
                        aggirare, imbrogliare, truffare un qualsiasi utente,
                        salvo modalità in cui è consentito farlo, comporta: una
                        sanzione disciplinare di sospensione temporanea
                        dell’account di gioco da 1 a 3 giorni e in caso di
                        “raggiro” riuscito, una sanzione tecnica di rimozione di
                        tutti i vantaggi ottenuti attraverso lo svolgimento di
                        esso.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Per effettuare una candidatura staff per il nostro network è
                    necessario possedere un account di gioco PREMIUM (acquistato
                    regolarmente), avere almeno 14 anni di età allo svolgimento
                    del test scritto e possedere un buon microfono situato in
                    una zona tranquilla dove poter parlare e fornire il giusto
                    supporto agli altri utenti, inoltre è necessario non avere a
                    carico al momento della candidatura sanzioni disciplinari e
                    non avere avuto sanzioni di durata superiore ai 10 giorni
                    nei sei mesi precedenti, inoltre è necessario avere un
                    account registrato nel server da almeno 6 mesi. Effettuare
                    una candidatura senza avere i requisiti descritti in questo
                    punto, comporta: un avvertimento (warn) e l’impossibilità di
                    effettuare un’ulteriore candidatura per 1 mese dalla data in
                    questione.
                    <ul>
                      <li>
                        L’esito delle candidature avverrà entro 7 giorni e solo
                        in caso di esito positivo verrà successivamente
                        concordato il colloquio orale e/o pratico, inoltre,
                        contattare continuamente lo staff in merito all’esito
                        della propria candidatura comporterà la sanzione del
                        punto 2.3, tuttavia dopo 7 giorni è possibile richiedere
                        tramite apposita sezione su discord l’esito della
                        propria prova scritta.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Una persona può essere in possesso di un solo account di
                    gioco, è inoltre tassativamente vietato condividere e/o
                    cedere ad altri il proprio account per ragioni di sicurezza.
                    L’infrazione comporta: la sospensione temporanea
                    dell’account da 7 a 21 giorni salvo aggravanti e attenuanti.
                    <ul>
                      <li>
                        Una persona non può creare più account con lo scopo di
                        ottenere più ricompense giornaliere o con lo scopo di
                        ottenere vantaggi in generale. L’infrazione comporta:
                        sospensione permanente dell’account doppione e warn o
                        possibile sospensione temporanea dell’account principale
                        di 1 giorno in base alla situazione.
                      </li>
                      <li>
                        In caso di parentela è possibile possedere più account
                        (uno per persona) ma sarà necessaria una verifica su
                        discord da parte di uno staffer, richiedibile sul server
                        discord nell’apposita sezione.
                      </li>
                      <li>
                        è assolutamente vietato creare altri account con lo
                        scopo di aggirare una sanzione di qualsiasi tipo,
                        comporta: sospensione permanente dell’account doppione e
                        aumento del 100% della pena nel account precedentemente
                        sanzionato (in caso di sanzione temporanea).
                      </li>
                    </ul>
                  </li>
                  <li>
                    L’account di un’utente è strettamente personale ed è
                    assolutamente vietato cercare di impossessarsi di un account
                    non proprio per la quale non si ha il diritto di utilizzo.
                    L’infrazione comporta: una sanzione disciplinare di
                    sospensione dell’account del colpevole per 2 mesi (60
                    giorni).
                    <ul>
                      <li>
                        In caso il furto dell’account sia rivolto ad un account
                        di tipo STAFF L’infrazione comporta: sospensione
                        permanente e definitiva da tutti i nostri servizi per
                        l’account del trasgressore.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cercare di violare i nostri sistemi informatici di ogni
                    tipo, con bug pesanti, exploit, ddos, spuffing, sniffing e
                    altre tecniche di hackeraggio e/o comunque con l’intento
                    generale di griffare/danneggiare il server, rubare dati e
                    informazioni sensibili e compromettere in generale
                    l’integrità e la sicurezza dei nostri servizi comporta:
                    sospensione permanente e definitiva di tutti gli account
                    collegati da tutti i nostri servizi.
                    <ul>
                      <li>
                        Una grave infrazione del punto 2.6, quale diffusione di
                        dati in rete, crash del server e accesso alle nostre
                        strutture informatiche non autorizzato, nonché frode o
                        altre infrazioni simili potrebbero essere denunciate e
                        perseguite sotto un profilo legale.
                      </li>
                    </ul>
                  </li>
                  <li>
                    L’accesso al server con nomi di account che contengono
                    parole o parte di esse offensive, volgari o blasfeme non è
                    consentita. L’infrazione comporta: invito warn a cambiarsi
                    il nome dell’account salvo aggravanti, in caso di
                    impossibilità nel cambiarsi il nome ci sarà la sospensione
                    permanente dell'account di gioco.
                    <ul>
                      <li>
                        Non è possibile entrare nel server con nomi molto simili
                        a quelli degli staffer. L’infrazione comporta: invito
                        warn a cambiarsi il nome salvo aggravanti.
                      </li>
                      <li>
                        Non è consentito fingersi staffer o creare un account
                        con nome simile ad uno staffer per facilitare un
                        possibile imbroglio. L’infrazione comporta: invito warn
                        a cambiarsi il nome e sospensione temporanea
                        dell’account da 1 a 7 giorni.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Un utente che ha raggiunto una qualsiasi qualifica di tipo
                    STAFF (helper, builder, moderatore, admin, ecc) non gode di
                    posizione privilegiata; infatti, anch’esso è tenuto a
                    rispettare il regolamento e ha il dovere di aiutare ogni
                    utente qualora ce ne sia la necessità e qualora ne sia in
                    grado in base alla problematica presentata e ha il dovere di
                    far rispettare il regolamento mantenendo una posizione
                    neutrale verso tutti.
                    <ul>
                      liUno staffer che non rispetta il punto 2.8 è passibile di
                      interruzione temporanea o permanente dalle sue attività
                      nello staff, nonché la retrocessione di grado e qualora ce
                      ne siano i presupposti, la revoca definitiva dai membri
                      dello staff con conseguenti sanzioni tecniche e/o
                      disciplinari.
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={tab == 2 ? styles.active : styles.unactive}
              id="tab2"
            >
              <div className={styles.title}>
                <h4>Sezione 3: Chat e comportamento generale</h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Tutti gli utenti sono invitati a tenere un comportamento
                    educato e civile con chiunque all’interno del network
                    attraverso ogni forma di comunicazione (chat, cartelli di
                    Minecraft, libri di Minecraft, ridenominazione degli
                    oggetti, Discord ecc); sono considerate come infrazioni
                    anche tutte quelle cose che vengono successivamente
                    giustificate come “uno scherzo” o "non era rivolta a te"
                    senza nessuna attenuante.
                    <ul>
                      <li>
                        è vietato offendere e insultare in qualsiasi modo
                        possibile; l’infrazione comporta: mute da 15 minuti a 10
                        giorni e/o ban da 12 ore a 5 giorni.
                      </li>
                      <li>
                        è vietato minacciare in ogni modo possibile;
                        l’infrazione comporta: mute da 6 ore a mute di 21 giorni
                        e/o ban da 1 a 10 giorni salvo aggravanti.
                      </li>
                      <li>
                        è vietato inviare troppi messaggi uguali o simili in
                        breve periodo di tempo (flood); l’infrazione comporta:
                        mute da 15 minuti a 1 giorno.
                      </li>
                      <li>
                        è vietato inviare messaggi con parole scritte in
                        maiuscolo (CAPS) è al massimo consentito l’utilizzo di
                        una parola caps per messaggio (formato da più parole);
                        l’infrazione comporta: un warn e un possibile mute da 15
                        minuti a 1 giorno.
                      </li>
                      <li>
                        è vietato scrivere messaggi con contenuti politici,
                        razzisti, sessuali, discriminatori, religiosi e
                        blasfemi; l’infrazione comporta: mute da 30 minuti a 5
                        giorni e/o ban da 12 ore a ban di 5 giorni.
                      </li>
                      <li>
                        è vietato rivelare informazioni/spoiler su film, giochi,
                        puntate televisive e simili l’infrazione comporta: mute
                        da 1 ora a 7 giorni e/o ban da 1 a 5 giorni.
                      </li>
                      <li>
                        Esempio di aggravante: Infrazioni sezione 3.1 e
                        sottostanti in chat pubblica; esempio di attenuante:
                        Insulti o comportamento manifestato in chat privata.
                      </li>
                      <li>
                        Per infrazioni del punto 3.1 e dei suoi sottopunti
                        avvenute in chat della town, nation, allience si
                        applicherà la sanzione come se essa sia avvenuta in chat
                        privata.
                      </li>
                      <li>
                        Numerose sanzioni di tipi mute per infrazioni del punto
                        3.1 e dei suoi sottopunti può portare alla ricezione un
                        warn.
                      </li>
                    </ul>
                  </li>
                  <li>
                    L’utilizzo improprio di comandi per la segnalazione dei
                    giocatori o richieste di supporto all’interno del gioco è
                    proibito; l’infrazione comporta: un warn fino ad un ban di 2
                    giorni.
                  </li>
                  <li>
                    Mantenere un comportamento arrogante, aggressivo e/o
                    scarsamente collaborativo con lo staff; comporta: un warn e
                    un mute da 1 ora a 2 giorni fino ad arrivare ad un possibile
                    ban di 1 o 2 giorni.
                    <ul>
                      <li>
                        La perdita di tempo allo staff comporta: da un warn a un
                        ban di 2 giorni.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Non è consentito impostarsi il colore del nome dell’account
                    (se si ha il permesso di farlo) con colori o formati che ne
                    rendono difficile la comprensione; l’infrazione comporta: un
                    warn e/o un ban di 1 giorno.
                  </li>
                  <li>
                    Non è consentito divulgare informazioni commerciali di altri
                    servizi, fare pubblicità, inviare indirizzi di altri network
                    (SPAM); l’infrazione comporta: un mute da 5 a 45 giorni e/o
                    un ban da 2 a 30 giorni.
                    <ul>
                      <li>
                        La presenza di aggravanti al punto 3.5 (ne basta una
                        sola) comporta il ban permanente.
                      </li>
                    </ul>
                  </li>
                  <li>
                    L’invio di indirizzi web esterni al network o sponsorizzare
                    video live e non con l’utilizzo di qualsiasi social e/o
                    piattaforma è vietato; l’infrazione comporta: un mute da 1 a
                    30 giorni e/o un ban da 1 a 7 giorni.
                  </li>
                  <li>
                    Spawn-killare o Tp-killare in qualsiasi modalità/occasione,
                    salvo autorizzazione, è vietato e l’infrazione comporta: un
                    warn e/o un ban di 1 giorno (con possibile incremento) per
                    tutti i responsabili.
                    <ul>
                      <li>
                        Fare teaming dove non è previsto è vietato e
                        l’infrazione comporta: un ban di 1 giorno.
                      </li>
                    </ul>
                  </li>
                  <li>
                    è vietato costruire strutture offensive, nudiste o
                    discriminatorie; l’infrazione comporta: un warn o un ban di
                    1 giorno a seconda dei casi e rimozione della struttura.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={tab == 3 ? styles.active : styles.unactive}
              id="tab3"
            >
              <div className={styles.title}>
                <h4>Sezione 4: Cheats e bug abuse </h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Utilizzare programmi/software che modificano i normali
                    comandi, parametri di minecraft, quali client, autoclicker,
                    texture pack e ogni forma di cheat che consenta di ottenere
                    un vantaggio in gioco è tassativamente vietata, l’utente è
                    invitato a segnalare ogni trasgressore per evitare di
                    esserne complice e quindi di subire una sanzione.
                    <ul>
                      <li>
                        L’utilizzo di hacked client e/o xray è vietato;
                        l’infrazione comporta: un ban di 7 giorni se cheats
                        evidenti, ban di 5 giorni se l’utente ammette.
                      </li>
                      <li>
                        L’utilizzo di ghost, injection, external client e
                        autocliker/macro è vietato; l’infrazione comporta: un
                        ban di 10 giorni se cheats evidenti, ban di 7 giorni se
                        l’utente ammette.
                      </li>
                      <li>
                        Farsi fare un controllo cheats (anche solo con il
                        tentativo di bypassare il controllo stesso) aumenta il
                        ban in caso di cheats trovati di 3 giorni.
                      </li>
                      <li>
                        L’utilizzo delle seguenti mod e/o client è da
                        considerarsi vietato; pertanto, in caso l’utente ne stia
                        facendo uso sarà sanzionabile secondo il punto “4.1.a”
                        con motivazione “Utilizzo di client/mod non ammesse”.
                        NON AMMESSE: Labymod, Bridge mod, batMod, Lithium
                        client, Geyser mod, GodBridge, ModMenu, Voxel Map,
                        Xaeros Minimap, Pixel Client, Linematica, Pactify
                        Client, Ice Client, Astral Client e Mouse Tweaks.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lo staff ha il dovere qualora ce ne siano i presupposti di
                    effettuare dei controlli cheats tramite la piattaforma di
                    condivisione schermo AnyDesk al fine di garantire il
                    rispetto del punto 4.1 e la correttezza di gioco.
                    <ul>
                      <li>
                        Con il termine “qualora ce ne siano i presupposti” del
                        punto 4.2 si intende, in tutti i casi ci sia la
                        possibilità (grazie a evidente cheating, segnalazioni
                        degli anticheat o degli altri utenti) che l’utente stia
                        imbrogliando.
                      </li>
                      <li>
                        I controlli vengono eseguiti con assoluta riservatezza
                        dei dati personali e senza divulgazione a terzi degli
                        stessi, inoltre durante il controllo potrebbero essere
                        installati dei tool anticheats per terminare velocemente
                        il controllo (tool consentiti: Avenge, Paladin, Echo,
                        Golden, Proccess Hacker, BLSquad, Ocean) tutto
                        rispettando la privacy dell’utente.
                      </li>
                      <li>
                        L’utente ha il diritto di rifiutare un controllo hack
                        per qualsiasi validissima ragione ma dovrà essere
                        consapevole che tale rifiuto comporta: un ban di 10
                        giorni dal server salvo aggravanti.
                      </li>
                      <li>
                        Durante lo svolgimento del controllo (al momento della
                        richiesta di controllo da parte dello staff) se esso si
                        disconnette per una qualsiasi ragione esso sarà ritenuto
                        sanzionabile secondo il punto 4.2.c con motivazione
                        “Disconnessione durante controllo cheats”.
                      </li>
                      <li>
                        Compromettere i dati pochi istanti prima di un controllo
                        (10 minuti prima) comprende tutte le azioni di ultima
                        modifica del cestino, premere tasti a caso o mouse per
                        ostacolare il controllo, riavvio dei processi, impedire
                        per qualche motivo l’utilizzo/avvio dei tool citati nel
                        punto 4.2.2 anche per motivi non conosciuti dall’utente
                        stesso comporta: un ban di 10 giorni per “Impossibilità
                        di controllo cheats per compromissione dei dati”.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Registrare un video e pubblicarlo su piattaforme social
                    senza autorizzazione di un controllo cheats comporta: un ban
                    da 5 a 7 giorni.
                    <ul>
                      <li>
                        è comunque consentito fare una registrazione del
                        controllo per tutelarsi in caso di controllo non
                        eseguito secondo gli standard di privacy ma senza
                        diffondere il video.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Sfruttare un qualsiasi bug comporta: un ban da 3 a 15 giorni
                    e rimozione dei vantaggi ottenuti (o in base alla situazione
                    reset completo dell’account di gioco).
                    <ul>
                      <li>
                        Nel caso in cui il bug fosse ritenuto di particolare e
                        considerata gravità comporta: una sanzione disciplinare
                        di ban permanente.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Non segnalare tempestivamente un bug o un cheater equivale
                    ad esserne complici e comporta: un ban da 3 a 30 giorni (o
                    possibile applicazione del punto 4.4.a) e rimozione dei
                    vantaggi ottenuti (o in base alla situazione reset completo
                    dell’account di gioco).
                    <ul>
                      <li>
                        Essere a conoscenza di un qualsiasi bug all’interno del
                        server e senza farne uso, si decide di diffonderlo,
                        spiegandolo ad altri utenti comporta: una sanzione
                        disciplinare di ban, con durata variante da 15 a 30
                        giorni (o possibile applicazione del punto 4.4.a) e
                        sanzione tecnica di rimozione dei vantaggi ottenuti (o
                        in base alla situazione reset completo dell’account di
                        gioco).
                      </li>
                      <li>
                        Essere venuti a conoscenza da un utente di un bug e
                        oltre ad utilizzarlo per sé stessi si condivide con
                        altri, comporta un aggravante che comprende un aumento
                        del 50% (eventuale approssimazione per eccesso) della
                        sanzione disciplinare abbinata.
                      </li>
                    </ul>
                  </li>
                  <li>
                    è assolutamente vietato costruire nelle modalità, macchine
                    di redstone con lo scopo di far laggare o comunque che
                    provochino un calo di prestazioni al server, salvo diversa
                    indicazione da parte dello staff; l’infrazione comporta: un
                    warn fino ad arrivare ad un ban permanente e rimozione dei
                    vantaggi ottenuti (o in base alla situazione reset completo
                    dell’account di gioco).
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={tab == 4 ? styles.active : styles.unactive}
              id="tab4"
            >
              <div className={styles.title}>
                <h4>Sezione 5: Server Discord</h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Tutte le regole dei punti precedenti, specialmente sezione 1
                    e 3 sono applicabili al server Discord.
                    <ul>
                      <li>
                        Le sanzioni inerenti al server Discord sono a completa
                        discrezione dello staff.
                      </li>
                    </ul>
                  </li>
                  <li>
                    è assolutamente vietato pingare tutto lo staff in sezioni
                    random, se si ha bisogno di assistenza si apre un ticket.
                  </li>
                  <li>
                    è assolutamente vietato formulare accuse non vere nei
                    confronti di altri player se non in possesso di prove certe
                    (foto, video e simili).
                  </li>
                  <li>
                    è vietato menzionare lo staff all’interno del ticket, in
                    quanto una volta aperto, gli staffer disponibili vengono già
                    avvisati.
                  </li>
                  <li>
                    è vietato contattare gli staffer in privato per ricevere
                    assistenza.
                  </li>
                  <li>
                    tutti i ticket verranno esaminati solo se scritti con un
                    linguaggio adeguato, in caso contrario saranno ignorati e
                    verranno presi possibili sanzioni disciplinari.
                  </li>
                  <li>
                    è vietato abusare delle menzioni e/o infastidire gli utenti
                    spostandosi tra i canali vocali o facendo rumore.
                  </li>
                  <li>
                    Gli utenti sono obbligati ad utilizzare i canali in base
                    alla motivazione per cui sono stati creati.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={tab == 5 ? styles.active : styles.unactive}
              id="tab5"
            >
              <div className={styles.title}>
                <h4>Sezione 6: Modalità Towny</h4>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    Tutti i punti delle sezioni da 1 a 4 si applicano a questa
                    modalità
                    <ul>
                      <li>
                        I punti previsti in questa sezione valgono solo per la
                        modalità Towny, salvo diversa indicazione.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Non è consentito tp killare i giocatori usando trappole di
                    vario genere, l'infrazione comporta un warn fino ad una
                    sospensione temporanea di 1 giorno.
                  </li>
                  <li>
                    Non è consentito piazzare blocchi di qualsiasi tipo a
                    distanza di 2 chunk da una città in cui non si è
                    partecipanti, l'infrazione comporta un warn e rimozione
                    immediata dei blocchi piazzati.
                    <ul>
                      <li>
                        Il punto 7.3 non comporta nessuna sanzione ma solamente
                        se le due città vicine sono d'accordo sul piazzare
                        blocchi vicini ai propri chunk.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Truffare i player (scam) non è consentito, è prevista
                    un'aggravante se la truffa è stata resa possibile tramite i
                    comandi /ah e /trade, l'infrazione comporta una sospensione
                    temporanea di 6 ore fino a 5 giorni e ripristino dei
                    vantaggi ottenuti.
                    <ul>
                      <li>
                        Un player che non utilizza i sistemi forniti dal gioco,
                        come lo /trade e lo /ah può essere sanzionato con un
                        warn per non avere utilizzato le risorse a sua
                        disposizione per evitare una possibile truffa
                      </li>
                    </ul>
                  </li>
                  <li>
                    Chiunque fornisce informazioni non veritiere ad un'utente
                    inesperto per trollarlo e/o a non aiutarlo a progredire
                    verrà sanzionato con un warn e con un possibile mute da 15 a
                    45 minuti.
                    <ul>
                      <li>
                        Un giocatore inesperto è un giocatore con un tempo di
                        gioco effettivo inferiore alle 24 ore
                      </li>
                    </ul>
                  </li>
                  <li>
                    Griffare o uccidere mob di altri giocatori non è consentito
                    vicino a 2 chunk da una town, l'infrazione comporta un warn
                    fino ad arrivare ad una sospensione temporanea dell'account
                    di gioco per 5 giorni.
                    <ul>
                      <li>
                        Un'utente che imposta dei permessi sulla town ad un
                        altro giocatore si assume tutta la responsabilità, in
                        caso di grief , mob uccisi ecc
                      </li>
                    </ul>
                  </li>
                  <li>
                    Sono vietate qualsiasi tipo di end farm, l'infrazione
                    comporta un warn e rimozione completa della farm.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Regolamento;
