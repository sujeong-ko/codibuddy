export const token = localStorage.getItem('userToken');
export const config = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
