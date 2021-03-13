export const goToFirstScrean = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToAdressRegister = (history) => {
  history.push("/adress-register");
};

export const goToSignUp = (history) => {
  history.push("/sign-up");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToBuyCart = (history) => {
  history.push("/cart");
};

export const goToRestaurantPage = (history, restaurantId) => {
  history.push(`/restaurants/${restaurantId}`);
};

export const goToProfilePage = (history) => {
  history.push("/profile");
};

export const goBack = (history) => {
  history.goBack();
};
export const goToAddressEdit = (history) => {
  history.push("/edit-address");
};

export const goToEditProfile = (history) => {
  history.push("/edit-profile");
};
