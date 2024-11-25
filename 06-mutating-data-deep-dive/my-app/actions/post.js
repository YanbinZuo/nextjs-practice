"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formDate) {
  const title = formDate.get("title");
  const image = formDate.get("image");
  const content = formDate.get("content");
  console.log("Post data: ", title, image, content);

  const errors = [];
  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  console.log("postId", postId);
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
