import Translate, { translate } from '@docusaurus/Translate';
import partnersBrandLogoList from './partnersBrandLogo.js';
import eventDetail from './eventContent.js';

import Link from '@docusaurus/Link';

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
        dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
        description: translate({ message: "home.news.news1desc" }),
        blogLink: '/kvipp',
    },
    {
        isVideo: false,
        title: translate({ message: "home.news.news2title" }),
        imageBanner: '/img/betonmast.jpg',
        description: translate({ message: "home.news.news2desc" }),
        blogLink: '/blog/betonmast-vitasbygg-utstyrsspesifikk-vernerunde',
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
const eventBlock = eventDetail;

const mainPageContentRecords = {
    safetyWork,
    newsContent,
    eventBlock,
    brandLogoPartners,
}


export default mainPageContentRecords;
