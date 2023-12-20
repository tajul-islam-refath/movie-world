export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const avgRating = (ratings) => {
  let totalRating = ratings?.reduce((sum, res) => sum + res.rating, 0);
  const averageRating = totalRating / ratings?.length || 0;
  return averageRating;
};

export const hasWatchList = (watchList, movieId) => {
  let isFound = watchList.find((res) => (res._id == movieId ? true : false));
  return isFound ? true : false;
};
