export interface OAuthConfig<A = string> {
  link?: string;
  response_type: "code";
  client_id: string;
  redirect_uri: string;
  state?: string;
  scope?: A; // 权限不固定
  display?: string;
}

/**
 * 默认 OAuth 配置列表
 */
const defaultAppConfig: Record<"qq", OAuthConfig> = {
  qq: {
    link: "https://graph.qq.com/oauth2.0/authorize",
    response_type: "code",
    redirect_uri: "http://hycoding.com/oauth/callback",
    client_id: "102011413",
    state: "19qingfeng",
  },
};

const defaultQqConfig = defaultAppConfig["qq"];

export { defaultQqConfig, defaultAppConfig };
