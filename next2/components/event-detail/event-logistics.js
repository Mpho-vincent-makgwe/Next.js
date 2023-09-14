
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import Addr from '../icons/Location-icon';
import Calender from '../icons/Calender-icon';
import Image from 'next/image';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} height={1000} width={1000} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={Calender}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={Addr}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
