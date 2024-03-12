import Translate from "@docusaurus/Translate";
import youtubePlayList from './youtubePlayList.js'

const youtubeVideoBanner = 'img/expert-control/expert-control-banner.png';
const youtubeEasyFlowVideoBanner = 'img/expert-control/easy-flow-poster.png';
const youtubeInspectionVideoBanner = 'img/expert-control/inspection-poster.png';
const youtubeLogsVideoBanner = 'img/expert-control/logs-poster.png';


const expertControlBannerData =
{
    className: "workequipmentbanner",
    titleWithHTML: (
        <>
            <Translate>expertcontrol.banner.title1</Translate><span className="orange">.</span>
        </>
    ),
    descriptionWithHTML: (
        <>
            <h3><Translate>expertcontrol.banner.title2</Translate></h3>
            <p><Translate>expertcontrol.banner.arg1</Translate></p>
            <p><Translate>expertcontrol.banner.arg2</Translate></p>
        </>
    ),
    img: "img/expert-control/expert-control-banner.jpg",
}

const easyFlowData =
{
    className: "library-content",
    titleWithHTML: (
        <>
            <Translate>expertcontrol.easyflow.title</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>expertcontrol.easyflow.arg2</Translate></p>
        </>
    ),
    img: "",
    imgDescriptions: (
        <>
            <Translate>expertcontrol.easyflow.img_description</Translate>
        </>
    ),
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>expertcontrol.easyflow.point1</Translate></li>
                <li><Translate>expertcontrol.easyflow.point2</Translate></li>
                <li><Translate>expertcontrol.easyflow.point3</Translate></li>
            </ul>
        </>
    ),
    withPlay: youtubePlayList.easyflowVideoLink.withPaly,
    withoutAutoPlay: youtubePlayList.easyflowVideoLink.withoutAutoPlay,
    youtubeVideoBanner: youtubeEasyFlowVideoBanner,
}

const inspectionData =
{
    className: "library-content light-bg-grey",
    titleWithHTML: (
        <>
            <Translate>expertcontrol.inspection.title</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>expertcontrol.inspection.arg</Translate></p>
        </>
    ),
    img: "",
    imgDescriptions: (
        <>
            <Translate>expertcontrol.inspection.img_description</Translate>
        </>
    ),
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>expertcontrol.inspection.point1</Translate></li>
                <li><Translate>expertcontrol.inspection.point2</Translate></li>
            </ul>
        </>
    ),
    withPlay: youtubePlayList.inspectionVideoLink.withPaly,
    withoutAutoPlay: youtubePlayList.inspectionVideoLink.withoutAutoPlay,
    youtubeVideoBanner: youtubeInspectionVideoBanner,
}

const logsData =
{
    className: "library-content ",
    titleWithHTML: (
        <>
            <Translate>expertcontrol.logs.title</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>expertcontrol.logs.arg</Translate></p>
        </>
    ),
    img: "",
    imgDescriptions: (
        <>
            <Translate>expertcontrol.logs.img_description</Translate>
        </>
    ),
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>expertcontrol.logs.point1</Translate></li>
                <li><Translate>expertcontrol.logs.point2</Translate></li>
                <li><Translate>expertcontrol.logs.point3</Translate></li>
            </ul>
        </>
    ),
    withPlay: youtubePlayList.logsVideoLink.withPaly,
    withoutAutoPlay: youtubePlayList.logsVideoLink.withoutAutoPlay,
    youtubeVideoBanner: youtubeLogsVideoBanner,
}



const ExpertControlRecords = {
    expertControlBannerData,
    easyFlowData,
    inspectionData,
    logsData
}


export default ExpertControlRecords;