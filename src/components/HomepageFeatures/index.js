import clsx from 'clsx';
import Button from '../Button';
import Translate from '@docusaurus/Translate';

// HomepageFeatures component
export default function HomepageFeatures(props) {
  let className =  props.record.className;
  let title =  props.record.title;
  let img =  props.record.img;
  let description =  props.record.description;
  let button = <Translate>general.readmore</Translate>
  let link = props.record.link;

  return (
    <section className={className}>
    <div className='container'>
      <div className="row">
        <div className={clsx('col col--12')}>
          {title}
        </div>
        <div className={clsx('col col--5')}>
          <div className='sikker-img'>
            <img src={img} alt=''></img></div>
        </div>
        <div className={clsx('col col--7')}>
          <div className='sikker-content'>
            {description}
            <Button label={button} isIcon={true} link={link}/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
