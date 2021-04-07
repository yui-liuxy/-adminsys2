import request from "../utils/request";
export function  fetchProductList (params){
    return request({
        url:"/product_list",
        method:'get',
        params:params
    })
}
export  function  fetchGoodsCategory (params){
    return request({
        url:"/get_product_category",
        method:'get',
        params:params
    })
}
export  function  fetchbrand (params){
    return request({
        url:"/get_product_brand_pag",
        method:'get',
        params:params
    })
}
export  function  fetchproductAttr (params){
    return request({
        url:"/get_product_attr",
        method:'get',
        params:params
    })
}
export  function  fetchlogin (params){
    return request({
        url:"/login",
        method:'get',
        params:params
    })
}

export  function  addgoods(params){
    return request({
        url:"/create_product",
        method:'post',
        params:params
    })
}
