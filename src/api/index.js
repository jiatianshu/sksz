import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export function postGrpCntCurrent(data) {  
    return request({
      url: `/fjm/graph/grpCntCurrent`,
      method: "post",
      data:data
    });
  }
  export function postGrpSlsfY(data) {  
    return request({
      url: `/fjm/graph/grpSlsfY`,
      method: "post",
      data:data
    });
  }
  export function postGrpSlsfM(data) {  
    return request({
      url: `/fjm/graph/grpSlsfM`,
      method: "post",
      data:data
    });
  }
  export function postAreaSlsfM(data) {  
    return request({
      url: `fjm/graph/areaSlsfM`,
      method: "post",
      data:data
    });
  }
  export function postAreaYsxzYslM(data) {  
    return request({
      url: `/fjm/graph/areaYsxzYslM`,
      method: "post",
      data:data
    });
  }
  export default {
    postGrpSlsfM,postGrpCntCurrent,postGrpSlsfY,postAreaSlsfM,postAreaYsxzYslM
  };