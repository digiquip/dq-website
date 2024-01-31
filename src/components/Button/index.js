
export default function Button(props) {

  let label = props.label;
  let isIcon = props.isIcon;
  return (
    <a href='#' className='white-btn btn'>
      <span className="btn_wrapper">
        <span className="btn_text">{label}</span>
        <span className="btn_text">{label}</span>
        {isIcon && <span className="btn_icon"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6H12M12 6L7.2 1M12 6L7.2 11" stroke="#E96847"></path></svg></span>}
      </span>
    </a>
  );
}
