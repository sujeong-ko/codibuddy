export const config = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
