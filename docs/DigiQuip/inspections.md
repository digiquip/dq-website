---
sidebar_position: 7
---

# Sakkyndig kontroll#

I henhold til forskrift om utførelse av arbeid [kapittel 13](https://lovdata.no/dokument/SF/forskrift/2011-12-06-1357/KAPITTEL_3-4#%C2%A713-4), er det en rekke arbeidsutstyr som skal kontrolleres årlig med det formål at det skal være fullt forsvarlig å bruke det.  



Med DigiQuip får maskineiere en enkel og effektiv måte å gjennomføre og administrere sakkyndige kontroller, som sikrer at deres maskiner er trygge i bruk og at de overholder gjeldende lovkrav.


:::note[Hvorfor er dette viktig?]
- 	Sikkerhet: Hensikten med sakkyndig kontroll er å sikre at maskiner og utstyr er trygge å bruke. Feil eller mangler som oppdages og rettes opp, kan forebygge ulykker og bidra til et tryggere arbeidsmiljø.
- 	Overholdelse av forskrifter: Arbeidstilsynet krever at visse typer arbeidsutstyr underlegges sakkyndig kontroll. DigiQuip hjelper med å sikre at alle forskrifter følges, og at dokumentasjonen er lett tilgjengelig ved kontroll fra myndighetene.
- 	Effektivitet: DigiQuip forenkler prosessen med å gjennomføre kontroller, registrere avvik og planlegge fremtidige kontroller, noe som sparer tid og ressurser.

:::
 
import startinspection from '/img/workequipment/Startinspection.png';

<img src={startinspection} style={{ float: 'right', width: 250, marginLeft: 20 }} />

### Gjennomfør sakkyndig kontroll: 

- For å starte en kontroll, skann QR-koden på utstyret.
- Velg **"Start inspeksjon**"
- Registrer eventuelle feil med bilder og kommentarer.
- Sjekk at **"Sist kontroll"** og **"Neste kontroll"** dato er korrekt.
- Legg til timeteller **(Obligatorisk)** 
- Velg bruk anbefalt **(JA/Nei)** 
<font color="red">Merk!</font> Bruk anbefalt er satt til **(Nei)** som standard.
- **Ferdigstilt** inspeksjon.


### Start etterkontroll:

Dersom det ble registrert avvik under kontrollen, kan du gjennomføre en etterkontroll på den samme kontrollen.

import deviationcheck from '/img/workequipment/deviationcheck.png';

<img src={deviationcheck} style={{ float: 'right', width: 250, marginLeft: 20 }} /> 


**Skann QR-koden** på utstyret.
- Knappen som tidligere het **"Start inspeksjon"** vil nå endres til **"Start etterkontroll".**
- Etterkontroll-knappen er tilgjengelig i 8 måneder fra siste kontroll.
- Du kan legge til nye bilder
- Du kan legge til kommentar
<font color="red">Merk!</font> Ikke slett tidligere bilder og kommentar. 


## Administrer og planlegg kontroll av utstyr

- Få full oversikt over alt registrert utstyr med sakkyndige kontroller på **kontrollsiden.**
- **Filtrer etter dato** (f.eks. kommende kontroller) og se forfallsdatoer.
- Klikk på utstyret for å gå til fanen for sakkyndig kontroll.
- **Eksporter til Excel** for sortering, avdelingsfordeling, kontrollører eller revisjonsrapportering.
- Eksporter liste over utstyr som har **avvik**. Denne listen blir oppdatert når avviket er rettet.
 
import controlpage from '/img/workequipment/controlpage.png';

<img src={controlpage} style={{width:900}} />

### Sjekkliste
- Opprett [sjekkliste](/docs/DigiQuip/checklists#sjekkliste-for-sakkyndig-kontroll) for sakkyndig kontroll og knytt sjekkliste til en eller flere [modeller](/docs/DigiQuip/checklists#knytt-sjekkliste-til-arbeidsutstyr)


# FAQ
Her er noen svar på vanlige spørsmål.  Kontakt oss hvis du ikke finner svaret du leter etter!

<details>
  <summary>Jeg har skannet QR-koden, men ser ikke knappen "Start inspeksjon". Hvorfor?</summary>
  <div>
    <div>Dette kan skyldes:</div>
    <div>Du har ikke rollen som kontrollør → Kontakt administrator </div>
    <div>Det er ingen sjekkliste knyttet til utstyret → Kontakt administrator </div>
  </div>
</details>

<details>
  <summary>Kan jeg redigere en ferdigstilt kontroll hvis jeg har glemt å endre dato/anbefalt bruk?</summary>
  <div>
    <div>Ja, følg disse stegene:</div>
    <div> Gå til Admin → Maskiner og utstyr → Velg utstyr → Gå til Sakkyndig kontroll fanen</div>
    <div>Finn kontrollen som skal redigeres </div>
    <div>Klikk på de tre prikkene ( ⋮ ) til høyre</div>
    <div>Velg "Lås opp"</div>
    <div>Deretter velg "Rediger"for å gjøre endringer  </div>
  </div>
</details>

<details>
  <summary>Kan jeg starte en kontroll og lagre den for å fortsette senere?</summary>
  <div>
    <div>Ja, det er mulig!</div>
    <div>Bruk "Lagre og avslutt"-knappen på siste side i sjekklisten. Alternativt kan du bare gå ut av siden – kontrollen lagres automatisk </div>
    <div>Vi anbefaler å skru av "Forhåndsutfylt med OK" i sjekklisten</div>
  </div>
</details>

<details>
  <summary>Hvorfor får jeg ikke koblet en sjekkliste til en modell?</summary>
  <div>
    <div>Dette kan skyldes: </div>
    <div>Manglende rettigheter → Du må ha administratorrolle for å koble sjekklister</div>
    <div>Ingen sjekklister tilgjengelig** → Sjekk at det er opprettet sjekklister i systemet.</div>
  </div>
</details>

<details>
  <summary>Hvordan endrer jeg en sjekkliste som er koblet til en modell?</summary>
  <div>
    <div>Ja, det er mulig!</div>
    <div>Bruk "Lagre og avslutt"-knappen på siste side i sjekklisten. Alternativt kan du bare gå ut av siden – kontrollen lagres automatisk </div>
    <div>Vi anbefaler å skru av "Forhåndsutfylt med OK" i sjekklisten</div>
  </div>
</details>



I DigiQuip får maskineiere kontroll på sakkyndig kontroll og vi er integrert med både Maskinregisteret (M-reg.) og BRAREG.

For å hente inn kontrolldata fra M-reg., kontakter dere Sentralregisteret, post@sentralregisteret.no, og får API-detaljer. Disse 
detaljene kan dere legge rett inn under innstillinger > generell > integrasjoner eller send oss en e-post.

Vi har også skreddersydde integrasjoner, etter avtale.



For ytterligere detaljer eller spørsmål ta kontakt med din kontaktperson eller book et møte med noen i teamet vårt, [book et møte](https://digiquip.no/about).