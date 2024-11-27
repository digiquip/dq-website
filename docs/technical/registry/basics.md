---
sidebar_position: 1
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

# Om registeret

Registeret inneholder kjerneiformasjon for tjenestene som er tilknyttet Kvipp og delvis DigiQuip. Det er et passivt register og vil bare i liten grad utføre operasjoner med unntak av enkle oppgaver som å generere PDFer og bilder, samt sende ut epostmeldinger. Det er tilgjenglig for test og produksjon på følgende adresser:
* [For testing: https://test-registry.kvipp.io](https://test-registry.kvipp.io) ( [Swagger dokumentasjon på /docs](https://test-registry.kvipp.io/docs))
* [Live: https://registry.kvipp.io](https://registry.kvipp.io) ( [Swagger dokumentasjon på /docs](https://registry.kvipp.io/docs))

## Autentisering

Det benyttes nå "Basic Authentication" for endepunktene. Brukernavn og passord gis ut til parter med relevant behov. Ta kontakt med oss på support@digiquip.no.

## Krav om datakvalitet

Prinsippet for registeret er å tillate at informasjon enkelt kan legges inn men at det kontinuerlig forbedres. På samme måte som du vil håndtere data for slektsforskning, vil du raskt kunne legge inn grunndata og koblinger, os så vil dine og andres prosesser koble til og forbedre disse dataene etterhvert. Det er derfor viktig at det benyttes eksterne idenfikatorer når du skal koble data fra dine systemer og til registeret. Dette er forklart nærmere i [Eksterne identifikatorer](identifiers.md)