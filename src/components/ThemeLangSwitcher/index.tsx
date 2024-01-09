import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { TOGGLE_THEME, themeSelector } from '../../store/theme';
import { IconUA } from '../icons/IconUA';
import { IconEN } from '../icons/IconEN';
import { RButtonIcon } from '../ui/RButtonIcon';
import { IconLightTheme } from '../icons/IconLightTheme';
import styles from './index.module.css';
import { ThemeEnum } from '../../utils/const';
import { IconDarkTheme } from '../icons/IconDarkTheme';

type ThemeLangSwitcherProps = {
  className?: string;
};

export const ThemeLangSwitcher = ({ className }: ThemeLangSwitcherProps) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { mode } = useSelector(themeSelector);

  const onSwitchTheme = (): void => {
    const newTheme = mode === ThemeEnum.LIGHT ? 'dark' : 'light';
    dispatch(TOGGLE_THEME(newTheme === 'dark'));
  };

  let classNameSwitcher = styles.switcher;

  if (className) {
    classNameSwitcher = `${classNameSwitcher} ${className}`;
  }

  return (
    <div className={classNameSwitcher}>
      <RButtonIcon
        icon={i18n.language === 'en' ? IconUA : IconEN}
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
        }
        className={styles.langButton}
      />
      <RButtonIcon
        icon={mode === ThemeEnum.DARK ? IconLightTheme : IconDarkTheme}
        type="button"
        onClick={() => onSwitchTheme()}
        className={styles.themeButton}
      />
    </div>
  );
};
