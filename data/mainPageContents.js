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
//Avpublisert
const consolidateWorkContent = {
    className: "consolidate-section",
    title: (
        <h2 className="section-title"><Translate>home.consolidate.title</Translate>
            <span className="orange">.</span>
        </h2>
    ),
    img: require("@site/static/img/platform-img.webp").default,
    description: (
        <>
            <p><Translate>home.consolidate.arg1</Translate></p>
            <p><Translate>home.consolidate.arg2</Translate></p>
            <ul>
                <li><Translate>home.consolidate.point1</Translate></li>
                <li><Translate>home.consolidate.point2</Translate></li>
                <li><Translate>home.consolidate.point3</Translate></li>
            </ul>
        </>
    ),
    link: "trygg-maskin",
};
//Avpublisert

const brandLogoPartners = partnersBrandLogoList.brandList;

const mainPageContentRecords = {
    safetyWork,
    newsContent,
    brandLogoPartners,
}


export default mainPageContentRecords;
