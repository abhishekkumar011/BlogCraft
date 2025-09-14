import { Post } from "../models/post.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const imageLocalPath = req.file?.path;

    const image = await uploadOnCloudinary(imageLocalPath);

    const post = await Post.create({
      title,
      content,
      image: {
        public_id: image?.public_id || "",
        url: image?.url || "",
      },
      author: req.user?._id,
    });

    return res.status(200).json({ post, msg: "Post created successfully" });
  } catch (error) {
    console.error("Error while creating post ", error);
    return res.status(500).json({ msg: "Error while creating the post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({ posts, msg: "Posts fetched successfully" });
  } catch (error) {
    console.error("Error while fetching posts ", error);
    return res.status(500).json({ msg: "Error while fetching posts" });
  }
};

const getAPost = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId.trim()) {
      return res.status(400).json({ msg: "postId is required" });
    }

    const postById = await Post.findById(postId).populate(
      "author",
      "name email"
    );

    if (!postById) {
      return res.status(404).json({ msg: "Post not found" });
    }

    return res.status(200).json({ postById, msg: "Post fetched successfully" });
  } catch (error) {
    console.error("Error while fetching post:", error);
    return res.status(500).json({ msg: "Error while fetching the post" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId.trim()) {
      return res.status(400).json({ msg: "postId is required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post?.author.toString() !== req.user?._id.toString()) {
      return res
        .status(400)
        .json({ msg: "You can't delete this post as you are not the owner" });
    }

    if (post?.image?.public_id) {
      await deleteFromCloudinary(post.image.public_id);
    }

    await Post.findByIdAndDelete(post?._id);

    return res.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    console.error("Error while deleting post:", error);
    return res.status(500).json({ msg: "Error while deleting the post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId.trim()) {
      return res.status(400).json({ msg: "postId is required" });
    }

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post?.author.toString() !== req.user?._id.toString()) {
      return res
        .status(400)
        .json({ msg: "You can't update this post as you are not the owner" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $set: { title, content },
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ updatedPost, msg: "video successfully updated" });
  } catch (error) {
    console.error("Error while updating post:", error);
    return res.status(500).json({ msg: "Error while updating the post" });
  }
};

export { createPost, getAllPosts, getAPost, deletePost, updatePost };
