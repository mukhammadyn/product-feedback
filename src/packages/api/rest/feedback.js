import makeRequest from "../makeRequest";
import { config } from "./config";

export const fetchFeedback = async () => {
  const res = await makeRequest({
    method: "GET",
    url: `${config}/productRequests`,
  });

  const data = res.data;

  return data;
};

export const changeFeedback = async (id, isUpvoted, upvotes) => {
  const res = await makeRequest({
    method: "PATCH",
    url: `${config}/productRequests/${id}`,
    data: {
      isUpvoted,
      upvotes,
    },
  });
  const data = await res.data;
  return data;
};

export const addNewComment = async (id, comments) => {
  const res = await makeRequest({
    method: "PATCH",
    url: `${config}/productRequests/${id}`,
    data: {
      comments,
    },
  });
  const data = await res.data;
  return data;
};

export const replyComment = async (id, comments) => {
  const res = await makeRequest({
    method: "PATCH",
    url: `${config}/productRequests/${id}`,
    data: {
      comments,
    },
  });
  const data = await res.data;
  return data;
};

export const addFeedback = async (feedback) => {
  const res = await makeRequest({
    method: "POST",
    url: `${config}/productRequests`,
    data: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const data = await res.data;

  return data;
};

export const editFeedback = async (editedFeedback) => {
  const res = await makeRequest({
    method: "PATCH",
    url: `${config}/productRequests/${editedFeedback.id}`,
    data: JSON.stringify(editedFeedback),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const data = await res.data;

  return data;
};

export const deleteFeedback = async (id) => {
  const res = await makeRequest({
    method: "DELETE",
    url: `${config}/productRequests/${id}`,
  });
  const data = await res.data;

  console.log(data);
  return data;
};
