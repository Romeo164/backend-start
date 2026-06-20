import { asyncHandler } from "../asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  return res.status(201).json({ message: "ok" });
});

export { registerUser };
