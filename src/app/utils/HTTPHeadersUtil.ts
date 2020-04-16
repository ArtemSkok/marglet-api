export class HTTPHeadersUtil {
  static getBearerToken(authHeader: string): string | null {
    try {
      return authHeader.split('Bearer ')[1];
    } catch (error) {
      return null;
    }
  }

}