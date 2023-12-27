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

type ThemeLangSwitcherProps = {
  colorIcon: 'dark' | 'light';
  className?: string;
};

export const ThemeLangSwitcher = ({
  colorIcon = 'dark',
  className,
}: ThemeLangSwitcherProps) => {
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
        defaultColorIcon={colorIcon}
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
        }
      />
      <RButtonIcon
        icon={IconLightTheme}
        type="button"
        defaultColorIcon={colorIcon}
        onClick={() => onSwitchTheme()}
        className={styles.themeButton}
      />
    </div>
  );
};
