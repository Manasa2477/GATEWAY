const express = require("express");
const { APIS } = require("../config/constants");
const axios = require("axios");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.use(authMiddleware);
router.put(APIS.SETTINGS.ENDPOINT.UPDATE_USER, async (req, res, next) => {
  try {
    const response = await axios.put(
      `${
        APIS.SERVICEURLS.SETTINGS +
        APIS.SETTINGS.SERVICE_NAME +
        APIS.SETTINGS.ENDPOINT.UPDATE_USER
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
