import clsx from "clsx";

export default function CompetenceGrid(props) {
  let data = props.record
  // className="practical-training-section section-pd"
  return (
    <section className={`${data.className} section-pd`}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className='product-content-left'>
              <h3 className='section-title'>{data.titleWithHTML}</h3>
              {data.descriptionWithHTML}
            </div>

            {data.isUnorderedList &&
              data.unorderedListData
            }
          </div>
          <div className={clsx("col col--6")}>
            <div className='sikker-img'>
              <img src={data.img}></img>
            </div>
            <p className='image-title'>{data.imgDescriptions}</p>

          </div>
        </div>
      </div>
    </section>
  );
}
