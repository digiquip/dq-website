import React from 'react';
import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";
import Button from '../src/components/Button';

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
                <Button 
                  label={<Translate>general.readmore</Translate>}
                  link="docs/Kvipp/get_started" 
                  btnSize="md"
                />
                </ul>
        </>
    ),
};

const kvippKregData =
{
    className: "kvipp-kreg-section",
    titleWithHTML: (
        <>
            <Translate>kvipp-kreg.title1</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>kvipp-kreg.arg1</Translate></p>
            <div className="integration-benefits">
                <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span><Translate>kvipp-kreg.point1</Translate></span>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span><Translate>kvipp-kreg.point2</Translate></span>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span><Translate>kvipp-kreg.point3</Translate></span>
                </div>
            </div>
            <div className="integration-cta-single">
                <Button 
                  label={<Translate>read-more-and-order</Translate>}
                  link="/bestill-kreg-integrasjon" 
                  btnSize="md"
                  isIcon
                />
            </div>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'xV5cqsg0OEWk5fHEMMNxSA',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/SikkerBruk.webp",
    embedCode: embeddedForm,
    isUnorderedList: false
};

const CompetenceRecords = {
    competenceBannerData,
    kvippBenefitsData,
    kvippGetStartedData,
    kvippKregData,
}

export default CompetenceRecords;
