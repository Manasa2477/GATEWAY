const express = require("express");
const { APIS } = require("../config/constants");
const axios = require("axios");
const router = express.Router();
router.post(APIS.AUTH.ENDPOINT.LOGIN, async (req, res, next) => {
  try {
    const response = await axios.post(
      `${
        APIS.SERVICEURLS.AUTH +
        APIS.AUTH.SERVICE_NAME +
        APIS.AUTH.ENDPOINT.LOGIN
      }`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});
router.post(APIS.AUTH.ENDPOINT.CREATE_PIN, async (req, res, next) => {
  try {
    const response = await axios.post(
      `${
        APIS.SERVICEURLS.AUTH +
        APIS.AUTH.SERVICE_NAME +
        APIS.AUTH.ENDPOINT.CREATE_PIN
      }`,
      req.body
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});
// router.post(APIS.AUTH.ENDPOINT.VERIFY_PIN, async (req, res, next) => {
//   try {
//     const response = await axios.post(
//       `${
//         APIS.SERVICEURLS.AUTH +
//         APIS.AUTH.SERVICE_NAME +
//         APIS.AUTH.ENDPOINT.VERIFY_PIN
//       }`,
//       req.body
//     );

//     res.json(response.data);
//   } catch (error) {
//     next(error);
//   }
// });
router.post(APIS.AUTH.ENDPOINT.VERIFY_PIN, async (req, res, next) => {
  try {
    const token = req.headers.authorization; // Read token from client request

    const response = await axios.post(
      `${APIS.SERVICEURLS.AUTH}${APIS.AUTH.SERVICE_NAME}${APIS.AUTH.ENDPOINT.VERIFY_PIN}`,
      req.body,
      {
        headers: {
          Authorization: token || "", // Forward token if exists
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Axios 401 Error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      message: "Request failed",
      details: error.response?.data || error.message,
    });
  }
});

router.put(APIS.AUTH.ENDPOINT.RESET_PIN, async (req, res, next) => {
  try {
    const response = await axios.put(
      `${
        APIS.SERVICEURLS.AUTH +
        APIS.AUTH.SERVICE_NAME +
        APIS.AUTH.ENDPOINT.RESET_PIN
      }`,
      req.body
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
