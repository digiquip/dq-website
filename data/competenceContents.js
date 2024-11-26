import Link from '@docusaurus/Link';
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

const practicalTrainingData =
{
    className: "practical-training-section",
    blogLink: '/kvipp',
    titleWithHTML: (
        <>
            <Translate>competence.practical_training.title1</Translate>  <br></br>
            <Translate>competence.practical_training.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>competence.practical_training.arg1</Translate></p>
            <p><Translate>competence.practical_training.arg2</Translate></p>
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
            <ul className='section-list'>
                <li><Translate>kvipp.point1</Translate></li>
                <li><Translate>kvipp.point2</Translate></li>
                <li><Translate>kvipp.point3</Translate></li>
            </ul>
            <div className="btn-container"> 
            <a href="https://kvipp.it/" target="Kvipp">
              <button className="btn-t-1 calculator-button">Test Kvipp</button>
            </a>
          </div>
        </>
        ),
};

const kvippBedriftData =
{
    className: "kvipp-bedrift-section",
    titleWithHTML: (
        <>
            <Translate>competence.kvipp_bedrift.title1</Translate>  <br></br>
            <Translate>competence.kvipp_bedrift.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>competence.kvipp_bedrift.arg1</Translate></p>
            <p><Translate>competence.kvipp_bedrift.arg2</Translate></p>
        </>
    ),
    mediaType: 'embedded', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/kvipp.png",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>kvippBedrift.point1</Translate></li>
                <li><Translate>kvippBedrift.point2</Translate></li>
                <li><Translate>kvippBedrift.point3</Translate></li>
            </ul>
        </>)
};

const CompetenceRecords = {
    competenceBannerData,
    practicalTrainingData,
    kvippBedriftData,
}

export default CompetenceRecords;
