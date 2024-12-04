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
            <p><Translate>bedrift.benefits.arg2</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/workequipment/daily-inspections.webp",
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

const bedriftcampaignData = {
    className: "bedrift-campaign-section",
    titleWithHTML: (
        <>
            <Translate>bedrift.campaign.title</Translate>
        </>
    ),

    descriptionWithHTML: (
        <>
            <p><Translate>bedrift.campaign.arg1</Translate></p>
            <p><Translate>bedrift.campaign.arg2</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/competence-images/practical-training.webp",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>bedrift.campaign.point1</Translate></li>
                <li><Translate>bedrift.campaign.point2</Translate></li>
                <li><Translate>bedrift.campaign.point3</Translate></li>
            </ul>
        </>)
}

const bedriftRecords = {
    bedriftBannerData,
    bedriftbenefitsData,
    bedriftcampaignData,
}

export default bedriftRecords;