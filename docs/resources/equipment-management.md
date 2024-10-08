---
sidebar_position: 3
---

# Administrasjon av maskiner og utstyr

## Modeller

Innstillinger, opplæringsmateriell, brukermanualer og sjekklister ligger på modellnivå.

:::note[Eksempel, lage sjekklister]

Hvorfor administrasjon av modeller? En bedrift har 1000 maskiner fordelt på 100 modeller. Hvor lang tid tar det å få på plass sjekklister for alle disse? Med DigiQuip lager bedriften digitale sjekklister som passer modellen, dvs. maks. 100 sjekklister. Sjekklistene blir automatisk tilgjengelig for samtlige 1000 maskiner. Dette er åpenbart tidsbesparende fremfor å lage for hver maskin eller produsere opp 1000 sjekklister på papir.

:::

## Opprett modeller og legg til arbeidsutstyr

Legg til maskiner manuelt, vha integrasjoner eller import.

**Manuelt**

- Steg 1: Legg til modell (maskintype). Gå til "modeller>modeller og detaljer" og velg "legg til". Nå kan du søke opp modellen fra modellregisteret og legge til. Innhold som brukermanual og opplæringsinnhold følger automatisk med (alltid oppdatert). Dersom modellen ikke finnes i modellregisteret, opprett egen modell.

import addmodels from '/img/resources-FAQ/addmodels.png';

<img src={addmodels} style={{width:800}} />

- Steg 2: Legg til maskiner og utstyr, "maskiner og utstyr > liste".

import addequipment from '/img/resources-FAQ/addequipment.png';

<img src={addequipment} style={{width:800}} />

**Integrasjon**
Maskiner kan hentes inn fra Maskinregisteret eller andre integrasjoner. I tilfelle blir både modeller og utstyr automatisk opprettet.

**Import**
Import gjøres under "maskiner og utstyr > liste". Opprett csv eller excel-ark og inkluder merke, modell, internnummer og serienummer. Last deretter opp filen (csv eller excel), se knappen "import". Opplastingen kan ta noe tid avhengig av antall maskiner og modeller som allerede finnes. Med denne metoden trenger du ikke å opprette modeller, dette gjøres automatisk. Merk at serienummer må være unikt.

:::tip[Husk!]

Riktig navngivning er viktig. Dersom merkevaren for eksempel er skrevet både som Caterpillar, Cater og Catterpillar vil disse bli opprettet som tre ulike merker.

:::

## Innstillinger

Innstillinger for om  sakkyndig kontroll, inspeksjon før bruk og utstyrsspesifikk opplæring er påkrevd gjøres på modellnivå, "modeller > liste" og valgt modell under fanen "innstillinger". Disse innstillingene styrer også hva som presenteres på hver maskinside (ref. bilde under), dersom for eksempel inspeksjon før bruk er unødvendig kan det fjernes.

import ernex1603closed from '/img/resources-FAQ/ernex1603closed.png';

<img src={ernex1603closed} style={{width:250}} />

## QR-koder og NFC-tagger

For å gjøre det enkelt for fagarbeiderne og andre ute i felt, sett på QR-koder eller NFC-tagger. På den måten blir det enkelt å få tilgang til informasjon om utstyret.

For kobling av QR-koder og NFC-tagger, anbefaler vi at dere gjør merking og kobling i en runde. Finn arbeidsutstyret og fest merket, deretter velger dere "tilordne QR/NFC kode", søker opp intern eller serienummer og skann til slutt merket. Det er ingen begrensning på hvor mange merker som kan kobles til et utstyr. For eksempel for en større maskin, kan det være en fordel å ha flere merker, både utvendig og innvendig.

import connectidentifier from '/img/resources-FAQ/connectidentifier.png';

<img src={connectidentifier} style={{width:800}} />

## Integrasjoner

For å hente inn maskiner fra Maskinregisteret, send e-post til post@sentralregisteret.no, og be om API-detaljer for dine maskiner. Dette er en kostnadsfri tjeneste. Detaljene legger dere inn i DigiQuip under generelle innstillinger > integrasjoner eller send oss en e-post for hjelp. Kun "administrator" har tilgang til disse sidene.

En god andel av kundene våre har skreddersydde integrasjoner, ta kontakt for å avtale nærmere.

# Lykke til!

For ytterligere detaljer eller spørsmål ta kontakt med din kontaktperson eller book et møte med noen i teamet vårt, [book et møte](https://digiquip.no/about). Du kan også sende oss en e-post på support@digiquip.no.