import Translate, { translate } from '@docusaurus/Translate';
import partnersBrandLogoList from './partnersBrandLogo.js';

const safetyWork = [
    {
        title: translate({ message: "home.safety.title" }),
        description: (
            <>
                <p><Translate>home.safety.what</Translate></p>
                <p><Translate>home.safety.how</Translate></p>
            </>
        ),
    },
];

const newsContent = [
    {
        isVideo: false,
        title: translate({ message: "home.news.news7title" }),
        imageBanner: 'img/kvipp-lunsj/kvipplunsj_betonmast.jpeg',
        description: translate({ message: "home.news.news7desc" }),
        blogLink: '/kvipp-lunsj',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news8title" }),
        imageBanner: 'img/kvipp-lunsj/kvipp_lunsj_seminar.jpg',
        description: translate({ message: "home.news.news8desc" }),
        blogLink: '/event-maskinforordningen',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news5title" }),
        imageBanner: 'img/articles/QR-kode-bod.jpg',
        description: translate({ message: "home.news.news5desc" }),
        blogLink: '/blog/opplæring-uønsket-hendelse-tiltak',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news3title" }),
        imageBanner: 'img/articles/RG.png',
        description: translate({ message: "home.news.news3desc" }),
        blogLink: '/blog/RG-kvipp',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news6title" }),
        imageBanner: 'img/articles/betonmastinnlandet.JPG',
        description: translate({ message: "home.news.news6desc" }),
        blogLink: '/blog/opplæring-kontroll-betonmast-innlandet',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news4title" }),
        imageBanner: 'img/articles/SDbygg.jpg',
        description: translate({ message: "home.news.news4desc" }),
        blogLink: '/blog/SD-tilsyn-dokumentasjon-utstyr',
    },
];

const mainPageContentRecords = {
    safetyWork,
    newsContent,
}

export default mainPageContentRecords;
