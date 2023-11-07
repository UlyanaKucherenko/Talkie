import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.footerContainer}`}>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/">Our Team</NavLink>
      <span>2023</span>
    </div>
  </footer>
);

export default Footer;
