import { TLoginSchemaArgs } from "../../types/loginSchema";

export const getLoginStateSelector = (state: { loginForm: TLoginSchemaArgs }) => state.loginForm;