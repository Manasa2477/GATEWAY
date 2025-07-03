const APIS = {
  AUTH: {
    SERVICE_NAME: "/auth",
    ENDPOINT: {
      LOGIN: "/login",
      VERIFY_PIN: "/verifypin",
      CREATE_PIN: "/createpin",
      RESET_PIN: "/resetpin",
    },
  },
  SETTINGS: {
    SERVICE_NAME: "/settings",
    ENDPOINT: {
      UPDATE_USER: "/updateuser",
    },
  },
  LEAVES: {
    SERVICE_NAME: "/leaves",
    ENDPOINT: {
      GET_LEAVES: "/getleaves",
      APPROVE_LEAVES: "/approveleave",
      ASSIGN_LEAVES: "/assignleaves",
      ADD_LEAVES: "/addleaves",
      ASSIGN_LEAVESBYOWNER: "/assignleavesbyowner",
    },
  },
  SERVICEURLS: {
    AUTH: "http://localhost:6000",
    SETTINGS: "http://localhost:6001",
    LEAVES: "http://localhost:6002",
  },
};

module.exports = {
  APIS,
};
