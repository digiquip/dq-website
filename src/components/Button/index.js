import Link from '@docusaurus/Link';

// Clean Button component with simple orange border style
export default function Button(props) {
  const {
    label,
    isIcon = false,
    link,
    btnSize = 'md', // sm, md, lg, xl
    disabled = false,
    fullWidth = false,
    className = '',
    onClick,
    ...restProps
  } = props;

  // Generate button classes based on props
  const getButtonClasses = () => {
    const baseClasses = ['btn', `btn--${btnSize}`];
    
    if (fullWidth) baseClasses.push('btn--full-width');
    if (disabled) baseClasses.push('btn--disabled');
    if (className) baseClasses.push(className);
    
    return baseClasses.join(' ');
  };

  // Handle button content
  const buttonContent = (
    <>
      <span className="btn__text">{label}</span>
      {isIcon && (
        <span className="btn__icon">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H12M12 6L7.2 1M12 6L7.2 11" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </span>
      )}
    </>
  );

  // If it's a link button
  if (link) {
    return (
      <Link 
        to={link} 
        className={getButtonClasses()}
        {...restProps}
      >
        {buttonContent}
      </Link>
    );
  }

  // If it's a regular button
  return (
    <button
      type="button"
      className={getButtonClasses()}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {buttonContent}
    </button>
  );
}
