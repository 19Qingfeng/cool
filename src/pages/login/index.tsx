import React, { useContext, useMemo } from 'react';
import { phoneContext } from '../../context/phoneConext';
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
} from '../../style/components/login';
import QqAuth from './sociologyAuth/qq';

/**
 * 社会化登陆
 */
const Login: React.FC = () => {
  const logoList = useMemo(() => {
    return [(key: number) => <QqAuth key={key}></QqAuth>];
  }, []);

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
              <span className="logo-oauth">
                {logoList.map((i, index) => i(index))}
              </span>
            </OAuthWrapper>
          </ModalFooter>
        </LoginModel>
      </LoginLeft>
      {!isPhone && <LoginRight />}
    </LoginWrapper>
  );
};

export default Login;
