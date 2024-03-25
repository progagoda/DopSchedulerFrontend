import type { ThemeConfig } from 'antd';
const colors ={
    primary: '#121212',
    secondary: '#1E1E1E',
    text: '#ffffff'
}
export const darkTheme: ThemeConfig = {
   components:{
    Layout: {
        headerBg:  colors.primary,
        siderBg: colors.primary,
        triggerBg: colors.primary,
        bodyBg: colors.secondary,
      },
      Menu: {
        darkItemBg: colors.primary,
      },
      Button:{
        defaultBg: colors.secondary,
        colorText: colors.text
      },
      Typography:{
        colorText: colors.text
      }
   }
}