---
sidebar_position: 2
---

<details className="markdown-navigation">
  <summary>Navigation Menu</summary>

- [intro](/docs/intro)
- [Juridisk](/docs/category/juridisk)
    - [Bruksvilkår (EULA)](/docs/legal/eula)
    - [Personvernerklæring](/docs/legal/privacy-policy)
    - [Generelle avtalevilkår](/docs/legal/terms)
    - [Avtale om Tjenestenivå (SLA)](/docs/legal/sla)
- [Hendig informasjon](/docs/category/hendig-informasjon)
    - [For utviklere](/docs/category/for-utviklere)
    - [Designguide](/docs/category/designguide)
- [Priser](/docs/category/priser)
    - [Prisliste og etiketter](/docs/prices/detailed-price-list)
- [Bruk av programvaren DigiQuip](/docs/category/bruk-av-programvaren-digiquip)
    - [Kom i gang med DigiQuip](/docs/resources/getting-started)
    - [Administrasjon av brukere](/docs/resources/user-management)
    - [Administrasjon av maskiner og utstyr](/docs/resources/equipment-management)
    - [Administrere egen og andres kompetanse](/docs/resources/competence-management)
    - [Sjekklister](/docs/resources/checklists)
    - [Daglig kontroll og vedlikehold](/docs/resources/Pre-use-maintenance)
    - [Sakkyndig kontroll](/docs/resources/inspections)
    - [QR-koder/NFC-tagger](/docs/resources/landingpage)
    - [Utstyrsspesifikk opplæring](/docs/resources/training)
    - [Varslinger](/docs/resources/notifications)
- [Teknisk dokumentasjon](/docs/category/teknisk-dokumentasjon)
    - [Registeret](/docs/category/registeret)
</details>

# Administrasjon av brukere

Rollene "Administrator" og "Brukere og kompetanseadministrasjon" kan håndtere brukere. "Administrator" har tilgang til alt og alle, mens "Brukere og kompetanseadministrasjon" har tilgang til andre i samme avdeling.

## Nye brukere

Legg først inn aktuelle avdelinger. Kun "Administrator" har tilgang til avdelinger. Gå til "innstillinger > generelle > avdelinger" for å administrere.

import departments from '/img/resources-FAQ/departments.png';

<img src={departments} style={{width:800}} />

Brukere legges enten til manuelt, ved hjelp av filimport (csv og excel) eller alternativt via integrasjon. For integrasjon, ta kontakt.

import addusers from '/img/resources-FAQ/addusers.png';

<img src={addusers} style={{width:800}} />

For csv/excel importen, legg til følgende informasjon i gitt rekkefølge:
1.Fornavn.
2.Etternavn.
3.E-post. Dette blir personens brukernavn og kan ikke endres.
4.Telefon. For norske telefonnumre: 8-sifre og uten landskode.
5.Landskode. Eksempelvis 47 for norske telefonnumre, uten + og 00.
6.Språk. Bruk NO for norsk. Oversikt over øvrige landskoder kan lastes ned fra løsningen.
7.Avdeling. Om ikke avdelingen allerede er opprettet, blir denne automatisk opprettet. Sjekk derfor om avdelingen er plassert riktig i organisasjonstreet.
8.Intern eller ekstern bruker. Intern og ekstern har henholdsvis tallkodene 1 og 2.
9.Fødselsdato. Dag, måned og år, f.eks. 10.12.1990.

## Tilganger

Roller styres per bruker. Detaljer og rolle endres under hver enkelt persons brukerprofil, se beskrivelser nedenfor.

:::note[Endre brukernavn?]

Merk at brukernavn ikke kan endres i løsningen. Ta i tilfelle kontakt for hjelp, support@digiquip.no.

:::

## Invitasjon

Invitasjon med link for å aktivere sendes på e-post og/eller SMS. I invitasjonen får mottaker en link til løsningen, og må følge den for å sette passord.

:::note[Ikke fått invitasjon?]

Sjekk spam/søppel e-post. Eller ta kontakt med oss på support@digiquip.no eller 69 83 85 00 for videre hjelp.

:::

import inviteusers from '/img/resources-FAQ/inviteusers.png';

<img src={inviteusers} style={{width:800}} />

## Hva når noen slutter eller kun skal jobbe i en begrenset periode?
Dersom en person kun skal jobbe i en avtalt periode eller har sluttet, bruk start og sluttdato for å definere hvilken periode personen skal ha tilgang. Når en person slutter, sett sluttdato og personen er fra den datoen satt til inaktiv. Inaktive brukere har kun tilgang til egen kompetanse og eventuelt andre publiserte sider.

import enddate from '/img/resources-FAQ/enddate.png';

<img src={enddate} style={{width:800}} />

## Beskrivelse av roller

Her følger en beskrivelse av roller (aka tilganger) i DigiQuip.

### Administrator

Har tilgang til alt og alle. Kun Administrator kan endre organisasjonens generelle innstillinger, for eksempel integrasjoner og avdelingstruktur.

### Brukere og kompetanseadministrasjon

+ Legge til og fjerne brukere.
+ Legge til opplæring på vegne av andre.
+ Godkjenne/avvise kompetanse.
+ Lage digital opplæring.
+ Innstillinger for utstyrsspesifikk opplæring.
+ Lage sjekklister.

### Maskin- og utstyrsadministrasjon

+ Administrasjon av modeller og utstyr.
+ Kobling av QR-koder/NFC-tagger.
+ Oversikt sakkyndig kontroll og annen utstyrsrelatert informasjon.
+ Kan per modell administrere om inspeksjoner er påkrevd eller ikke.
+ Legge til og finne logg for utførte kontroller og inspeksjoner.
+ Lage sjekklister.

### Vedlikehold

Dersom bedriften har vedlikeholdsmodulen, kan personer med denne rollen loggføre vedlikehold.

### Standardbruker

For interne og eksterne brukere som kun skal administrere egne forhold (slik som kompetanse), og ikke trenger tilgang til å administrere verken arbeidsutstyr, andre personer eller kompetanse. Med denne rollen kan personen:

+ Legge til og fjerne egen kompetanse.
+ Finne oversikt over egen kompetanse.
+ Gjennomføre opplæring.
+ Gjennomføre daglige kontroller.
+ Se status for maskin og utstyr.
+ Finne kompetansekrav for maskin og utstyr.

## Integrasjoner

Ta kontakt ved behov for integrasjoner.

# Lykke til!

For ytterligere detaljer eller spørsmål ta kontakt med din kontaktperson eller book et møte med noen i teamet vårt, [book et møte](https://digiquip.no/about). Du kan også sende oss en e-post på support@digiquip.no.