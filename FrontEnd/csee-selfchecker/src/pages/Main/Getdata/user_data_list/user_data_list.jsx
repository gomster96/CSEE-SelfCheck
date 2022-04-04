import React from 'react';
import UserDataItem from '../user_data_item/user_data_item';

const UserDataList = (props) => (
  <ul>
    {props.userDatas.map((user) => (
      <UserDataItem user={user} />
    ))}
  </ul>
);

export default UserDataList;
