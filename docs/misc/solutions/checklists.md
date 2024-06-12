---
sidebar_position: 3
---

# Sjekklister for inspeksjon før bruk

Lag sjekklister digitalt for bedre kontroll over både gjennomføring og status.

Ved å skanne en QR-kode eller NFC-tag, kan brukeren få tilgang til en relevant sjekkliste. Denne fungerer som en praktisk huskeliste for inspeksjon før bruk. Etter at inspeksjonen er gjennomført, blir svarene automatisk loggført.

import checklistexample from '/img/pre-use-inspection-checklists/checklistexample.png';

<img src={checklistexample} style={{width:800}} />

### Opprett sjekklister
I løsningen ligger sjekklister under "generelle innstillinger".

Alternative spørsmål og felter:
* Spørsmål og svar (radioknapper).
* Opplasting av dokument eller bilde (fil).
* Kommentarfelt (kommentar).

Et par nøkkelfunksjoner verdt å merke seg:
* Kopier: Bruk "duplikat" for å kopiere.
* Påkrevd spørsmål: Bruk "er nødvendig" til å styre om delen må besvares eller ikke for å fullføre.

Til slutt er det et overordnet spørsmål om utstyret bør inspiseres nærmere. Dette spørsmålet er statisk og kan ikke endres.

import createchecklist from '/img/pre-use-inspection-checklists/createchecklist.png';

<img src={createchecklist} style={{width:800}} />

## Lag spørsmål og svar

Spørsmål og svar lages ved hjelp av radioknapper. For eksempel kan dere lage sjekkpunkter med tre alternativer: "OK", "Avvik" og "Ikke relevant".

import createchecklistitems from '/img/pre-use-inspection-checklists/createchecklistitems.png';

<img src={createchecklistitems} style={{width:800}} />

## Legg til muligheten for å laste opp dokumenter og bilder

Gi mulighet for å laste opp dokumenter eller bilder ved å legge til spørsmålstypen fil. Under skjemainnstillinger velger du deretter enten kilde kamera, fil eller begge deler. Husk også å velge om opplasting skal være obligatorisk eller frivillig ved å sette "er nødvendig" på eller av.

PS: De fleste smarttelefoner støtter alltid opplasting av bildet også ved valg "fil". 

import checklistaddpictures from '/img/pre-use-inspection-checklists/checklistaddpictures.png';

<img src={checklistaddpictures} style={{width:800}} />

## Legg til felt for kommentarer

Til slutt kan det være nyttig å hente inn eventuelle kommentarer, spørsmålstype kommentar. Det kan være fornuftig å sette denne til et frivillig felt ved å sette feltet "er nødvendig" til av.

## For forhåndsvisning
Se fanen "test skjema".

### Knytt sjekkliste til arbeidsutstyr

Knytning til arbeidsutstyr gjør du via modell. Under fanen sjekkliste kan du velge aktuell sjekkliste. Når du knytter en sjekkliste til modell, vil sjekklisten automatisk være knyttet opp mot alt utstyr av denne typen.

import checklisttomodel from '/img/pre-use-inspection-checklists/checklisttomodel.png';

<img src={checklisttomodel} style={{width:800}} />

### Finn logg over utførte inspeksjoner
Detaljene finner du loggført på det enkelte arbeidsutstyr under fanen "daglig kontroll". Sjekk om maskinen er kontrollert og se detaljer om siste inspeksjon.

import checklistlog from '/img/pre-use-inspection-checklists/checklistlog.png';

<img src={checklistlog} style={{width:800}} />

## Lykke til!

For ytterligere detaljer eller spørsmål ta kontakt med Tom Freddy på tfb@digiquip.no / +47 45 48 85 25, eller book et møte med den du vil fra teamet [book et møte](https://digiquip.no/about)