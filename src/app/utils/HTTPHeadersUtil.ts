export class HTTPHeadersUtil {
  static getBearerToken(authHeader: string): string | null {
    if (!authHeader) { return null; }

    const a = authHeader.split(' ');

    if (a[0] === 'Bearer') {
      return a[1] || null;
    }
  }

}