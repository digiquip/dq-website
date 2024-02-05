import Translate from '@docusaurus/Translate';


const workEquipmentBannerData =
{
    className: "workequipmentbanner",
    titleWithHTML: (
        <>
            <Translate>workequipment.banner.title1</Translate><br></br>
            <Translate>workequipment.banner.title2</Translate> <br></br>
            <Translate>workequipment.banner.title3</Translate><span className="orange">.</span>
        </>
    ),

    descriptionWithHTML: (
        <>
            <h3><Translate>workequipment.banner.title4</Translate></h3>
            <p><Translate>workequipment.banner.arg1</Translate></p>
            <p><Translate>workequipment.banner.arg2</Translate></p>
        </>
    ),
    img: "img/workequipment/work-equipment-banner.webp",
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
            <p><Translate>workequipment.systematized_documentation.arg2</Translate></p>
        </>
    ),
    img: "img/workequipment/systematized-documentation.webp",
    imgDescriptions: "",
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>workequipment.systematized_documentation.point1</Translate></li>
                <li><Translate>workequipment.systematized_documentation.point2</Translate></li>
                <li><Translate>workequipment.systematized_documentation.point3</Translate></li>
            </ul>
        </>)
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
            <p><Translate>workequipment.machines_equipment.arg2</Translate></p>
        </>
    ),
    img: "img/workequipment/daily-inspections.webp",
    imgDescriptions: "",
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


const specificCompetenceData =
{
    className: "practical-training-section",
    titleWithHTML: (
        <>
            <Translate>workequipment.specific_competence.title1</Translate> <br></br>
            <Translate>workequipment.specific_competence.title2</Translate>
        </>
    ),

    descriptionWithHTML: (
        <>
            <p><Translate>workequipment.specific_competence.arg1</Translate></p>
            <p><Translate>workequipment.specific_competence.arg2</Translate></p>
        </>
    ),

    img: "img/workequipment/QR_kode_EN.webp",
    imgDescriptions: (
        <>
            <Translate>workequipment.specific_competence.img_description</Translate>
        </>
    ),
    isUnorderedList: false
};



const WorkEquipmentRecords = {
    workEquipmentBannerData,
    systematizedDocumentationData,
    machinesEquipmentData,
    specificCompetenceData
}


export default WorkEquipmentRecords;