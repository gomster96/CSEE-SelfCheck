const getOptions = () => {
  const option = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credential: 'include',
    },
  };
  return option;
};

const handleResult = async (response) => {
  const result = await response.json();
  if (response.status !== 200) throw new Error(result);
  return result;
};

const getLectures = async () => {
  const getLectureUrl = `${process.env.REACT_APP_SERVER_URL}/admin/lectures`;
  const response = await fetch(getLectureUrl, getOptions);
  return await handleResult(response);
};

const service = {
  getLectures,
};

export default service;
