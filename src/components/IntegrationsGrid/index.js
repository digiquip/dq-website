import React, { useState, useEffect } from 'react';
import ExpandableCard from '../ExpandableCard';
import Translate from '@docusaurus/Translate';
import './styles.css';

export default function IntegrationsGrid({ integrations }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (expandedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedCard]);

  return (
    <div className="integrations-grid">
      <div className="integrations-header">
        <h2 className="integrations-title">
          <Translate id="integrations.grid.title" description="Integrations grid title">
            Kompetanseregisteret (K-REG).
          </Translate>
        </h2>
      </div>
      
      <div className="integrations-cards">
        {integrations.map((integration, index) => (
          <ExpandableCard
            key={integration.id}
            id={integration.id}
            title={integration.title}
            description={integration.description}
            points={integration.points}
            image={integration.image}
            icon={integration.icon}
            link={integration.link}
            pricingModels={integration.pricingModels}
            note={integration.note}
            isExpanded={expandedCard === integration.id}
            onToggle={() => handleCardToggle(integration.id)}
          />
        ))}
      </div>
    </div>
  );
}
