export const addQueryParams = <T extends Record<string, unknown>>(
  url: string,
  params: T
): string => {
  const urlObj = new URL(url);

  Object.entries(params).forEach(([key, value]) =>
    urlObj.searchParams.append(key, value as string)
  );

  return urlObj.href;
};
