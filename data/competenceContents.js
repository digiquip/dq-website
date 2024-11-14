import Link from '@docusaurus/Link';
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
    img: "img/kvipp.png",
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>kvipp.point1</Translate></li>
                <li><Translate>kvipp.point2</Translate></li>
                <li><Translate>kvipp.point3</Translate></li>
            </ul>
        </>)
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
            <Translate>competence.grouphelp.title3</Translate>
        </>
    ),
    descriptionWithHTML: (
        <>
            <p><Translate>competence.grouphelp.arg</Translate></p>
            <p><Translate>competence.grouphelp.arg2</Translate></p>
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
}


export default CompetenceRecords;