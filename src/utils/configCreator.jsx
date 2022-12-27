export const token = localStorage.getItem('token');
export const config = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
