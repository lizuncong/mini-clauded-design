export enum StatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

class Request {
  async request<Res>(options: RequestInit & { api: string }): Promise<{ msg: string; data?: Res; code: StatusCode }> {
    const { api, ...rest } = options;

    const config: RequestInit = {
      ...rest,
    };

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + api, config);
      if (!res.ok) {
        let errorMsg = '';
        try {
          errorMsg = await res.text();
        } catch {
          errorMsg = 'Can not read response text.';
        }
        console.error('request failed, status:', res.status, errorMsg);
        if (res.status === 404) {
          return { msg: 'Not Found', code: StatusCode.NOT_FOUND };
        }
        if (res.status === 400) {
          return { msg: 'Bad Request', code: StatusCode.BAD_REQUEST };
        }
        return { msg: errorMsg, code: StatusCode.INTERNAL_ERROR };
      }

      const result = await res.json();
      return { msg: 'Success', data: result, code: StatusCode.SUCCESS };
    } catch (err: any) {
      console.error('unknown error, error:', err);
      if (err.cause) {
        const { code, hostname } = err.cause;
        if (code === 'ENOTFOUND') {
          console.error('DNS 解析失败，域名：', hostname);
          return { msg: 'DNS not found', code: StatusCode.NOT_FOUND };
        }
      }

      return { msg: 'Internal error', code: StatusCode.INTERNAL_ERROR };
    }
  }

  get<Res>(options: { api: string; params?: URLSearchParams } & RequestInit) {
    const { api, params, ...rest } = options;
    return this.request<Res>({
      api: params ? `${api}?${new URLSearchParams(params).toString()}` : api,
      method: 'GET',
      ...rest,
    });
  }

  post<Res>(options: { api: string; params: unknown } & RequestInit) {
    const { api, params, headers, ...rest } = options;
    return this.request<Res>({
      api,
      method: 'POST',
      ...rest,
      body: params ? JSON.stringify(params) : null,
      headers: {
        'Content-Type': 'application/json', // 指定内容类型
        ...headers,
      },
    });
  }
}

export const request = new Request();
