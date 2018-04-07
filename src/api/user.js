export const loginUser = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Tony Pai",
        role: "user"
      });
    }, 1);
  });

export const logoutUser = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "",
        role: "guest"
      });
    }, 1);
  });
