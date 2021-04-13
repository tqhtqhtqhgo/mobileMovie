import ajax from './ajax'


//获取验证码
export const getPhoneCode = (phone)=>ajax('http://47.93.8.38:3002/api/getPhoneCode',{phone});
//手机登录
export const phoneLogin = (phone,phoneCode)=>ajax('http://47.93.8.38:3002/api/phoneLogin',{phone,phoneCode},'POST');
//账号密码登录
export const pwdLogin = (userName,password,captcha)=>ajax('http://47.93.8.38:3002/api/pwdLogin',{userName,password,captcha},'POST');
//获取用户信息
export const getUserInfo = (userId)=>ajax('http://47.93.8.38:3002/api/getUserInfo',{userId});
//更新用户头像
export const updateUserAvatar = (userId,avatar)=>ajax('http://47.93.8.38:3002/api/updateUserAvatar',{userId,avatar},'POST');
//更新用户名
export const updateUserName = (userId,userName)=>ajax('http://47.93.8.38:3002/api/updateUserName',{userId,userName},'POST');
//更新用户性别
export const updateUserSex = (userId,sex)=>ajax('http://47.93.8.38:3002/api/updateUserSex',{userId,sex},'POST');
//更新用户生日
export const updateUserBirthday = (userId,birthday)=>ajax('http://47.93.8.38:3002/api/updateUserBirthday',{userId,birthday},'POST');
//更新用户签名
export const updateUserSign = (userId,sign)=>ajax('http://47.93.8.38:3002/api/updateUserSign',{userId,sign},'POST');
//上传图片到服务器
export const upLoadImg = (formData)=>ajax('http://47.93.8.38:3002/api/admin/upLoadImg',formData,'POST');
//更新用户信息
export const updateUserInfo = (userId,userName,avatar,password,sex,sign,birthday)=>ajax('http://47.93.8.38:3002/api/updateUserInfo',{userId,userName,avatar,password,sex,sign,birthday},'POST');
//获取电影列表
export const getMovieList = ()=>ajax('http://47.93.8.38:3002/api/getMovieList');
//获取电影详情
export const getMovieDetail = (movieId)=>ajax('http://47.93.8.38:3002/api/getMovieDetail',{movieId});
//判断用户是否想看电影
export const isWishMovie = (userId,movieId)=>ajax('http://47.93.8.38:3002/api/isWishMovie',{userId,movieId},'POST');
//想看电影
export const wishMovie = (userId,movieId)=>ajax('http://47.93.8.38:3002/api/wishMovie',{userId,movieId},'POST');
//取消想看电影
export const cancelWishMovie = (userId,movieId)=>ajax('http://47.93.8.38:3002/api/cancelWishMovie',{userId,movieId},'POST');
//获取当前用户评论
export const getUserComment = (userId,movieId)=>ajax('http://47.93.8.38:3002/api/getUserComment',{userId,movieId});
//更新当前用户评论
export const updateUserComment = (userId,movieId,score,commentContent,commentDate)=>ajax('http://47.93.8.38:3002/api/updateUserComment',{userId,movieId,score,commentContent,commentDate},'POST');
//获取所有用户通过审核的评论
export const getAllUserPassComment = (movieId)=>ajax('http://47.93.8.38:3002/api/getAllUserPassComment',{movieId});
//获取当前评论
export const getCommentById = (commentId)=>ajax('http://47.93.8.38:3002/api/getCommentById',{commentId});
//更新当前评论的用户点赞
export const updateUserSupport = (commentId,supportNum,supportUser)=>ajax('http://47.93.8.38:3002/api/updateUserSupport',{commentId,supportNum,supportUser},'POST');
//获取电影列表
export const getCinemaList = ()=>ajax('http://47.93.8.38:3002/api/getCinemaList');
//获取当前影院详情
export const getCurrentCinemaDetail = (cinemaId)=>ajax('http://47.93.8.38:3002/api/getCurrentCinemaDetail',{cinemaId});
//获取当前影院的排片
export const getCurrentCinemaMovieSchedule = (cinemaId)=>ajax('http://47.93.8.38:3002/api/getCurrentCinemaMovieSchedule',{cinemaId});
//获取排片详情
export const getScheduleById = (scheduleId)=>ajax('http://47.93.8.38:3002/api/getScheduleById',{scheduleId});
//更新排片座位信息
export const updateScheduleSeat = (scheduleId,seatInfo)=>ajax('http://47.93.8.38:3002/api/updateScheduleSeat',{scheduleId,seatInfo},'POST');
//获取当前电影的排片
export const getCurrentMovieSchedule = (movieId)=>ajax('http://47.93.8.38:3002/api/getCurrentMovieSchedule',{movieId});
//根据名字模糊匹配电影
export const matchMovieByName = (movieName)=>ajax('http://47.93.8.38:3002/api/matchMovieByName',{movieName});
//根据名字模糊匹配影院
export const matchCinemaByName = (cinemaName)=>ajax('http://47.93.8.38:3002/api/matchCinemaByName',{cinemaName});
//用户下单
export const order = (userId,scheduleId,orderPhone,orderDate,ticketNum,totalPrice,orderSeatInfo,payType)=>ajax('http://47.93.8.38:3002/api/order',{userId,scheduleId,orderPhone,orderDate,ticketNum,totalPrice,orderSeatInfo,payType},'POST');
//获取个人订单信息
export const getOrderByUserId = (userId)=>ajax('http://47.93.8.38:3002/api/getOrderByUserId',{userId});
//获取个人想看电影
export const getWishMovieByUserId = (userId)=>ajax('http://47.93.8.38:3002/api/getWishMovieByUserId',{userId});
//获取个人评论的电影
export const getIsWatchedMovieByUserId = (userId)=>ajax('http://47.93.8.38:3002/api/getIsWatchedMovieByUserId',{userId});
//删除订单
export const deleteOrder = (orderId,scheduleId,orderSeatInfo)=>ajax('http://47.93.8.38:3002/api/admin/deleteOrder',{orderId,scheduleId,orderSeatInfo},'POST');
//更新密码
export const updateUserPwd = (userId,userPwd)=>ajax('http://47.93.8.38:3002/api/updateUserPwd',{userId,userPwd},'POST');
