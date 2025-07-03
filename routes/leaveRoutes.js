const express = require("express");
const { APIS } = require("../config/constants");
const axios = require("axios");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.use(authMiddleware);
router.get(APIS.LEAVES.ENDPOINT.GET_LEAVES, async (req, res, next) => {
  try {
    const fullUrl =
      APIS.SERVICEURLS.LEAVES +
      APIS.LEAVES.SERVICE_NAME +
      APIS.LEAVES.ENDPOINT.GET_LEAVES;

    const response = await axios.get(fullUrl, {
      headers: {
        Authorization: req.headers["authorization"],
        "x-user-id": req.headers["x-user-id"],
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Axios GET_LEAVES failed:", error.message);
    console.error("URL:", error.config?.url);
    res
      .status(500)
      .json({ message: "Failed to fetch leaves", error: error.message });
  }
});
// router.get(APIS.LEAVES.ENDPOINT.ADD_LEAVES, async (req, res, next) => {
//   try {
//     const fullUrl =

//         APIS.SERVICEURLS.LEAVES +
//         APIS.LEAVES.SERVICE_NAME +
//         APIS.LEAVES.ENDPOINT.ADD_LEAVES;

//     const response = await axios.get(fullUrl, {
//       headers: {
//         Authorization: req.headers["authorization"],
//         "x-user-id": req.headers["x-user-id"],
//       },
//     });

//     res.status(response.status).json(response.data);
//   } catch (error) {
//     console.error("Axios GET_LEAVES failed:", error.message);
//     console.error("URL:", error.config?.url);
//     res.status(500).json({ message: "Failed to fetch leaves", error: error.message });
//   }
// });
router.post(APIS.LEAVES.ENDPOINT.ASSIGN_LEAVES, async (req, res, next) => {
  try {
    const response = await axios.post(
      `${
        APIS.SERVICEURLS.LEAVES +
        APIS.LEAVES.SERVICE_NAME +
        APIS.LEAVES.ENDPOINT.ASSIGN_LEAVES
      }`,
      req.body,
      {
        headers: {
          Authorization: req.headers["authorization"],
          "x-user-id": req.headers["x-user-id"],
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});
router.post(
  APIS.LEAVES.ENDPOINT.ASSIGN_LEAVESBYOWNER,
  async (req, res, next) => {
    try {
      const response = await axios.post(
        `${
          APIS.SERVICEURLS.LEAVES +
          APIS.LEAVES.SERVICE_NAME +
          APIS.LEAVES.ENDPOINT.ASSIGN_LEAVESBYOWNER
        }`,
        req.body,
        {
          headers: {
            Authorization: req.headers["authorization"],
            "x-user-id": req.headers["x-user-id"],
          },
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      next(error);
    }
  }
);
router.post(APIS.LEAVES.ENDPOINT.ADD_LEAVES, async (req, res, next) => {
  try {
    const response = await axios.post(
      `${
        APIS.SERVICEURLS.LEAVES +
        APIS.LEAVES.SERVICE_NAME +
        APIS.LEAVES.ENDPOINT.ADD_LEAVES
      }`,
      req.body,
      {
        headers: {
          Authorization: req.headers["authorization"],
          "x-user-id": req.headers["x-user-id"],
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});
router.put(APIS.LEAVES.ENDPOINT.APPROVE_LEAVES, async (req, res, next) => {
  try {
    const response = await axios.put(
      `${
        APIS.SERVICEURLS.LEAVES +
        APIS.LEAVES.SERVICE_NAME +
        APIS.LEAVES.ENDPOINT.APPROVE_LEAVES
      }`,
      req.body,
      {
        headers: {
          Authorization: req.headers["authorization"],
          "x-user-id": req.headers["x-user-id"],
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
