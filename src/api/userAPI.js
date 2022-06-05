import request from '../utils/request';

// 單純演示user的api，並沒有提供user api
// eslint-disable-next-line import/prefer-default-export
export const getUserInfoAPI = function () {
  return request.get('/users');
};
