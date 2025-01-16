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
        </>
    ),
    mediaType: 'embedded', // 'image' || 'youtube' || 'dyntube' || 'embedded'
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
    img: "img/prosjekt-holtskogen.jpg",
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

const bedriftequipmentData = {
    className: "bedrift-equipment-section",
    titleWithHTML: (
        <>
            <Translate>bedrift.equipment.title</Translate>
        </>
    ),

    descriptionWithHTML: (
        <>
            <p><Translate>bedrift.equipment.arg2</Translate></p>
            <p><Translate>bedrift.equipment.arg3</Translate></p>
            <p><Translate>bedrift.equipment.arg4</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/skanner-utstyr.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <div className="btn-container"> 
            <a href="https://digiquip.no/docs/KVIPP/equipment" target="docs/KVIPP/equipment">
              <button className="btn-t-1 calculator-button">Les mer om merking av utstyr</button>
            </a>
          </div>
        </>
        ),
};

const bedriftRecords = {
    bedriftBannerData,
    bedriftbenefitsData,
    bedriftgroupsData,
    bedriftequipmentData,
}

export default bedriftRecords;