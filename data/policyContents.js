import React from 'react';
import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";
import Button from '../src/components/Button';

const policyBannerData =
{
    className: "policyBanner",
    titleWithHTML: (
        <>
            <Translate>policy.banner.title1</Translate> <br></br>
            <Translate>policy.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
}

const policyWhyData =
{
    className: "policy-why-section",
    blogLink: '/kvipp',
    titleWithHTML: (
        <>
            <Translate>policywhy.title1</Translate>  <br></br>
            <Translate>policywhy.title2</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>policywhy.arg1</Translate></p>
            <p><Translate>policywhy.arg2</Translate></p>
            <p><Translate>policywhy.arg3</Translate></p>
            <ul className='section-list' style={{marginTop: '0.5rem'}}>
                <li><Translate>policywhy.point1</Translate></li>
                <li><Translate>policywhy.point2</Translate></li>
            </ul>
        </>
    ),
    mediaType: 'image',
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/trygt-hjem.png",
    embedCode: embeddedForm,
    imgStyle: { maxWidth: '300px', height: 'auto' },
};

const policyWhatData =
{
    className: "policy-what-section bedriftbenefits-section",
    titleWithHTML: (
        <>
            <Translate>policy-what.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>policy-what.arg1</Translate></p>
            <p><Translate>policy-what.point3</Translate></p>
            <ul className='section-list'>
                <li><Translate>policy-what.point4</Translate></li>
                <li><Translate>policy-what.point4b</Translate></li>
                <li><Translate>policy-what.point4c</Translate></li>
            </ul>
            <p style={{marginTop: '0.25rem'}}><strong><Translate>policy-what.point5</Translate></strong></p>
            <div className="btn-container" style={{marginTop: '1rem'}}>
                <Button 
                  label={<Translate>policy-what.contact-button</Translate>}
                  link="/contact" 
                  btnSize="md"
                  isIcon
                />
            </div>
        </>
    ),
    mediaType: 'image',
    dyntubeKey: 'cWUjx9Cc0Ua3VDfyW0rVQ',
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/SKANNER-SERIEPLATE.jpg",
    embedCode: embeddedForm,
    imgStyle: { maxWidth: '300px', height: 'auto' },
};

const PolicyRecords = {
    policyBannerData,
    policyWhyData,
    policyWhatData,
}

export default PolicyRecords;
