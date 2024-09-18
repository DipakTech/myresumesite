import axios from "axios";

export const recentBlogs = async () => {
  try {
    const response = await axios.get("https://dipakgiri12.com.np/api/blog");
    return response.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
