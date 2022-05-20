export const countDownTime = (leftTime) => {
  leftTime = leftTime * 60;
  const min = Math.floor(leftTime % 60);
  const sec = leftTime % 60;
  return { min, sec };
};
