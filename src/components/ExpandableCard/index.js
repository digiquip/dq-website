import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import './styles.css';

export default function ExpandableCard({ id, title, description, points, image, isExpanded, onToggle, link, pricingModels, note }) {

  // Helper function to safely get text content from React elements
  const getTextContent = (element) => {
    if (typeof element === 'string') return element;
    if (React.isValidElement(element)) {
      // If it's a Translate component, we need to render it to get the text
      if (element.type === Translate) {
        // For Translate components, we'll render them to get the actual text
        // This is a workaround since we can't directly access the translated text
        return element;
      }
      // For other React elements, try to get text content
      return element.props.children || '';
    }
    return '';
  };

  // Helper function to render content that might be Translate components
  const renderContent = (content) => {
    if (typeof content === 'string') return content;
    if (React.isValidElement(content)) {
      if (content.type === Translate) {
        return content;
      }
      return content.props.children || '';
    }
    return content;
  };

  // Get text content for preview - use the same description content but with CSS truncation
  const getPreviewText = (content) => {
    // Always return the same content, but we'll use CSS to truncate it in the preview
    return content;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isExpanded]);

  const previewText = getPreviewText(description);

  return (
    <>
      <div className="expandable-card" onClick={onToggle}>
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        
        <div className="card-preview">
          <p className="card-preview-text">{previewText}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="modal-overlay" onClick={onToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onToggle}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-content-wrapper">
                <div className="modal-text-content">
                  <p className="modal-description">
                    {renderContent(description)}
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="external-link">
                        {' '}<Translate id="integrations.cards.readMore" description="Read more link text">Les mer på Sentralregisteret.no →</Translate>
                      </a>
                    )}
                  </p>
                  {points && (
                    <div className="integration-benefits">
                      {points.map((point, index) => (
                        <div key={index} className="benefit-item">
                          <span className="benefit-icon">✓</span>
                          <span>{renderContent(point)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {pricingModels && pricingModels.length > 0 && (
                    <div className="pricing-models">
                      <div className={`pricing-options${pricingModels.length > 1 ? ' two-columns' : ''}`}>
                        {pricingModels.map((model, index) => (
                          <div key={index} className="pricing-option">
                            <h4 className="pricing-option-title">{renderContent(model.title)}</h4>
                            <p className="pricing-option-description">{renderContent(model.description)}</p>
                            <div className="pricing-option-price">{renderContent(model.price)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {note && (
                    <div className="integration-note">
                      <p className="note-text">{renderContent(note)}</p>
                    </div>
                  )}
                </div>
                {image && (
                  <div className="modal-image-content">
                    <img src={image} alt={getTextContent(title)} className="modal-image" />
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              {!pricingModels || pricingModels.length === 0 ? (
                <p className="modal-price-text">
                  <Translate id="integrations.cards.defaultPrice" description="Default integration price text">
                    For 500kr per måned får du denne integrasjonen.
                  </Translate>
                </p>
              ) : null}
              <div className="integration-cta">
                <a href="tel:69838500" className="integration-phone-btn">
                  <span className="phone-icon">📞</span>
                  <span>69 83 85 00</span>
                </a>
                <a href="mailto:tfb@digiquip.no" className="integration-email-btn">
                  <span className="email-icon">✉️</span>
                  <span><Translate id="integrations.cards.contactEmail" description="Contact email text">Tom Freddy: tfb@digiquip.no</Translate></span>
                </a>
                {id === 'kompetanseregisteret' && (
                  <a href="/bestill-kreg-integrasjon" className="integration-order-btn">
                    <span className="order-icon">👍</span>
                    <span><Translate id="integrations.cards.orderButton" description="Order button text">Bestill</Translate></span>
                  </a>
                )}
                {id === 'onlet' && (
                  <a href="/bestill-onlet-integrasjon" className="integration-order-btn">
                    <span className="order-icon">👍</span>
                    <span><Translate id="integrations.cards.orderButton" description="Order button text">Bestill</Translate></span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
