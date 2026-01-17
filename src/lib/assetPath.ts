/**
 * Get the correct asset path for both development and production (GitHub Pages)
 * In development: /assets/...
 * In production: /ayragemz-profile/assets/...
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base URL with clean path
  return `${base}${cleanPath}`;
};
