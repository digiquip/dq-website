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
        isVideo: true,
        title: translate({ message: "home.news.news1title" }),
        dyntubeKey: 'ijuv7LbG0UyMeCGQBVIDbw',
        description: translate({ message: "home.news.news1desc" }),
        blogLink: '/kvipp',
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
        title: translate({ message: "home.news.news5title" }),
        imageBanner: 'img/articles/QR-kode-bod.jpg',
        description: translate({ message: "home.news.news5desc" }),
        blogLink: '/blog/opplæring-uønsket-hendelse-tiltak',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news2title" }),
        imageBanner: 'img/competence-images/practical-training.webp',
        description: translate({ message: "home.news.news2desc" }),
        blogLink: '/bestill-kreg-integrasjon',
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
        title: translate({ message: "home.news.news4title" }),
        imageBanner: 'img/articles/SDbygg.jpg',
        description: translate({ message: "home.news.news4desc" }),
        blogLink: '/blog/SD-tilsyn-dokumentasjon-utstyr',
    },
];


const brandLogoPartners = partnersBrandLogoList.brandList;





const mainPageContentRecords = {
    safetyWork,
    newsContent,
    brandLogoPartners,
}


export default mainPageContentRecords;
