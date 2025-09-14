import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getAPost,
  updatePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/createpost").post(verifyJWT, upload.single("image"), createPost);
router.route("/").get(getAllPosts);
router.route("/p/:postId").get(getAPost);
router.route("/p/:postId").delete(verifyJWT, deletePost);
router.route("/p/:postId").put(verifyJWT, updatePost);

export default router;
