import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";

const locationHelper = locationHelperBuilder({});
const authenticate = options => connectedRouterRedirect(options);

const isUserDefaults = {
  authenticatedSelector: state => {
    const { role } = state.user;
    return role === "user";
  },
  wrapperDisplayName: "userOnly"
};

export const userOnly = authenticate({
  ...isUserDefaults,
  allowRedirectBack: true,
  redirectPath: "/login"
});

const isGuestDefaults = {
  authenticatedSelector: state => {
    const { role } = state.user;
    return role === "guest";
  },
  wrapperDisplayName: "guestOnly"
};

export const guestOnly = authenticate({
  ...isGuestDefaults,
  allowRedirectBack: false,
  redirectPath: "/dashboard"
});

export const loginForward = authenticate({
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  authenticatedSelector: () => true,
  wrapperDisplayName: "loginForward"
});

export const isUser = connectedAuthWrapper(isUserDefaults);
export const isGuest = connectedAuthWrapper(isGuestDefaults);
