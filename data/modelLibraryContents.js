import Translate from "@docusaurus/Translate";

const modelLibraryBannerData =
{
    className: "model-register",
    titleWithHTML: (
        <>
            <Translate>modellibrary.banner.title1</Translate><br></br>
            <Translate>modellibrary.banner.title2</Translate><span className="orange">.</span>
        </>
    ),
    descriptionWithHTML: (
        <>
            <h3><Translate>modellibrary.banner.title3</Translate></h3>
            <p><Translate>modellibrary.banner.arg1</Translate></p>
            <p><Translate>modellibrary.banner.arg2</Translate></p>
        </>
    ),
    img: "img/model-library/model-library-banner.webp",
}

const libraryContentData =
{
    className: "library-content",
    titleWithHTML: (
        <>
            <Translate>modellibrary.library.title</Translate>
        </>
    ),

    descriptionWithHTML: (
        <>
            <p><Translate>modellibrary.library.arg1</Translate></p>
            <p><Translate>modellibrary.library.arg2</Translate></p>
        </>
    ),
    img: "img/model-library/library-img.webp",
    imgDescriptions: "",
    isUnorderedList: true,
    unorderedListData: (
        <>
            <ul className='section-list'>
                <li><Translate>modellibrary.library.point1</Translate></li>
                <li><Translate>modellibrary.library.point2</Translate></li>
                <li><Translate>modellibrary.library.point3</Translate></li>
            </ul>
        </>
    )
}

const ModelLibraryRecords = {
    modelLibraryBannerData,
    libraryContentData
}


export default ModelLibraryRecords;