import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";

const bedriftBannerData =
{
    className: "bedriftbanner",
    titleWithHTML: (
        <>
            <Translate>bedrift.banner.title1</Translate><span className="orange">.</span>
        </>
    ),
}

const bedriftgroupsData = {
    className: "bedriftgroups-section",
    titleWithHTML: (
        <>
            <Translate>bedrift.groups.title1</Translate> <br></br>
            <Translate>bedrift.groups.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>bedrift.groups.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/kvipp-admin/KvippAdminGap.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>bedrift.groups.point1</Translate></li>
                <li><Translate>bedrift.groups.point2</Translate></li>
                <li><Translate>bedrift.groups.point3</Translate></li>
            </ul>
        </>
    )
}

const bedriftbenefitsData = {
    className: "bedriftbenefits-section",
    titleWithHTML: (
        <>
            <Translate>bedrift.benefits.title1</Translate> <br></br>
            <Translate>bedrift.benefits.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>bedrift.benefits.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' ||'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    img: "img/kvipp-admin/KvippAdminPerson.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>bedrift.benefits.point1</Translate></li>
                <li><Translate>bedrift.benefits.point2</Translate></li>
                <li><Translate>bedrift.benefits.point3</Translate></li>
            </ul>
        </>
    )
}

const bedriftIntegrationsData = {
    className: "bedriftintegrations-section",
    titleWithHTML: (
        <>
            <Translate>bedrift.integrations.title</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>bedrift.integrations.description</Translate> <a href="https://sentralregisteret.no/kompetanseregisteret/" target="_blank" rel="noopener noreferrer"><Translate>bedrift.integrations.link</Translate></a>.</p>
            <div className="integration-benefits">
                <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span><Translate>bedrift.integrations.benefit2</Translate></span>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span><Translate>bedrift.integrations.benefit3</Translate></span>
                </div>
            </div>
            <p><Translate>bedrift.integrations.pricing</Translate></p>
            <div className="integration-cta">
                <a href="tel:69838500" className="integration-phone-btn">
                    <span className="phone-icon">📞</span>
                    <span><Translate>bedrift.integrations.orderNow</Translate></span>
                </a>
                <a href="mailto:support@digiquip.no?subject=K-reg Integration Order" className="integration-email-btn">
                    <span className="email-icon">✉️</span>
                    <span><Translate>bedrift.integrations.emailUs</Translate></span>
                </a>
            </div>
            <br />
            <p>
                <Translate>bedrift.integrations.hmsInfo</Translate> <a href="https://sentralregisteret.no/kontakt-oss/" target="_blank" rel="noopener noreferrer"><Translate>bedrift.integrations.here</Translate></a>
            </p>
            <br />
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    img: "img/SikkerBruk.webp", // Placeholder image - to be defined
    embedCode: embeddedForm,
    isUnorderedList: false
}

const bedriftRecords = {
    bedriftBannerData,
    bedriftgroupsData,
    bedriftbenefitsData,
    bedriftIntegrationsData,
}

export default bedriftRecords;