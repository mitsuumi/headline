// 文章相關的API接放在此
// const getArticleListAPI = function () {
//   return '調用了XXX函式';
// };
import request from '../utils/request';

// 向外根據需要的component導出一個API函式
// eslint-disable-next-line import/prefer-default-export
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit,
    },
  });
};
