import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../../store';
import { TOGGLE_THEME } from '../../../../store/theme';
import { IconUA } from '../../../icons/IconUA';
import { IconEN } from '../../../icons/IconEN';
import { RButtonIcon } from '../../../ui/RButtonIcon';
import { IconLightTheme } from '../../../icons/IconLightTheme';
import styles from './index.module.css';

export const ThemeLangSwitcher = () => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  const onSwitchTheme = (): void => {
    dispatch(TOGGLE_THEME());
  };

  return (
    <div className={styles.switcher}>
      <RButtonIcon
        icon={i18n.language === 'en' ? IconUA : IconEN}
        type="button"
        defaultColorIcon="light"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
        }
      />
      <RButtonIcon
        icon={IconLightTheme}
        type="button"
        onClick={() => onSwitchTheme()}
        className={styles.themeButton}
      />
    </div>
  );
};
