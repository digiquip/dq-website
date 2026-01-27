// BrandLogo component is used to display the brand logo on the page
export default function BrandLogo({ Img, width, height, alt, zIndex }) {
  const imgProps = {
    src: Img,
    alt: alt || '',
    style: { zIndex: zIndex }
  };
  
  if (width) imgProps.width = width;
  if (height) imgProps.height = height;

  return (
    <img {...imgProps}></img>
  );
}
