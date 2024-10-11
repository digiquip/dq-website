import Link from '@docusaurus/Link';
import './ButtonDropdown.css';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

// Button component
export default function ButtonDropdown() {
    return (
        <div className="contactUsDropdown">
            <div className="dropdown">
                <button className="btn dropdown-btn">
                    <img src="/icons/contact.svg" alt="Contact Us" />
                </button>
                <div className="dropdown-content">
                    <Link href="https://us21.list-manage.com/contact-form?u=45bf490556cbc57d81d50c4f6&form_id=fb2b014417ac7312f80a8bb815f52ab5" target="_blank"><Translate>navbar.label.contact_us</Translate></Link>
                    <Link href="/about"><Translate>navbar.label.book_meeting</Translate></Link>
                </div>
            </div>
        </div>
    );
}
