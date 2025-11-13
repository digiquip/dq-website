import React from 'react';
import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";
import Button from '../src/components/Button';

const sannBannerData =
{
    className: "sannbanner",
    titleWithHTML: (
        <>
            <Translate>sann.banner.title1</Translate> <br></br>
            <Translate>sann.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
}

const sannBenefitsData =
{
    className: "sann-benefits-section",
    blogLink: '/sann',
    titleWithHTML: (
        <>
            <Translate>sann.benefits.title1</Translate>  <br></br>
            <Translate>sann.benefits.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>sann.benefits.arg1</Translate></p>
            <p><Translate>sann.benefits.arg2</Translate></p>
            <p><Translate>sann.benefits.arg3</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: '',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/kvipp.png",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <div className="btn-container"> 
              <Button 
                label={<Translate>test-kvipp-button</Translate>}
                link="https://kvipp.it/" 
                btnSize="md"
                isIcon
              />
          </div>
        </>
        ),
};

const sannGetStartedData =
{
    className: "sann-getstarted-section",
    titleWithHTML: (
        <>
            <Translate>sann.get-started.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>sann.get-started.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'dyntube' || 'embedded'
    dyntubeKey: '',
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/SKANNER-SERIEPLATE.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>sann.get-started.point1</Translate></li>
                <li><Translate>sann.get-started.point2</Translate></li>
                <li><Translate>sann.get-started.point3</Translate></li>
            </ul>
        </>
    ),
};

const SannRecords = {
    sannBannerData,
    sannBenefitsData,
    sannGetStartedData,
}

export default SannRecords;

