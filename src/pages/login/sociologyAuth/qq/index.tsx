import React, { useState } from 'react';
import { Modal } from 'antd';
import { QqLogo } from 'styled/components/login';
import { getQqRedirectUrl } from 'utils/sociology/getQqConfig';

interface QqProps {}

// TODO: Modal 应该在外层 当存在多个登陆时统一使用单个 modal 即可
// TODO: IFrame 的宽高和弹窗动态设置下
const QqOAuth: React.FC<QqProps> = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const iframeUrl = getQqRedirectUrl();

  const onLoginByQq = () => {
    setTitle('Qq登录');
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <QqLogo onClick={onLoginByQq}></QqLogo>
      <Modal
        title={title}
        visible={modal}
        onCancel={onClose}
        maskClosable={false}
        destroyOnClose={true}
        width={860}
      >
        {modal && <iframe width="800" height="500" src={iframeUrl}></iframe>}
      </Modal>
    </>
  );
};

export default React.memo(QqOAuth);
