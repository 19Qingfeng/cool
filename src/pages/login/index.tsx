import React, { useMemo } from 'react';
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
  QqLogo,
} from '../../style/components/login';

const Login: React.FC = () => {
  const logoList = useMemo(() => {
    return [(key: number) => <QqLogo key={key}></QqLogo>];
  }, []);

  return (
    <LoginWrapper>
      <LoginLeft>
        <Logo>logo</Logo>
        <LoginModel>
          <ModalTitle>清风的网站</ModalTitle>
          <ModalFooter>
            <Other>
              <OtherText>更多登陆方式</OtherText>
            </Other>
            <OAuthWrapper>
              <span className="logo-oauth">
                {logoList.map((i, index) => i(index))}
              </span>
            </OAuthWrapper>
          </ModalFooter>
        </LoginModel>
      </LoginLeft>
      <LoginRight />
    </LoginWrapper>
  );
};

export default Login;
