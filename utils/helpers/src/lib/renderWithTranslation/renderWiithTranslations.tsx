import { ReactNode } from "react";
import {render} from '@testing-library/react'
import {i18nForTest} from '@utils/i18n';
import { I18nextProvider } from 'react-i18next';
import React = require("react");


export function renderWithTranslation(component: ReactNode ){
    return render(
        <I18nextProvider i18n={i18nForTest.default}>
        {component}
      </I18nextProvider>
   );
}