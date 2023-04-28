export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "ikjun" }), 2000);
  });
};
