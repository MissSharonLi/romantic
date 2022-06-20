import { POST } from '@/sdk/fetch'

// 获取banner
export const getBannerList = (params) => POST('index/getBannerList', params)

// 获取商品分类
export const getProductCat = (params) => POST('goods/getCat', params)

// 获取首页商品列表
export const getProductList = (params) => POST('goods/goodslist', params, null, true)

// 获取商品详情
export const getProductDetail = (params) => POST('goods/detail', params, null, true)

// 获取用户搜索记录
export const getSearchKeywords = (params) => POST('goods/getsearchkeywords', params, null, true)

// 用户登录/注册
export const getWxapplogin = (params) => POST('user/wxapplogin', params, null, true)

// 获取用户信息
export const getUseriInfo = (params) => POST('user/getuserinfo', params, null, true)

// 添加/取消收藏
export const handleAddCollect = (params) => POST('collection/addcollect', params)

// 收藏列表
export const getCollectionList = (params) => POST('collection/index', params, null, true)

// 获取充值金额选项
export const getConfigList = (params) => POST('users/money/getconfig', params, null, true)

// 余额充值
export const handleSubmitAmount = (params) => POST('users/money/submit', params, null, true)

// 获取余额充值记录
export const getMoneyRecords = (params) => POST('users/money/moneylog', params, null, true)

// 手机号授权
export const handleAuthorityToGetPhone = (params) => POST('user/getphonenumber', params, null, true)

// 获取地址列表
export const getAddressList = (params) => POST('user/getaddresslist', params, null, true)

// 添加收货地址
export const handleSetAddress = (params) => POST('user/address', params, null, true)

// 获取地区
export const getAreaList = (params) => POST('area/getarea', params, null, true)

// 购买商品
export const handleToBuy = (params) => POST('order/buy', params, null, true)

// 获取排行
export const getRankingList = (params) => POST('goods/rankinglist', params, null, true)

// 获取氪金排行
export const getBuyRankingList = (params) => POST('user/buyranking', params, null, true)

// 绑定手机号码
export const handleBindMobile = (params) => POST('user/changemobile', params, null, true)

// 获取验证码
export const getVerifyCode = (params) => POST('sms/send', params, null, true)

// 获取订单列表
export const getOrderList = (params) => POST('order/orderlist', params, null, true)

// 获取订单详情
export const getOrderDetail = (params) => POST('order/detail', params, null, true)

// 获取订单回购
export const handleOrderBackbuy = (params) => POST('order/backbuy', params, null, true)

// 提货
export const handleTakeGoods = (params) => POST('order/takegoods', params, null, true)

// 确认收货
export const handleToReceipt = (params) => POST('order/receipt', params, null, true)

// 查看物流信息
export const handleCheckLogistics = (params) => POST('order/logistics', params, null, true)

// 购买记录
export const getBuyLogList = (params) => POST('buylog/index', params, null, true)

// 获取预告列表
export const getAdvanceList = (params) => POST('advance/index', params, null, true)

// 确认锁箱
export const handleLockBox = (params) => POST('goods/lockbox', params, null, true)

// 关于我们
export const getAboutUsList = (params) => POST('index/aboutus', params, null, true)

// 抽奖记录
export const getBuyorderLogList = (params) => POST('goods/buyorderlog', params, null, true)

// 获取购买的商品
export const getBuyLogDetial = (params) => POST('buylog/detail', params, null, true)

// 获取我的赏袋
export const getRewardBagList = (params) => POST('rewardbag/baglist', params, null, true)

// 批量回购
export const handleToBackbuy = (params) => POST('rewardbag/backbuy', params, null, true)

// 批量提货
export const handleToTakegoods = (params) => POST('rewardbag/takegoods', params, null, true)

// 抽奖中奖记录
export const getBuyOrderwinlog = (params) => POST('goods/buyorderwinlog', params, null, true)
