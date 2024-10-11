// BrandLogo component is used to display the brand logo on the page
export default function BrandLogo({ Img, width, height, alt, zIndex }) {

  return (
    <img src={Img} width={width} height={height} alt={alt} style={{zIndex: zIndex}}></img>
  );
}
