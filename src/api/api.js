import service from './request'

export const Login = data => {
    return service({
        url: '/user/login',
        method: 'post',
        data
    })
};

//轮播图api
export const Banner = () => {
    return service({
        url: '/banner',
        method: 'get'
    })
}



//userinfo
export const UserInfo = () => {
    return service({
        url: '/user/info',
        method: 'get'
    })
}



//发布商品
export const AddGoods = data => {
    return service({
        url: '/goods/add',
        method: 'post',
        data
    })
}

//商品列表
export const GoodsList = data => {
    return service({
        url: '/goods/list',
        method: 'post',
        data
    })
}

//根据分类获取商品列表
export const GoodsListByCategory = data => {
    return service({
        url: '/category/good?id=' + data,
        method: 'get'
    })
}

//商品详情
export const GoodsDetail = id => {
    return service({
        url: '/goods/detail?id=' + id,
        method: 'get',
    })
}

//注册
export const Register = data => {
    return service({
        url: '/user/register',
        method: 'post',
        data
    })
}

//获取分类列表
export const CategoryList = () => {
    return service({
        url: '/category/list',
        method: 'get',
    })
}

//搜索商品
export const SearchGoods = data => {
    return service({
        url: '/goods/search?key=' + data,
        method: 'get'
    })
}
