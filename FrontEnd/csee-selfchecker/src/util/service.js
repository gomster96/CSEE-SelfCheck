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
  if (response.status !== 200) alert(result.message);
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

const uploadLectures = async (formData) => {
  const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/api/upload/lectures`;
  const options = {
    method: 'POST',
    body: formData,
  };
  const response = await fetch(uploadUrl, options);
  if (response.status !== 200) {
    const result = await response.json();
    alert(result.message);
  } else {
    alert('Excel 등록이 정상적으로 완료되었습니다.');
  }
};

const uploadMajors = async (formData) => {
  const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/api/upload/majors`;
  const options = {
    method: 'POST',
    body: formData,
  };
  const response = await fetch(uploadUrl, options);
  if (response.status !== 200) {
    const result = await response.json();
    alert(result.message);
  } else {
    alert('Excel 등록이 정상적으로 완료되었습니다.');
  }
};

const uploadUsers = async (formData) => {
  const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/api/upload/users`;
  const options = {
    method: 'POST',
    body: formData,
  };
  const response = await fetch(uploadUrl, options);
  if (response.status !== 200) {
    const result = await response.json();
    alert(result.message);
  } else {
    alert('Excel 등록이 정상적으로 완료되었습니다.');
  }
};

const checkUserByEmail = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/api/user/checkemail`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const checkAdminByEmail = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/admin/checkemail`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const checkUserInfo = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/api/user/checkInfo`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const postUserResult = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/api/user/save`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const signupAdmin = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/admin/signup`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const checkAdminIsActive = async (body) => {
  const getStudentUrl = `${process.env.REACT_APP_SERVER_URL}/admin/isActive`;
  const response = await fetch(getStudentUrl, postOptions(body));
  return await handleResult(response);
};

const service = {
  getLectures,
  getStudents,
  uploadLectures,
  uploadMajors,
  uploadUsers,
  checkUserByEmail,
  checkAdminByEmail,
  checkUserInfo,
  postUserResult,
  signupAdmin,
  checkAdminIsActive,
};

export default service;
