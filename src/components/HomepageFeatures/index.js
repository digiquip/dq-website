import clsx from 'clsx';
import Button from '../Button';
import Translate from '@docusaurus/Translate';


export default function HomepageFeatures(props) {
  let className =  props.record.className;
  let title =  props.record.title;
  let Img =  props.record.Img;
  let description =  props.record.description;
  let button = <Translate>general.readmore</Translate>

  return (
    <section className={className}>
    <div className='container'>
      <div className="row">
        <div className={clsx('col col--12')}>
          {title}
        </div>
        <div className={clsx('col col--5')}>
          <div className='sikker-img'>
            <img src={Img} alt=''></img></div>
        </div>
        <div className={clsx('col col--7')}>
          <div className='sikker-content'>
            {description}
            <Button label={button} isIcon={true} />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
