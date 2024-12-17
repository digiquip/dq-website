import Translate from '@docusaurus/Translate';
import youtubePlayList from "./youtubePlayList";
import embeddedForm from "./EmbeddedForm";


const workEquipmentBannerData =
{
    className: "workequipmentbanner",
    titleWithHTML: (
        <>
            <Translate>workequipment.banner.title1</Translate><span className="orange">.</span>
        </>
    ),
}

const machinesEquipmentData = {
    className: "machines-equipment-section light-bg-grey",
    titleWithHTML: (
        <>
            <Translate>workequipment.machines_equipment.title1</Translate> <br></br>
            <Translate>workequipment.machines_equipment.title2</Translate>
        </>
    ),
    
    descriptionWithHTML: (
        <>
            <p><Translate>workequipment.machines_equipment.arg1</Translate></p>
        
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/workequipment/machines_equipment.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
        
            <ul className='section-list'>
                <li><Translate>workequipment.machines_equipment.point1</Translate></li>
                <li><Translate>workequipment.machines_equipment.point2</Translate></li>
                <li><Translate>workequipment.machines_equipment.point3</Translate></li>
            </ul>
        </>
    )
}


const systematizedDocumentationData = {
    className: "systematizedd-section",
    titleWithHTML: (
        <>
            <Translate>workequipment.systematized_documentation.title</Translate>
        </>
    ),

    descriptionWithHTML: (
        <>
            <p><Translate>workequipment.systematized_documentation.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/workequipment/systematized_documentation.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>workequipment.systematized_documentation.point1</Translate></li>
                <li><Translate>workequipment.systematized_documentation.point2</Translate></li>
                <li><Translate>workequipment.systematized_documentation.point3</Translate></li>
            </ul>
        </>
        ),
}
 
const machineinsightsData = {
    className: "machineinsights-section",
    titleWithHTML: (
        <>
            <Translate>workequipment.machineinsights.title</Translate>
            <Translate>workequipment.machineinsights.title2</Translate>
        </>
    ),
 
    descriptionWithHTML: (
        <>
            <p><Translate>workequipment.machineinsights.arg1</Translate></p>
        </>
    ),
    mediaType: 'image', // 'image' || 'youtube' || 'dyntube' || 'embedded'
    dyntubeKey: 'QHJgV1aEkWC3457eB8PJw',
    withPlay: youtubePlayList.safetyVideoLink.withAutoPlay,
    withoutAutoPlay: youtubePlayList.safetyVideoLink.withoutAutoPlay,
    youtubeVideoBanner: 'img/iframe-banner.jpg',
    img: "img/workequipment/machineinsights.jpg",
    embedCode: embeddedForm,
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>workequipment.machineinsights.point1</Translate></li>
                <li><Translate>workequipment.machineinsights.point2</Translate></li>
                <li><Translate>workequipment.machineinsights.point3</Translate></li>
                <li><Translate>workequipment.machineinsights.point4</Translate></li>
            </ul>
        </>)
}

const WorkEquipmentRecords = {
    workEquipmentBannerData,
    machinesEquipmentData,
    systematizedDocumentationData,
    machineinsightsData,
}

export default WorkEquipmentRecords;