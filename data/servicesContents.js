import React from 'react';
import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";

const servicesBannerData =
{
    className: "servicesBanner",
    titleWithHTML: (
        <>
            <Translate>services.banner.title1</Translate> <br></br>
            <Translate>services.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
}

const servicesWhyData =
{
    className: "services-why-section",
    blogLink: '/kvipp',
    titleWithHTML: (
        <>
            <Translate>serviceswhy.title1</Translate>  <br></br>
            <Translate>serviceswhy.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>serviceswhy.arg1</Translate></p>
            <p><Translate>serviceswhy.arg2</Translate></p>
            <p><Translate>serviceswhy.arg3</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/trygt-hjem.png",
    embedCode: embeddedForm,
};

const servicesWhatData =
{
    className: "services-what-section",
    titleWithHTML: (
        <>
            <Translate>services-what.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>services-what.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'dyntube' || 'embedded'
    dyntubeKey: 'cWUjx9Cc0Ua3VDfyW0rVQ',
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/SKANNER-SERIEPLATE.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>services-what.point1</Translate></li>
                <li><Translate>services-what.point2</Translate></li>
                <li><Translate>services-what.point3</Translate></li>
                </ul>
        </>
    ),
};

const servicesHowData =
{
    className: "services-how-section",
    titleWithHTML: (
        <>
            <Translate>services-how.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>services-how.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'xV5cqsg0OEWk5fHEMMNxSA',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/betonmast.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>services-how.point1</Translate></li>
                <li><Translate>services-how.point2</Translate></li>
                <li><Translate>services-how.point3</Translate></li>
            </ul>
        </>
    ),
};

const ServicesRecords = {
    servicesBannerData,
    servicesWhyData,
    servicesWhatData,
    servicesHowData,
}

export default ServicesRecords;
