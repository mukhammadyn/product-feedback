const sortFeedbackStatus = (statusFeedbacks) => {
  const planned = [];
  const progress = [];
  const live = [];

  const checkStatus = (status, checkStatus) => {
    return status.toLowerCase() === checkStatus;
  };

  statusFeedbacks.forEach((statusFeedback) => {
    if (checkStatus(statusFeedback.status, "planned"))
      planned.push(statusFeedback);
    else if (checkStatus(statusFeedback.status, "in-progress"))
      progress.push(statusFeedback);
    else if (checkStatus(statusFeedback.status, "live"))
      live.push(statusFeedback);
  });

  return {
    planned,
    progress,
    live,
  }
};

export default sortFeedbackStatus
