import React, { FC } from "react";
import reactDom from "react-dom";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import { PhoneProviderHoc } from "./context/phoneConext";
import { Button, Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { languagesMap } from "./i18n";

// TODO: 类型处理 把any干掉
// TODO: 前端接入 Oauth
// TODO: husky & lint-staged (配合git缓存区lint处理)
const App: FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (key: typeof languagesMap[0]["key"]) =>
    i18n.changeLanguage(key);

  const languageLists = languagesMap.map((i) => ({
    key: i.key,
    label: (
      <span onClick={() => changeLanguage(i.key)}>
        {t(`login.${i.title}` as any)}
      </span>
    ),
  }));

  const MenuLIst = <Menu items={languageLists} />;

  return (
    <>
      {reactDom.createPortal(
        <div style={{ position: "fixed", top: 20, right: 100 }}>
          <Dropdown overlay={MenuLIst}>
            <Button size="small">{t(`login.${i18n.language}` as any)}</Button>
          </Dropdown>
        </div>,
        document.body
      )}

      <PhoneProviderHoc>{useRoutes(routes)}</PhoneProviderHoc>
    </>
  );
};

export default App;
