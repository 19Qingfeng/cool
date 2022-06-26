import React, { FC, createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const phoneContext = createContext(false);

/**
 * 媒体查询 HOC
 */
export const PhoneProviderHoc: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { children } = props;

  const isPhone = useMediaQuery({
    maxWidth: 750,
  });

  const { Provider } = phoneContext;

  return <Provider value={isPhone}>{children}</Provider>;
};
