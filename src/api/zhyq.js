import request from '@/utils/request'


export function sysdistrictMenu(data) {  
    debugger
    return request({
      url: `/policedata/sysdistrictmenu`,
      method: "post",
      contentType:'application/json',
      data
    });
  }

