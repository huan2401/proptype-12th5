
import jwtDecode from "jwt-decode";

export const parseJwt = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    const { exp } = decoded as any;
    if (Date.now() >= exp * 1000) {
      throw new Error('tokenIsExpired')
    }
    return decoded;
  } catch (error: any) {
    throw new Error(error.message === 'tokenIsExpired' ? error.message : 'invalidToken')
  }
}

