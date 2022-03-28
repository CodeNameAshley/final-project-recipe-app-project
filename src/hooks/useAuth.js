import { useContext } from "react";
import AuthenticationContext from "../providers/Authentication";

export default function useAuth() { return useContext(AuthenticationContext); }
