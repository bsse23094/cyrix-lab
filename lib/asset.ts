/** Prefix for all public asset paths — matches next.config.ts basePath */
const basePath = process.env.NODE_ENV === "production" ? "/cyrix-lab" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
