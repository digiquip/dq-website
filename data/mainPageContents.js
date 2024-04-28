import Translate, { translate } from '@docusaurus/Translate';
import youtubePlayList from './youtubePlayList.js'
import partnersBrandLogoList from './partnersBrandLogo.js';
import Link from '@docusaurus/Link';

const youtubeVideoBanner = 'img/iframe-banner.jpg';

const safetyWork = [
    {
        title: translate({ message: "home.safety.title" }),
        withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
        withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
        youtubeVideoBanner: youtubeVideoBanner,
        description: (
            <>
                <p><Translate>home.safety.what</Translate></p>
                <p><Translate>home.safety.how</Translate></p>
            </>
        ),
    },
];

const eventBlock = {
    event: <Translate>home.event.type</Translate>,
    date : <Translate>home.event.date</Translate>,
    title: <Translate>home.event.title</Translate>,
    description: <Translate>home.event.description</Translate>,
    signup: <Translate>home.event.signup</Translate>,
    presentors: [
        {name: 'Tom Freddy Braathen', image: 'img/competence-images/tom_freddy.webp'},
        {name: 'Cathrine Westbye', image: 'team_imgs/CathrineWestbye.jpeg'},
        {name: 'Ibtisam Andersen', image: 'team_imgs/ibtisam.jpeg'},
    ]
};

const safeuseContent = {
    className: "sikker-bruk light-bg-grey",
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
    link: "competence",
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
    link: "workequipment",
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
    link: "modellibrary",
}

const expertInspContent = {
    className: "consolidate-section",
    title: (
        <h2 className="section-title"><Translate>home.expert.title</Translate>
            <span className="orange">.</span>
        </h2>
    ),
    img: require("@site/static/img/last.jpg").default,
    description: (
        <>
            <p><Translate>home.expert.arg1</Translate></p>
            <ul>
                <li><Translate>home.expert.point1</Translate></li>
                <li><Translate>home.expert.point2</Translate></li>
                <li><Translate>home.expert.point3</Translate></li>
            </ul>
        </>
    ),
    link: "expertcontrol",
}


const brandLogoPartners = partnersBrandLogoList.brandList;


const mainPageContentRecords = {
    safetyWork,
    eventBlock,
    safeuseContent,
    consolidateWorkContent,
    shareInfoContent,
    expertInspContent,
    brandLogoPartners,
}


export default mainPageContentRecords;