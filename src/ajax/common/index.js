import { request } from "services/request.js";

export function getLawDetail(id) {
    return request({
        url: 'article/getLawDetail',
        params: {
          id
        },
    })
}