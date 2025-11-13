import clsx from "clsx";
import { useState } from "react";
import BrandLogo from "../BrandLogo";
import Link from '@docusaurus/Link';
import Button from "../Button";
import Translate from "@docusaurus/Translate";

// CustomerStories component - separate from News to avoid CSS conflicts
export default function CustomerStories({title, description, dyntubeKey, youtubeVideoBanner, isVideo, imageBanner, blogLink }) {

    const [value, setValue] = useState(null);
    let button = <Translate>general.readmore</Translate>

    return (<section className="customer-story-section">
            <div className="row">
                <div className={clsx("col col--5")}>
                    <div className="customer-story-detail">
                        <h2 className="customer-story-title">
                            <Link href={blogLink}>
                                {title}
                                <span className="orange">.</span>
                            </Link>
                        </h2>
                        <p className="customer-story-detail-text" dangerouslySetInnerHTML={{__html: description}}></p>

                        <div className='customer-story-readmore'>
                            <Button 
                                label={button} 
                                isIcon={true} 
                                link={blogLink} 
                                btnSize="md"
                            />
                        </div>
                    </div>
                </div>
                <div className={clsx("col col--6 col--offset-1")}>
                    <div className="customer-story-videosection">
                        {isVideo ? <>
                            {value ? "" : <BrandLogo Img={youtubeVideoBanner} width={''} height={''} alt={''}/>}
                            <div
                                data-dyntube-key={dyntubeKey}
                                data-controls="false"
                                style={{width: '100%', height: 'auto'}}
                            ></div>
                        </> : <>
                            <Link href={blogLink}>
                                <BrandLogo Img={imageBanner} width={''} height={''} alt={''}/>
                            </Link>
                        </>}
                    </div>
                </div>
            </div>
        </section>
    );
}

