export const extractTokenFromURL = (): string | null => {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");
  return token || null;
};
