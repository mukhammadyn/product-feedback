const getCommentCount = (comments) => {
  return comments?.reduce(
    (prev, current) =>
      current.replies ? (prev += current.replies.length + 1) : (prev += 1),
    0
  ) ?? 0;
};

export default getCommentCount
