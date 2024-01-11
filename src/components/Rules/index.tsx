import { useTranslation } from 'react-i18next';
import { RAccordion } from '../RAccordion';
import styles from './index.module.css';

export const Rulles = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.rules}>
      <RAccordion title={t('rules.title')} initialState={false}>
        <ul>
          {t('rules.items', { returnObjects: true }).map((rule, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </RAccordion>
    </div>
  );
};
