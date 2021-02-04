<template>
  <view class="content">
    <view class="user_con">
      <view class="user_info">
        <view class="avatar_con">
          <u-avatar
            src="../static/imgs/avatar_1.png"
            class="avatar"
            size="large"
          ></u-avatar>
        </view>
        <view class="info_con">
          <p class="user_name">名称名称</p>
          <view class="member_con">
            <view class="member_bg">
              <image
                class="icon"
                src="../../static/icon/icon_member.png"
              ></image>
            </view>
            <view class="text"> 普通用户 </view>
          </view>
        </view>
      </view>

      <view class="my_list">
        <navigator class="my_list_item" url="/pages/myfavourite/myfavourite">
          <p class="number">1</p>
          <span>我的收藏</span>
        </navigator>
        <view class="my_list_item">
          <p class="number">0</p>
          <span>礼物篮</span>
        </view>
        <navigator class="my_list_item" url="/pages/mycart/mycart">
          <p class="number">0</p>
          <span>购物车</span>
        </navigator>
      </view>
    </view>

    <view class="main_con">
      <navigator class="icon_con" url="/pages/myorders/myorders">
        <image
          class="icon"
          src="../../static/icon/mine_icon_goodsOrders.png"
        ></image>
        <p>商品订单</p>
      </navigator>
      <view class="icon_con">
        <image
          class="icon light-green"
          src="../../static/icon/mine_icon_shopOrders.png"
        ></image>
        <p>购买订单</p>
      </view>
      <view class="icon_con">
        <image
          class="icon"
          src="../../static/icon/mine_icon_history.png"
        ></image>
        <p>历史浏览</p>
      </view>
      <view class="icon_con">
        <image
          class="icon light-green"
          src="../../static/icon/mine_icon_heart.png"
        ></image>
        <p>店铺关注</p>
      </view>
      <view class="icon_con">
        <image
          class="icon"
          src="../../static/icon/mine_icon_afterSales.png"
        ></image>
        <p>售后服务</p>
      </view>
      <view class="icon_con">
        <image
          class="icon light-green"
          src="../../static/icon/mine_icon_present.png"
        ></image>
        <p>礼品卡</p>
      </view>
      <view class="icon_con">
        <image
          class="icon"
          src="../../static/icon/mine_icon_retail.png"
        ></image>
        <p>分销订单</p>
      </view>
      <view class="icon_con">
        <image
          class="icon light-green"
          src="../../static/icon/mine_icon_otherOrders.png"
        ></image>
        <p>其它订单</p>
      </view>
    </view>

    <view class="mywallet_con">
      <view class="part_title"> 我的钱包 </view>
      <view class="my_list">
        <view class="my_list_item">
          <p class="number">1</p>
          <span>总收入（元）</span>
        </view>
        <view class="my_list_item">
          <p class="number">0</p>
          <span>待提现（元）</span>
        </view>
        <view class="my_list_item">
          <p class="number">0</p>
          <span>可提现（元）</span>
        </view>
      </view>
    </view>

    <view class="myservice_con">
      <view class="part_title"> 我的服务 </view>
      <view class="service_list">
        <view class="service_item">
          <view class="icon_con">
            <image
              class="icon"
              src="../../static/icon/mine_icon_goodsOrders.png"
            ></image>
          </view>
          <view class="detail_con">
            <p>店铺管理</p>
            <span>查看店铺信息</span>
          </view>
        </view>
        <view class="service_item">
          <view class="icon_con">
            <image
              class="icon light-green"
              src="../../static/icon/mine_icon_activity.png"
            ></image>
          </view>
          <view class="detail_con">
            <p>我的活动</p>
            <span>查看活动信息</span>
          </view>
        </view>
        <view class="service_item">
          <view class="icon_con">
            <image
              class="icon"
              src="../../static/icon/mine_icon_tradeCenter.png"
            ></image>
          </view>
          <view class="detail_con">
            <p>商务中心</p>
            <span>成为团队伙伴</span>
          </view>
        </view>
        <view class="service_item">
          <view class="icon_con">
            <image
              class="icon"
              src="../../static/icon/mine_icon_service.png"
            ></image>
          </view>
          <view class="detail_con">
            <p>客服中心</p>
            <span>提供一对一服务</span>
          </view>
        </view>
      </view>
    </view>

    <view class="setting_con">
      <view class="setting">
        <view class="right_con">
          <u-icon name="setting" color="#000" size="46" class="icon" ></u-icon>
          <span>设置</span>
        </view>
        <view class="left_con">
          <u-icon name="arrow-right" color="#000" size="40" class="icon" ></u-icon>
        </view>
      </view>
      <view class="about">
        <view class="right_con">
          <u-icon name="info-circle" color="#000" size="46" class="icon" ></u-icon>
          <span>关于</span>
        </view>
        <view class="left_con">
          <u-icon name="arrow-right" color="#000" size="40" class="icon" ></u-icon>
        </view>
      </view>
    </view>


    <custabbar :current-page="4"></custabbar>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$padding-LR: 50rpx;

.part_title {
  color: #3fb636;
  line-height: 3;
}
.my_list {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 26rpx;
  line-height: 2;
  .my_list_item {
    width: 32%;
  }
}
.icon {
  display: block;
  margin: 0 auto 10rpx;
  width: 80rpx;
  height: 80rpx;
  background: #3fb636;
  border-radius: 50%;
  padding: 20rpx;
}
.light-green {
  background: #57c24e;
}

.content {
  background: #eee;
  padding-bottom: 90rpx;
}
.user_con {
  background: #20a937;
  padding: 40rpx $padding-LR;
  color: #fff;
  .user_info {
    display: flex;
    margin: 30rpx 0;
    font-size:36rpx;
    .avatar_con {
      margin-right: 20rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .icon {
      position: absolute;
      left: -6rpx;
      top: -4rpx;
      // display: block;
      // margin: 16rpx auto;
      background: transparent;
      width: 30rpx;
      height: 30rpx;
      opacity: 0.5;
    }
    .member_con {
      position: relative;
      display: flex;
      color: #959595;
      font-size: 24rpx;
      margin: 10rpx 0;
      .member_bg {
        position: relative;
        background: #eee;
        border-radius: 50%;
        width: 60rpx;
        height: 60rpx;
      }
      .text {
        position: absolute;
        left: 46rpx;
        top: 12rpx;
        background: #eee;
        line-height: 1.5;
        padding: 0 1.5em;
        width: 4em;
        border-radius: 14rpx;
        box-sizing: content-box;
      }
    }
  }
}
.main_con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50rpx $padding-LR;
  background: #fff;
  text-align: center;
  font-size: 28rpx;

  .icon_con {
    width: 23%;
    margin: 10rpx 0 30rpx;
  }
}
.mywallet_con {
  margin: 20rpx 0;
  padding: 0 $padding-LR 20rpx;
  background: #fff;
}
.myservice_con {
  padding: 0 $padding-LR;
  background: #fff;
  .service_list {
    display: flex;
    flex-wrap: wrap;
    font-size: 30rpx;
    .icon_con {
      margin-right: 20rpx;
    }
  }
  .service_item {
    display: flex;
    align-items: center;
    width: 49%;
    margin-bottom: 30rpx;
    span {
      font-size: 20rpx;
      color: #959595;
    }
  }
}
.setting_con {
  background: #fff;
  margin: 20rpx 0;
  padding: 0 $padding-LR;
  .icon {
    display: inline-block;
    background: transparent;
    width: auto;
    height: auto;
    margin: 0;
    padding:0;
    margin-right:10rpx;
    vertical-align: middle;
  }
  & > view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20rpx 0;
    border-bottom: 1rpx solid #eee;
    font-size: 30rpx;
  }
}
</style>