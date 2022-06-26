import { useReducer, useState } from "react";
import { getQqRedirectUrl } from "utils/sociology/getQqConfig";
import { AuthModalItem } from ".";

interface ReducerState {
  iframeUrl: string;
  title: string;
}

function reducer(state: ReducerState, action: { type: "qq" | "wechat" }) {
  switch (action.type) {
    case "qq":
      return {
        // 重定向的URL
        iframeUrl: getQqRedirectUrl(),
        title: "Qq登陆",
      };
    case "wechat":
      return {
        iframeUrl: getQqRedirectUrl(),
        title: "微信登陆",
      };
    default:
      throw new Error(`${action.type} 不存在，请检查 OAuth 匹配类型。`);
  }
}

function useAuthModal() {
  // 是否显示弹窗
  const [visibleAuthModal, setModalVisible] = useState(false);

  const [modalInfo, setModalInfo] = useReducer<typeof reducer>(reducer, {
    iframeUrl: "",
    title: "",
  });

  const openAuthModal = (modalItem: AuthModalItem) => {
    const { type } = modalItem;
    setModalInfo({ type });
    setModalVisible(true);
  };

  const closeAuthModal = () => {
    setModalVisible(false);
  };

  return {
    visibleAuthModal,
    modalInfo,
    openAuthModal,
    closeAuthModal,
  };
}

export { useAuthModal };
