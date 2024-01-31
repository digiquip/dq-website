
export default function BrandLogo({ Img, width, height, alt }) {

  return (
    <div className='brand-logo'><img src={Img} width={width} height={height} alt={alt}></img></div>
  );
}
