import Link from '@docusaurus/Link';
import './ButtonDropdown.css';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

// Button component
export default function ButtonDropdown() {
    return (
        <div className="dropdown">
            <button className="btn red-btn dropdown-btn"><Translate>navbar.label.contact</Translate></button>
            <div className="dropdown-content">
                <Link href="#"><Translate>navbar.label.contact_us</Translate></Link>
                <Link href="#"><Translate>navbar.label.book_meeting</Translate></Link>
            </div>
        </div>
    );
}
