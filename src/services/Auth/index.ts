import ENDPOINT from "../Endpoint";
import axiosAuth from "../../utils/axiosAuth";

const AuthService = {
  login: (authBodyData: any) => axiosAuth.post(ENDPOINT.LOGIN, authBodyData),
};
export default AuthService;
