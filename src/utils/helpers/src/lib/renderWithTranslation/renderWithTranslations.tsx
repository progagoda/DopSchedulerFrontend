import React, {ReactNode } from "react";
import {render} from '@testing-library/react'
import {i18n} from '@utils/i18n';
import { I18nextProvider } from 'react-i18next';

export function renderWithTranslation(component: ReactNode ){
    return render(
      <I18nextProvider i18n={i18n.default}>
        {component}
      </I18nextProvider>
   );
}