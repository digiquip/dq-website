import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

export default function SignIn() {
  const {siteConfig} = useDocusaurusContext();

  const handleDigiQuipSignIn = () => {
    window.location.href = 'https://pim.digiquip.com/authenticate/idp/init?destination=none&interactionMode=signIn&existingSessionId=';
  };

  const handleKvippSignIn = () => {
    window.location.href = 'https://kvipp.it/admin';
  };

  return (
    <Layout
      title="Sign In"
      description="Sign in to DigiQuip or Kvipp">
      <main>
        <div className="signInContainer">
          <div className="signInCard">
            <h1 className="signInTitle">
              <Translate>signin.title</Translate>
            </h1>
            <p className="signInSubtitle">
              <Translate>signin.subtitle</Translate>
            </p>
            
            <div className="signInOptionsContainer">
              <div className="signInOptionCard signInCardSpacing" onClick={handleKvippSignIn}>
                <div className="signInOptionContent">
                  <img src={useBaseUrl('/img/kvipp.png')} alt="Kvipp logo" style={{ width: '74px', margin: '0 auto 0.5rem auto', display: 'block' }} />
                  <p className="signInOptionDescription">
                    <Translate>signin.kvipp.description</Translate>
                  </p>
                </div>
                <div className="signInOptionArrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="signInKvippInfoBox signInCardSpacing">
                <Translate>kvipp.freeuse.info.prefix</Translate>{' '}
                <a
                  href="https://kvipp.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#f05a09', textDecoration: 'underline' }}
                >
                  Kvipp
                </a>{' '}
                <Translate>kvipp.freeuse.info.suffix</Translate>
              </div>

              <div className="signInOptionCard signInCardSpacing" onClick={handleDigiQuipSignIn}>
                <div className="signInOptionContent">
                  <h3 className="signInOptionTitle">DigiQuip</h3>
                  <p className="signInOptionDescription">
                    <Translate>signin.digiquip.description</Translate>
                  </p>
                </div>
                <div className="signInOptionArrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="signInContactCard signInCardSpacing">
                <div className="signInContactInfo">
                  <div className="signInContactDetailsBlock">
                    <h3 className="signInContactTitle">
                      <Translate>signin.contact.title</Translate>
                    </h3>
                    <div className="signInContactDetails">
                      <h4 className="signInContactName">Tom Freddy Braathen</h4>
                      <div className="signInContactLinks">
                        <a href="tel:+4745488525" className="signInContactLink">
                          <img src={useBaseUrl('/icons/phone.svg')} alt="Phone" />
                          +47 45 48 85 25
                        </a>
                        <a href="mailto:tfb@digiquip.no" className="signInContactLink">
                          <img src={useBaseUrl('/img/email-icon.svg')} alt="Email" />
                          tfb@digiquip.no
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src={useBaseUrl('/img/competence-images/tom_freddy.webp')} alt="Tom Freddy Bråthen" className="signInContactImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 