import React, { useEffect } from "react";
import clsx from "clsx";
import MainLayout from "../../components/MainLayout";
import eventDetail from "../../../data/eventContent";

function EventDetail() {

  useEffect(() => {

    // APPENDING MAILCHIMP SCRIPTS
    const mailServiceDiv = document.getElementById('mailService');
    var script = null
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    jqueryScript.type = 'text/javascript';
    mailServiceDiv.appendChild(jqueryScript);

    jqueryScript.onload = () => {

        const externalScript = document.createElement('script');
        externalScript.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        externalScript.type = 'text/javascript';
        mailServiceDiv.appendChild(externalScript);

        externalScript.onload = () => {

            script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = `
                (function($) {
                  // alert('hello')
                  window.fnames = new Array(); window.ftypes = new Array();
                  fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';
                  fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';
                  fnames[3]='ADDRESS';ftypes[3]='address';
                  // Translated default messages for the $ validation plugin.
                  // Locale: NO (Norwegian)
                  $.extend($.validator.messages, {
                    required: "Dette feltet er obligatorisk.",
                    maxlength: $.validator.format("Maksimalt {0} tegn."),
                    minlength: $.validator.format("Minimum {0} tegn."),
                    rangelength: $.validator.format("Angi minimum {0} og maksimum {1} tegn."),
                    email: "Oppgi en gyldig epostadresse.",
                    url: "Angi en gyldig URL.",
                    date: "Angi en gyldig dato.",
                    dateISO: "Angi en gyldig dato (&ARING;&ARING;&ARING;&ARING;-MM-DD).",
                    dateSE: "Angi en gyldig dato.",
                    number: "Angi et gyldig nummer.",
                    numberSE: "Angi et gyldig nummer.",
                    digits: "Skriv kun tall.",
                    equalTo: "Skriv samme verdi igjen.",
                    range: $.validator.format("Angi en verdi mellom {0} og {1}."),
                    max: $.validator.format("Angi en verdi som er mindre eller lik {0}."),
                    min: $.validator.format("Angi en verdi som er st&oslash;rre eller lik {0}."),
                    creditcard: "Angi et gyldig kredittkortnummer."
                  });
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
            `;

            mailServiceDiv.appendChild(script);
        }


    };

    // APPENDING MAILCHIMP CSS
    const cssLink = document.createElement('link');
    cssLink.href = "//cdn-images.mailchimp.com/embedcode/classic-061523.css";
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';

    // Append the link element to the head of the document
    const firstChild = document.head.firstChild;

    document.head.insertBefore(cssLink, firstChild);

    return () => {
      mailServiceDiv.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="homepage-banner">
        <div className={clsx("hero-25 hero hero--primary heroBanner eventpage")}>
          <div className="container">
            <p className="ebtitle">{eventDetail.event}</p>
            <h3 className="section-title">
              {eventDetail.title}
              <span className="orange">.</span>
            </h3>
            <h5>{eventDetail.date}</h5>
            <div className="eventpage-wrapper">
              <div className="row">
                <div className={clsx("col col--6")}>
                  <div className="eventdetail">
                    {/* Event Presentors Detail */}
                    <div className="presentors">

                      {eventDetail.presentors &&
                        eventDetail.presentors.map((presenter, index) => (
                          <div key={index} className="presenter light-bg-grey">
                            <div className="team-image">
                              <img src={presenter.image} alt={presenter.name} />
                            </div>
                            <div>
                              <p>{presenter.name}</p>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Event Detail */}
                    <div className="e-description">
                      <p>{eventDetail.description}</p>
                      <div>
                        <ul className="e-keydetails">
                            {eventDetail.keypoints && eventDetail.keypoints.map((item, index) => (
                              <li key={index} className="e-keydetails-item">
                                  <p className="e-keydetails-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                                  <p className="e-keydetails-item-desc">{item.description}</p>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={clsx("col col--5 col--offset-1 ")}>
                  <div className="signup-form-service light-bg-grey" id="mailService">

                    {/* Embedded MailChimp HTML STARTS */}
                    <div id="mc_embed_shell">
                      <div id="mc_embed_signup">
                        <form action="https://digiquip.us21.list-manage.com/subscribe/post?u=45bf490556cbc57d81d50c4f6&amp;id=e240c26309&amp;v_id=274&amp;f_id=00eb87e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                          <div id="mc_embed_signup_scroll">
                            <h2>Webinar</h2>
                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required=""  />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-FNAME">First Name </label>
                              <input type="text" name="FNAME" className=" text" id="mce-FNAME"  />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-LNAME">Last Name </label>
                              <input type="text" name="LNAME" className=" text" id="mce-LNAME"  />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-PHONE">Phone Number </label>
                              <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE"  />
                            </div>
                            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                              <div className="content__gdpr">
                                <label>Samtykker</label>
                                <p>Nedenfor kan du velge hvordan du ønsker å få informasjon fra oss.</p>
                                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                  <label className="checkbox subfield" htmlFor="gdpr2194">
                                    <input type="checkbox" id="gdpr_2194" name="gdpr[2194]" className="gdpr" value="Y" /><span>E-post</span></label>
                                  <label className="checkbox subfield" htmlFor="gdpr2195">
                                    <input type="checkbox" id="gdpr_2195" name="gdpr[2195]" className="gdpr" value="Y" /><span>SMS</span></label>
                                </fieldset>
                                <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website, https://digiquip.no/docs/category/juridisk. </p>
                              </div>
                              <div className="content__gdprLegal">
                                <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's
                                  privacy practices.</p>
                              </div>
                            </div>
                            <div hidden="">
                              <input type="hidden" name="tags" value="2975920" />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                            </div>
                            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                              <input type="text" name="b_45bf490556cbc57d81d50c4f6_e240c26309" tabIndex="-1"  />
                            </div>
                            <div className="clear">
                              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Embedded MailChimp HTML ENDS */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="bg"></span>
        </div>
      </section>
    </>
  );
}

// event page
export default function Event() {
  return (
    <MainLayout>
      <EventDetail />
    </MainLayout>
  );
}
