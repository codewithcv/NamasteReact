import { createContext } from "react";

const UserContext = createContext({
  name: "dummyName",
  email: "dummyEmail@test.com",
});

UserContext.displayName = "LoogedUser";

export default UserContext;
