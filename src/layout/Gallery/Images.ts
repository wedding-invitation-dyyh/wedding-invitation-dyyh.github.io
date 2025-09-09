export interface ImageInfo {
  alt: string;
  source: string;
}
export const getImagesById = (id: string) => {
  const modules = import.meta.glob('/src/assets/*/gallery/*.{jpg,jpeg,png}', { eager: true });

  const filtered = Object.entries(modules)
    .filter(([path]) => path.includes(`/assets/${id}/`)) // id에 해당하는 경로만 필터링
    .map(([path, mod]) => {
      const filename = path.split('/').pop()?.split('.')[0] || 'unknown';
      return {
        alt: filename,
        source: (mod as { default: string }).default,
      };
    });

  console.log('getImagesById : ', filtered)
  return filtered.sort((a, b) => a.alt.localeCompare(b.alt));
};

export const getMainImageById = (id: string) => {
  console.log('id : ',id)
  const modules = import.meta.glob('/src/assets/*/main/main.{jpg,jpeg,png}', { eager: true });

  const filtered = Object.entries(modules)
    .filter(([path]) => path.includes(`/assets/${id}/`)) // id에 해당하는 경로만 필터링
    .map(([path, mod]) => {
      const filename = path.split('/').pop()?.split('.')[0] || 'unknown';
      return {
        alt: filename,
        source: (mod as { default: string }).default,
      };
    });

  return filtered.sort((a, b) => a.alt.localeCompare(b.alt));
};