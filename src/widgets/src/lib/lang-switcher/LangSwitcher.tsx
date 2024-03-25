import { Button } from '@utils/ui';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface LangSwitcherProps {}

export function LangSwitcher(props: LangSwitcherProps) {
  const {i18n} = useTranslation();
  const handleLangSwitch = ()=> i18n.changeLanguage(i18n.language==='ru' ? 'en': 'ru')
  
return (
  <Button data-testid= 'lang-switcher' onClick={handleLangSwitch}>{i18n.language}</Button>
);
}

export default LangSwitcher;
