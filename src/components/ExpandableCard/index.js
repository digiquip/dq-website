import React, { useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import './styles.css';

export default function ExpandableCard({ id, title, description, points, image, isExpanded, onToggle, link, pricingModels, note }) {
  // Helper function to safely get text content from React elements
  const getTextContent = (element) => {
    if (typeof element === 'string') return element;
    if (React.isValidElement(element)) {
      // If it's a Translate component, get the children
      if (element.type === Translate) return element.props.children;
      // For other React elements, try to get text content
      return element.props.children || '';
    }
    return '';
  };

  // Get text content for preview
  const descriptionText = getTextContent(description);
  const previewText = descriptionText.substring(0, 120) + '...';

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
                    {descriptionText.replace('Les mer på Sentralregisteret.no →', '').trim()}
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
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {pricingModels && pricingModels.length > 0 && (
                    <div className="pricing-models">
                      <div className={`pricing-options${pricingModels.length > 1 ? ' two-columns' : ''}`}>
                        {pricingModels.map((model, index) => (
                          <div key={index} className="pricing-option">
                            <h4 className="pricing-option-title">{model.title}</h4>
                            <p className="pricing-option-description">{model.description}</p>
                            <div className="pricing-option-price">{model.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {note && (
                    <div className="integration-note">
                      <p className="note-text">{note}</p>
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
