import Translate from '@docusaurus/Translate';

const competenceBannerData =
{
    className: "competencebanner",
    titleWithHTML: (
        <>
            <Translate>competence.banner.title1</Translate> <br></br>
            <Translate>competence.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
    descriptionWithHTML: (
        <>
            <h3><Translate>competence.banner.title3</Translate></h3>
            <p><Translate>competence.banner.arg1</Translate></p>
            <p><Translate>competence.banner.arg2</Translate></p>
        </>
    ),
    img: "img/competence-images/competence-banner-img.webp",
}

const practicalTrainingData =
{
    className: "practical-training-section",
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
    img: "img/competence-images/practical-training.webp",
    imgDescriptions: (<><Translate>competence.practical_training.img_description</Translate></>),
    isUnorderedList: false
};

const digitalTrainingData =
{
    className: "qrissue-section light-bg-grey",
    titleWithHTML: (
        <>
            <Translate>competence.digital_training.title</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>competence.digital_training.arg1</Translate></p>
            <p><Translate>competence.digital_training.arg2</Translate></p>
        </>
    ),
    img: "img/competence-images/QR-code-img.webp",
    imgDescriptions: (<Translate>competence.digital_training.img_description</Translate>),
    isUnorderedList: false
};


const groupHelpData =
{
    className: "grouphelp-section",
    titleWithHTML: (
        <>
            <Translate>competence.grouphelp.title1</Translate> <br></br>
            <Translate>competence.grouphelp.title2</Translate> <br></br>
            <Translate>competence.grouphelp.title3</Translate> <br></br>
            <Translate>competence.grouphelp.title4</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>competence.grouphelp.arg</Translate></p>
        </>
    ),
    img: "img/competence-images/groups-help.webp",
    imgDescriptions: (
        <>
            <Translate>competence.grouphelp.img_description</Translate>
        </>
    ),
    isUnorderedList: false
};



const CompetenceRecords = {
    competenceBannerData,
    practicalTrainingData,
    digitalTrainingData,
    groupHelpData
}


export default CompetenceRecords;