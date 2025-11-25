import clsx from "clsx";
import Button from "../Button";
import Translate from '@docusaurus/Translate';
import './styles.css';

// TwoColumnSection component for displaying two side-by-side sections
export default function TwoColumnSection(props) {
  const { leftSection, rightSection } = props;

  if (!leftSection || !rightSection) {
    return null;
  }

  return (
    <section className="two-column-section section-pd">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className={clsx("column-section role-card", leftSection.label && "has-label")}>
              {leftSection.label && (
                <div className="card-label">{leftSection.label}</div>
              )}
              {leftSection.titleWithHTML && (
                <h3 className="section-title">{leftSection.titleWithHTML}</h3>
              )}
              {leftSection.descriptionWithHTML && (
                <div className="section-description">
                  {leftSection.descriptionWithHTML}
                </div>
              )}
              {leftSection.buttonLabel && leftSection.buttonLink && (
                <div className="section-button">
                  <Button
                    label={leftSection.buttonLabel}
                    link={leftSection.buttonLink}
                    btnSize="md"
                    isIcon={leftSection.buttonIcon || false}
                    fullWidth={true}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={clsx("col col--6")}>
            <div className={clsx("column-section role-card", rightSection.label && "has-label")}>
              {rightSection.label && (
                <div className="card-label">{rightSection.label}</div>
              )}
              {rightSection.titleWithHTML && (
                <h3 className="section-title">{rightSection.titleWithHTML}</h3>
              )}
              {rightSection.descriptionWithHTML && (
                <div className="section-description">
                  {rightSection.descriptionWithHTML}
                </div>
              )}
              {rightSection.buttonLabel && rightSection.buttonLink && (
                <div className="section-button">
                  <Button
                    label={rightSection.buttonLabel}
                    link={rightSection.buttonLink}
                    btnSize="md"
                    isIcon={rightSection.buttonIcon || false}
                    fullWidth={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

