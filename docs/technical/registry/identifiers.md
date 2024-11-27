---
sidebar_position: 3
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

# Eksterne identifikatorer

Eksterne identifikatorer er en metode for å tillate andre systemer å lagre sin ID for et objekt, f.eks. en person, i registeret. Siden alle objekter i registeret allerede har en ID, vil dette kunne synes kontraproduktivt, men med tanke på at data og datakvalitet stadig forbedres i registeret, gir dette muligheten for å ha en konsistent kobling mot tidvis skiftende data.

## Mot hva?

Ekstern identifikatorer er "polymorfiske". Det betyr at de kan peke mot forskjellige andre kategorier av data. I vårt tilfelle kan dette være:

* Menneske (Person)
* Utstyrtype (Asset Type)
* Utstyr (Asset)

## Eksempel

La oss si at du har et system som vi kaller i "xyz". I dette systemet har mennesket "Ola Normann" ID "xyz123". Ola Normann finnes også registert i Registeret, her med id "5574043f-4fc1-48d2-82a6-7dcf73418390". En oppføring i "Identifiers" vil dermed kunne bli:

```
{
    "source": "xyz",
    "identity": "xy123",
    "foreign_id": "5574043f-4fc1-48d2-82a6-7dcf73418390",
    "type": "person"
}
```

Når dette er registret vil du kunne spørre om denne identiteten i registeret og få mennesket og alle relaterte data i en spørring, uten å forholde deg til hvilken ID mennesket har eller om det har foregått en sammenslåing eller oppdatering av data.

## Eksempel 2: Finn eller opprett utstyr og koble en identifikator til den

Om du har data for merke, modell og potensielt et versjonsnummer og et serienummer, kan du sende en POST mot endepunktet [https://registry.kvipp.io/assets/find](https://registry.kvipp.io/assets/find) med eks. følgende data som JSON:
```
{
  "serial_number": "MAN000Q0E01000330 ",
  "brand": " Manitou ",
  "model": "280 TJ"
}
```
Om denne finnes vil du få objektet tilbake, om ikke, og om du har satt parameteret `create` til `true`, vil både utstyrstypen og utstyret skapes og returneres til deg. Om den finnes bør du sjekke for en ekstern identifikator, om ikke kan du lage en med IDen du fikk tilbake fra kallet over, f.eks.:
```
{
    "source": "system_x",
    "identity": "ID8812313",
    "foreign_id": "6dd19106-3708-4fea-becc-45ae3c001a4f",
    "type": "asset"
}
``` 

## Koble en DigiQuip QR-kode til et utstyr eller utstyrstype

På QR-koden står det en syvsifret alfanumerisk kombinasjon (f.eks. "PYZEV1Q"). Om du ønsker å koble dette f.eks. til et utstyr med ID `22934840-6214-4b84-bfde-7b239c6d2e33`, vil identifikatoren du skal opprette (om den ikke finnes) være:
```
{
    "source": "digiquip_qr",
    "identity": "PYZEV1Q",
    "foreign_id": "22934840-6214-4b84-bfde-7b239c6d2e33",
    "type": "asset"
}
``` 

**Sjekk evt. om IDen finnes først!**