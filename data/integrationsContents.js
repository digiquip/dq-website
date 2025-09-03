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
        title: <Translate>integrations.cards.kompetanseregisteret.title</Translate>,
        description: <Translate>kreg.integration.description</Translate>,
        points: [
            <Translate>integrations.cards.kompetanseregisteret.point1</Translate>,
            <Translate>integrations.cards.kompetanseregisteret.point2</Translate>,
            <Translate>integrations.cards.kompetanseregisteret.point3</Translate>
        ],
        link: 'https://sentralregisteret.no/kompetanseregisteret/',
        pricingModels: [
            {
                title: <Translate>integrations.cards.kompetanseregisteret.pricing.kvippBedrift.title</Translate>,
                description: <Translate>integrations.cards.kompetanseregisteret.pricing.kvippBedrift.description</Translate>,
                price: <Translate>integrations.cards.kompetanseregisteret.pricing.kvippBedrift.price</Translate>
            },
            {
                title: <Translate>integrations.cards.kompetanseregisteret.pricing.frittstaende.title</Translate>,
                description: <Translate>integrations.cards.kompetanseregisteret.pricing.frittstaende.description</Translate>,
                price: <Translate>integrations.cards.kompetanseregisteret.pricing.frittstaende.price</Translate>
            }
        ]
    },
    {
        id: 'onlet',
        title: <Translate>integrations.cards.onlet.title</Translate>,
        description: <Translate>onlet.integration.description</Translate>,
        points: [
            <Translate>integrations.cards.onlet.point1</Translate>,
            <Translate>integrations.cards.onlet.point2</Translate>,
            <Translate>integrations.cards.onlet.point3</Translate>
        ],
        pricingModels: [
            {
                title: <Translate>integrations.cards.onlet.pricing.title</Translate>,
                description: <Translate>integrations.cards.onlet.pricing.description</Translate>,
                price: <Translate>integrations.cards.onlet.pricing.price</Translate>
            }
        ],
        note: <Translate>integrations.cards.onlet.note</Translate>
    },
    {
        id: 'digitool',
        title: <Translate>integrations.cards.digitool.title</Translate>,
        description: <Translate>digitool.integration.description</Translate>,
        points: [
            <Translate>integrations.cards.digitool.point1</Translate>,
            <Translate>integrations.cards.digitool.point2</Translate>,
            <Translate>integrations.cards.digitool.point3</Translate>
        ],
        pricingModels: [
            {
                title: <Translate>integrations.cards.digitool.pricing.title</Translate>,
                description: <Translate>integrations.cards.digitool.pricing.description</Translate>,
                price: <Translate>integrations.cards.digitool.pricing.price</Translate>
            }
        ]
    },
    {
        id: 'maskinregisteret',
        title: <Translate>integrations.cards.maskinregisteret.title</Translate>,
        description: <Translate>maskinregisteret.integration.description</Translate>,
        points: [
            <Translate>integrations.cards.maskinregisteret.point1</Translate>,
            <Translate>integrations.cards.maskinregisteret.point2</Translate>
        ],
        pricingModels: [
            {
                title: <Translate>integrations.cards.maskinregisteret.pricing.title</Translate>,
                description: <Translate>integrations.cards.maskinregisteret.pricing.description</Translate>,
                price: <Translate>integrations.cards.maskinregisteret.pricing.price</Translate>
            }
        ]
    },
    {
        id: 'skreddersydd',
        title: <Translate>integrations.cards.skreddersydd.title</Translate>,
        description: <Translate>skreddersydd.integration.description</Translate>,
        pricingModels: [
            {
                title: <Translate>integrations.cards.skreddersydd.pricing.title</Translate>,
                price: <Translate>integrations.cards.skreddersydd.pricing.price</Translate>
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
