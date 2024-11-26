import Translate, { translate } from '@docusaurus/Translate';
import partnersBrandLogoList from './partnersBrandLogo.js';
import eventDetail from './eventContent.js';

import Link from '@docusaurus/Link';

const youtubeVideoBanner = 'img/iframe-banner.jpg';

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
        imageBanner: '/img/HMD-HANDSHAKE.jpg',
        description: translate({ message: "home.news.news2desc" }),
        blogLink: '/blog/hadeland-maskindrift',
    },
];


const safeuseContent = {
    className: "sikker-bruk",
    title: (
        <h2 className="section-title"><Translate>home.safeuse.title</Translate><span className="orange">.</span>
        </h2>
    ),
    img: require("@site/static/img/SikkerBruk.webp").default,
    description: (
        <>
            <p><Translate>home.safeuse.arg1</Translate></p>
            <p><Translate>home.safeuse.arg2</Translate></p>
        </>
    ),
    link: "fullpakke",
};

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
    link: "fullpakke",
};

const shareInfoContent = {
    className: "sikker-bruk light-bg-grey",
    title: (
        <h2 className="section-title"><Translate>home.share.title</Translate>
            <span className="orange">.</span>
        </h2>
    ),
    img: require("@site/static/img/share-information-img.webp").default,
    description: (
        <>
            <p><Translate>home.share.arg1</Translate></p>
            <ul>
                <li><Translate>home.share.point1</Translate></li>
                <li><Translate>home.share.point2</Translate></li>
                <li><Translate>home.share.point3</Translate></li>
            </ul>
        </>
    ),
}

const brandLogoPartners = partnersBrandLogoList.brandList;
const eventBlock = eventDetail;

const mainPageContentRecords = {
    safetyWork,
    newsContent,
    eventBlock,
    consolidateWorkContent,
    brandLogoPartners,
}


export default mainPageContentRecords;
