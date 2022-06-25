import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/index';
import { PhoneProviderHoc } from './context/phoneConext';

// TODO: I18n 接入
// TODO: 整理目录结构/文件命名
// TODO: 前端接入 Oauth
// TODO: husky & lint-staged (配合git缓存区lint处理)
const App: FC = () => {
  return <PhoneProviderHoc>{useRoutes(routes)}</PhoneProviderHoc>;
};

export default App;
