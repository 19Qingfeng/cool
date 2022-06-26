import { defaultQqConfig, OAuthConfig } from "./authConfig";

// TODO: 对接其他社会化登陆时候 检查是否统一 想办法抽离逻辑服用

/**
 * 获取 qqOAuth 跳转 URL
 * @param config 自定义覆盖配置
 * @returns Qq OAuth 地址
 */
export function getQqRedirectUrl(config?: Partial<OAuthConfig>) {
  const params: Partial<OAuthConfig> = { ...defaultQqConfig, ...config };
  if (params.link) {
    const url = params.link;
    delete params.link;
    const searchParams = new URLSearchParams(params).toString();
    const finallyUrl = `${url}?${searchParams}`;
    return finallyUrl.toString();
  }

  throw new Error("qq oauth way must have app Key!");
}
