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

//创建订单
export const CreateOrder = data => {
    return service({
        url: '/order/create',
        method: 'post',
        data
    })
}

//获取我的订单列表
export const MyOrderList = data => {
    return service({
        url: '/order/list',
        method: 'get',
        query: data
    })
}

//获取我发布的商品列表
export const MyGoodList = data => {
    return service({
        url: '/good/list',
        method: 'get',
        query: data
    })
}

//获取我卖出的订单列表
export const MySellOrderList = data => {
    return service({
        url: '/order/sell/list',
        method: 'get',
        query: data
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
//订单详情
export const OrderDetail = id => {
    return service({
        url: '/order/detail?id=' + id,
        method: 'get',
    })
}

//pay支付
export const Pay = data => {
    return service({
        url: '/order/pay?id=' + data,
        method: 'get'
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


//发货
export const Send = data => {
    return service({
        url: '/order/send?id=' + data.id,
        method: 'post',
        data
    })
}

//收货
export const Receive = data => {
    return service({
        url: '/order/confirm?id=' + data.id,
        method: 'post',
        data
    })
}
