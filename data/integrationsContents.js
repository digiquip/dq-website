import Translate from '@docusaurus/Translate';
import React from 'react';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";

const integrationsBannerData = {
    className: "integrationsbanner",
    titleWithHTML: (
        <>
            <Translate>integrations.banner.title1</Translate><span className="orange">.</span>
        </>
    ),
}

// New integrations data for expandable cards
const integrationsCardsData = [
    {
        id: 'kompetanseregisteret',
        title: <Translate id="integrations.cards.kompetanseregisteret.title" description="Kompetanseregisteret integration card title">Kompetanseregisteret</Translate>,
        description: <Translate id="integrations.cards.kompetanseregisteret.description" description="Kompetanseregisteret integration card description">Automatisk overføring av utstyrsspesifikk opplæring til Kompetanseregisteret. Når en person med rollen «instruktør» gir praktisk utstyrsspesifikk opplæring til noen av dine ansatte, lastes resultatet automatisk opp i Kompetanseregisteret. Videre deler K-REG kompetanse med HMSREG. Les mer på Sentralregisteret.no →</Translate>,
        points: [
            <Translate id="integrations.cards.kompetanseregisteret.point1" description="Kompetanseregisteret integration benefit 1">Synlig i HMSREG via Kompetanseregisteret</Translate>,
            <Translate id="integrations.cards.kompetanseregisteret.point2" description="Kompetanseregisteret integration benefit 2">Ingen manuell dataregistrering kreves</Translate>,
            <Translate id="integrations.cards.kompetanseregisteret.point3" description="Kompetanseregisteret integration benefit 3">Løpende dokumentasjon av utstyrsspesifikk opplæring</Translate>
        ],
        link: 'https://sentralregisteret.no/kompetanseregisteret/',
        pricingModels: [
            {
                title: <Translate id="integrations.cards.kompetanseregisteret.pricing.kvippBedrift.title" description="Kvipp Bedrift pricing option title">Kvipp Bedrift</Translate>,
                description: <Translate id="integrations.cards.kompetanseregisteret.pricing.kvippBedrift.description" description="Kvipp Bedrift pricing option description">Har du Kvipp Bedrift kan du aktivere integrasjonen som et tilvalg. Ta kontakt med oss for å aktivere.</Translate>,
                price: <Translate id="integrations.cards.kompetanseregisteret.pricing.kvippBedrift.price" description="Kvipp Bedrift pricing option price">500 kr. per måned</Translate>
            },
            {
                title: <Translate id="integrations.cards.kompetanseregisteret.pricing.frittstaende.title" description="Frittstående pricing option title">Frittstående</Translate>,
                description: <Translate id="integrations.cards.kompetanseregisteret.pricing.frittstaende.description" description="Frittstående pricing option description">Du kan bruke Kvipp i felt og overføre opplæringene til Kompetanseregisteret helt frittstående uten Kvipp Bedrift. Ta kontakt med oss for aktivere.</Translate>,
                price: <Translate id="integrations.cards.kompetanseregisteret.pricing.frittstaende.price" description="Frittstående pricing option price">990 kr. per måned</Translate>
            }
        ]
    },
    {
        id: 'onlet',
        title: <Translate id="integrations.cards.onlet.title" description="Onlet integration card title">Onlet</Translate>,
        description: <Translate id="integrations.cards.onlet.description" description="Onlet integration card description">Med integrasjonen mellom DigiQuip og Onlet får du automatisk oppdatering av kontrolldata. Når en kontroll er gjennomført i DigiQuip eller når vi mottar kontroller fra M-REG eller Digitool, blir Onlet oppdatert neste dag med status, neste kontrolldato og kontrollrapport.</Translate>,
        points: [
            <Translate id="integrations.cards.onlet.point1" description="Onlet integration benefit 1">Spar tid – unngå dobbelregistrering</Translate>,
            <Translate id="integrations.cards.onlet.point2" description="Onlet integration benefit 2">Alltid oppdatert neste kontroll-dato</Translate>,
            <Translate id="integrations.cards.onlet.point3" description="Onlet integration benefit 3">Bedre kvalitet og færre feil</Translate>
        ],
        pricingModels: [
            {
                title: <Translate id="integrations.cards.onlet.pricing.title" description="Onlet pricing option title">Full integrasjon med Onlet for sakkyndig kontroll</Translate>,
                description: <Translate id="integrations.cards.onlet.pricing.description" description="Onlet pricing option description">Vi fakturerer per kontroll som oppdateres i Onlet</Translate>,
                price: <Translate id="integrations.cards.onlet.pricing.price" description="Onlet pricing option price">25 kr per kontroll</Translate>
            }
        ],
        note: <Translate id="integrations.cards.onlet.note" description="Onlet integration note">Merk: Infobric har egne kostnader knyttet til integrasjonen. For mer informasjon, ta kontakt med Infobric: support@infobriconlet.no</Translate>
    },
    {
        id: 'digitool',
        title: <Translate id="integrations.cards.digitool.title" description="DigiTool integration card title">DigiTool</Translate>,
        description: <Translate id="integrations.cards.digitool.description" description="DigiTool integration card description">Automatisk overføring av kontrollstatus og kontrollrapporter fra Digitool til DigiQuip. Dataene blir tilgjengelige med en gang, slik at du alltid ser siste oppdatering. Helt uten forsinkelse og uten ekstra arbeid!</Translate>,
        points: [
            <Translate id="integrations.cards.digitool.point1" description="DigiTool integration benefit 1">Kontrollstatus og rapporter tilgjengelig direkte i valgt produkt (Kvipp eller Trygg Maskin)</Translate>,
            <Translate id="integrations.cards.digitool.point2" description="DigiTool integration benefit 2">Ingen manuell oppdatering nødvendig</Translate>,
            <Translate id="integrations.cards.digitool.point3" description="DigiTool integration benefit 3">Fungerer sømløst med QR-koder</Translate>
        ],
        pricingModels: [
            {
                title: <Translate id="integrations.cards.digitool.pricing.title" description="DigiTool pricing option title">DigiTool Integrasjon</Translate>,
                description: <Translate id="integrations.cards.digitool.pricing.description" description="DigiTool pricing option description">Integrasjon med DigiTool for sakkyndig kontroll</Translate>,
                price: <Translate id="integrations.cards.digitool.pricing.price" description="DigiTool pricing option price">Denne integrasjonen er inkludert uten ekstra kostnad.</Translate>
            }
        ]
    },
    {
        id: 'maskinregisteret',
        title: <Translate id="integrations.cards.maskinregisteret.title" description="Maskinregisteret integration card title">Maskinregisteret</Translate>,
        description: <Translate id="integrations.cards.maskinregisteret.description" description="Maskinregisteret integration card description">Integrasjon med Maskinregisteret (M-REG) for å hente arbeidsutstyr og sakkyndig kontroll automatisk over til DigiQuip.</Translate>,
        points: [
            <Translate id="integrations.cards.maskinregisteret.point1" description="Maskinregisteret integration benefit 1">Automatisk import av maskiner og utstyr i DigiQuip</Translate>,
            <Translate id="integrations.cards.maskinregisteret.point2" description="Maskinregisteret integration benefit 2">Full oversikt over sakkyndig kontroll utført i Maskinregisteret</Translate>
        ],
        pricingModels: [
            {
                title: <Translate id="integrations.cards.maskinregisteret.pricing.title" description="Maskinregisteret pricing option title">M-REG Integrasjon</Translate>,
                description: <Translate id="integrations.cards.maskinregisteret.pricing.description" description="Maskinregisteret pricing option description">Automatisk import av maskiner og utstyr fra Maskinregisteret</Translate>,
                price: <Translate id="integrations.cards.maskinregisteret.pricing.price" description="Maskinregisteret pricing option price">Denne integrasjonen er inkludert uten ekstra kostnad.</Translate>
            }
        ]
    },
    {
        id: 'skreddersydd',
        title: <Translate id="integrations.cards.skreddersydd.title" description="Skreddersydd integration card title">Skreddersydd</Translate>,
        description: <Translate id="integrations.cards.skreddersydd.description" description="Skreddersydd integration card description">Har du allerede et system du ønsker at vi skal integrere med? Ta kontakt så finner vi en løsning.</Translate>,
        pricingModels: [
            {
                title: <Translate id="integrations.cards.skreddersydd.pricing.title" description="Skreddersydd pricing option title">Skreddersydd Integrasjon</Translate>,
                price: <Translate id="integrations.cards.skreddersydd.pricing.price" description="Skreddersydd pricing option price">Kontakt oss!</Translate>
            }
        ]
    }
];

const integrationsKompetanseregisteretData = {
    className: "integrations-kompetanseregisteret-section",
    titleWithHTML: (
        <>
            <Translate>integrations.kompetanseregisteret.title1</Translate> <br></br>
            <Translate>integrations.kompetanseregisteret.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>integrations.kompetanseregisteret.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/integrations/integrations-kompetanseregisteret.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>integrations.kompetanseregisteret.point1</Translate></li>
                <li><Translate>integrations.kompetanseregisteret.point2</Translate></li>
                <li><Translate>integrations.kompetanseregisteret.point3</Translate></li>
            </ul>
        </>
    )
}

const integrationsOnletData = {
    className: "integrations-onlet-section",
    titleWithHTML: (
        <>
            <Translate>integrations.onlet.title1</Translate> <br></br>
            <Translate>integrations.onlet.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>integrations.onlet.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/integrations/integrations-onlet.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>integrations.onlet.point1</Translate></li>
                <li><Translate>integrations.onlet.point2</Translate></li>
                <li><Translate>integrations.onlet.point3</Translate></li>
            </ul>
        </>
    )
}

const integrationsTailoredData = {
    className: "integrations-tailored-section",
    titleWithHTML: (
        <>
            <Translate>integrations.tailored.title1</Translate> <br></br>
            <Translate>integrations.tailored.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>integrations.tailored.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/integrations/integrations-tailored.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>integrations.tailored.point1</Translate></li>
                <li><Translate>integrations.tailored.point2</Translate></li>
                <li><Translate>integrations.tailored.point3</Translate></li>
            </ul>
        </>
    )
}

const IntegrationsRecords = {
    integrationsBannerData,
    integrationsCardsData,
    integrationsKompetanseregisteretData,
    integrationsOnletData,
    integrationsTailoredData,
}

export default IntegrationsRecords;
