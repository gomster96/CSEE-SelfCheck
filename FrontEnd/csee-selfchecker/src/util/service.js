const getOptions = () => {
  const option = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // credential: 'include',
    },
  };
  return option;
};
const postOptions = (body) => {
  const option = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
    },
    // credentials: 'include',
  };
  if (body) option.body = JSON.stringify(body);
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

const getStudents = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/admin/users`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const getUserByEmail = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/user/check`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const service = {
  getLectures,
  getStudents,
  getUserByEmail,
};

export default service;
