import styled from 'styled-components';
import QqLogoPsd from '../../assets/image/login/qq_login.png';
import { cursor } from './utils';
const BG_COLOR = '#fff';

const Line = `display: block;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid rgba(31, 35, 41, 0.15);
    transform: translateY(50%);
    box-sizing: border-box;
    content: '';`;

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  height: 100vh;
  width: 100vw;
  background: ${BG_COLOR};
`;

export const LoginLeft = styled.div`
  position: relative;
  height: 100%;
`;

export const Logo = styled.div`
  height: 85px;
  width: 73px;
  padding-left: 35px;
`;

export const LoginModel = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 444px;
  height: 550px;
  padding: 0 32px;
  border-radius: 12px;
  border: 1px solid #dee0e3;
  box-shadow: 0 4px 8px rgba(31, 35, 41, 0.03),
    0 3px 6px -6px rgba(31, 35, 41, 0.05), 0 6px 18px 6px rgba(31, 35, 41, 0.03);
`;

export const ModalTitle = styled.div`
  padding-top: 56px;
  font-size: 22px;
  color: #1f2329;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-wrap;
`;

export const ModalFooter = styled.div`
  position: absolute;
  width: calc(100% - 66px);
  bottom: 90px;
`;

export const OtherText = styled.span`
  padding: 0 6px;
  display: inline-block;
  color: #8f959e;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
`;

export const Other = styled.div`
  line-height: 45px;
  display: flex;
  &:before {
    ${Line}
  }
  &:after {
    ${Line}
  }
`;

/**
 * O auth 包裹组件
 */
export const OAuthWrapper = styled.div`
  margin: 10px 0;
  .logo-oauth {
    ${cursor};
    margin-right: 5px;
  }
`;

export const QqLogo = styled.div`
  height: 24px;
  width: 76px;
  background-image: url(${QqLogoPsd});
`;

export const LoginRight = styled.div`
  height: 100%;
  background-image: url(https://sf1-scmcdn-cn.feishucdn.com/goofy/ee/suite/passport/static/login/img/loginbg01.96f8eb43.jpg);
  background-size: 100% 100%;
`;
