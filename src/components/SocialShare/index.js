import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrandLogo from "../BrandLogo";
import facebookIcon from '../../../static/icons/facebook-icon.png'
import linkedinIcon from '../../../static/icons/linkedin-icon.png'
// ContactUs component
export default function SocialShare({ props }) {

    const location = useLocation();
    const { siteConfig } = useDocusaurusContext();
    const shareUrl = siteConfig.url + location.pathname;
    console.log('SocialShare Page :- ', props, 'ANd Locatrion :- ', location)
    console.log('shareUrl :- ', shareUrl)
    const title = props.title || '';
    return (
        <div className="blog-share text-center">
            <div className="is-divider medium"></div>
            <div className="social-icons">

            {/* `${pathOfImage}` */}

            <a href={ 'https://www.facebook.com/sharer.php?u=' + `${shareUrl}`} 
              data-label="Facebook"
              target="_blank"
              title="Share on Facebook" 
              rel="noopener nofollow">
              <BrandLogo Img={facebookIcon} width={''} height={''} alt={''} />
         </a>


         <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        title="Share on LinkedIn"
        rel="noopener noreferrer nofollow">
        <BrandLogo Img={linkedinIcon} width={''} height={''} alt={''} />
        </a>
          
           

            </div>

        </div>
    );
}
