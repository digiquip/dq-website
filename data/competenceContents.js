import React from 'react';
import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";

const competenceBannerData =
{
    className: "competencebanner",
    titleWithHTML: (
        <>
            <Translate>competence.banner.title1</Translate> <br></br>
            <Translate>competence.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
}

const kvippBenefitsData =
{
    className: "kvipp-benefits-section",
    blogLink: '/kvipp',
    titleWithHTML: (
        <>
            <Translate>kvippbenefits.title1</Translate>  <br></br>
            <Translate>kvippbenefits.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>kvippbenefits.arg1</Translate></p>
            <p><Translate>kvippbenefits.arg2</Translate></p>
            <p><Translate>kvippbenefits.arg3</Translate></p>
        </>
    ),
    mediaType: 'dyntube', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/kvipp.png",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <div className="btn-container"> 
            <a href="https://kvipp.it/" target="Kvipp">
              <button className="btn-t-1 calculator-button">Test Kvipp</button>
            </a>
          </div>
        </>
        ),
};

const kvippGetStartedData =
{
    className: "kvipp-getstarted-section",
    titleWithHTML: (
        <>
            <Translate>kvipp-get-started.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>kvipp-get-started.arg1</Translate></p>
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
                <li><Translate>kvipp-get-started.point1</Translate></li>
                <li><Translate>kvipp-get-started.point2</Translate></li>
                <li><Translate>kvipp-get-started.point3</Translate></li>
                <button className="button"><a href="docs/Kvipp/get_started">Les mer her</a></button>
                </ul>
        </>
    ),
};

const kvippSituationData =
{
    className: "kvipp-situation-section",
    titleWithHTML: (
        <>
            <Translate>kvipp-situation.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>kvipp-situation.arg1</Translate></p>
        </>
    ),
    mediaType: 'dyntube', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'xV5cqsg0OEWk5fHEMMNxSA',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/kvipp.png",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>kvipp-situation.point1</Translate></li>
                <li><Translate>kvipp-situation.point2</Translate></li>
                <li><Translate>kvipp-situation.point3</Translate></li>
            </ul>
        </>
    ),
};

const CompetenceRecords = {
    competenceBannerData,
    kvippBenefitsData,
    kvippGetStartedData,
    kvippSituationData,
}

export default CompetenceRecords;
