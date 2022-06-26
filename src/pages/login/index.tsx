import { Modal } from "antd";
import React, { useContext, useMemo } from "react";
import { phoneContext } from "../../context/phoneConext";
import {
  LoginLeft,
  LoginModel,
  LoginRight,
  LoginWrapper,
  Logo,
  ModalFooter,
  ModalTitle,
  OAuthWrapper,
  Other,
  OtherText,
} from "../../style/components/login";
import { QqLogo as QqLogoPng } from "styled/components/login";
import { useAuthModal } from "./useAuthModal";

export interface AuthModalItem {
  component: (key: number) => JSX.Element;
  type: "qq" | "wechat";
}

/**
 * 社会化登陆
 */
const Login: React.FC = () => {
  const { visibleAuthModal, modalInfo, openAuthModal, closeAuthModal } =
    useAuthModal();

  const logoList = useMemo<AuthModalItem[]>(() => {
    return [
      {
        component: () => <QqLogoPng />,
        type: "qq",
      },
      {
        component: () => <div>微信登陆</div>,
        type: "wechat",
      },
    ];
  }, []);

  // 媒体查询
  const isPhone = useContext(phoneContext);

  return (
    <LoginWrapper isPhone={isPhone}>
      <LoginLeft>
        <Logo>logo</Logo>
        <LoginModel>
          <ModalTitle>清风的网站</ModalTitle>
          <ModalFooter>
            <Other>
              <OtherText>更多登陆方式</OtherText>
            </Other>
            <OAuthWrapper>
              {logoList.map((i, index) => (
                <span
                  className="logo-oauth"
                  onClick={() => openAuthModal(i)}
                  key={i.type}
                >
                  {i.component(index)}
                </span>
              ))}
            </OAuthWrapper>
          </ModalFooter>
        </LoginModel>
      </LoginLeft>
      {!isPhone && <LoginRight />}
      {/* Oauth的弹窗 */}
      <Modal
        title={modalInfo.title}
        visible={visibleAuthModal}
        onCancel={closeAuthModal}
        maskClosable={false}
        destroyOnClose={true}
        width={860}
      >
        {visibleAuthModal && (
          <iframe width="800" height="500" src={modalInfo.iframeUrl}></iframe>
        )}
      </Modal>
    </LoginWrapper>
  );
};

export default Login;
