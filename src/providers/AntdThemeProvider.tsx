import React from 'react';
import PropTypes from 'prop-types';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { getCurrentLanguage } from '@/utils/i18n';
import { REGIONS } from '@/constants/i18n';


const AntdThemeProvider: React.FC = ({ children }) => (
  <>
    <ConfigProvider locale={REGIONS[getCurrentLanguage()].antdLocale}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigProvider>
  </>
);

AntdThemeProvider.propTypes = {
  children: PropTypes.any,
};

export default AntdThemeProvider;
