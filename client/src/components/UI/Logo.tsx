import { IconKeyboard } from '@/assets/image';
import styles from '@/styles/UI/Logo.module.scss';

interface Props {
  colored: boolean;
}

export default function Logo(props: Props) {
  const { colored } = props;

  return (
    <div
      className={`${styles.logo} ${
        styles[`logo--${colored ? 'color' : 'nocolor'}`]
      }`}
    >
      <IconKeyboard className={styles.icon} />
      <div className={styles['text-div']}>
        <span className={styles['text-div__title']}>BroTypes</span>
        <span className={styles['text-div__subtitle']}>Test your typing speed with your Bro's</span>
      </div>
    </div>
  );
}
