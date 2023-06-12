import { $host, $authHost } from "./index";

export const createFeedback = async (feedback) => {
  try {
    const { data } = await $authHost.post("api/feedback", feedback);
    return data;
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const fetchFeedbacks = async () => {
  const { data } = await $host.get("api/feedback");
  return data;
};
