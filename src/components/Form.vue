<template>
  <view class="content">
    
    
    <!-- 底部固定栏 -->
    <view class="fixed_con">
      <navigator url="/pages/formsubmit/formsubmit">
        <span class="btn">提 交</span>
      </navigator>
    </view>


    <view class="form_con">
      <u-form :model="form" ref="uForm">
        <view class="form_item">
          <label>
            <span>商家类型：</span>
            <u-input v-model="form.type" type="select" style="flex: 1" />
          </label>
        </view>
        <view class="form_item">
          <label>
            <span>商家名称：</span>
            <u-input v-model="form.name" />
          </label>
        </view>

        <view class="form_item">
          <label>
            <span>商家分类：</span>
            <u-input v-model="form.trade" type="select" style="flex: 1" />
          </label>
        </view>

        <view class="form_item">
          <label>
            <span>统一社会信用代码：</span>
            <u-input
              v-model="form.code"
              placeholder="请输入代码"
              style="flex: 1"
            />
          </label>
        </view>

        <view class="form_item bio_con">
          <span>商家简介：</span>
          <textarea cols="30" rows="10" placeholder="请输入简介"></textarea>
        </view>

        <view class="form_item flex-column">
          <span>上传证件：</span>
          <view class="upload_con">
            <div class="img_con">
              <u-upload style="display: inline-block"></u-upload>
              <p>店铺LOGO</p>
            </div>
            <div class="img_con">
              <u-upload style="display: inline-block"></u-upload>
              <p>店铺照片</p>
            </div>
            <div class="img_con">
              <u-upload style="display: inline-block"></u-upload>
              <p>身份证正面</p>
            </div>
            <div class="img_con">
              <u-upload style="display: inline-block"></u-upload>
              <p>身份证反面</p>
            </div>
          </view>
        </view>

        <view class="form_item">
          <label>
            <span class="require">*</span>
            <span>所在地区：</span>
            <u-input
              v-model="form.province"
              type="select"
              style="flex: 1"
              placeholder="请选择地区"
              @click="showArea = true"
            />
            <u-picker mode="region" v-model="showArea" confirm-color="#20a937">
            </u-picker>
          </label>
        </view>

        <view class="form_item bio_con">
          <span>详细街道：</span>
          <textarea cols="30" rows="10" placeholder="请填写详细街道住所信息"></textarea>
        </view>

      </u-form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "企业",
      },
      showArea: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  // position: absolute;
  display: inline-block;
  background: #20a937;
  color: #fff;
  width:20em;
  text-align: center;
  border-radius: 40rpx;
  line-height: 3;
}

.fixed_con{
  position:fixed;
  bottom:0;
  left:0;
  z-index:10;
  background:#fff;
  width:100%;
  padding:20rpx 50rpx;
  box-shadow:0 -5rpx 20rpx 5rpx #eee;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  // align-items: flex-end;
  font-size:26rpx;
  color:#959595;
}


.content {
  padding: 30rpx 40rpx 120rpx;
}
.form_item {
  position: relative;
  margin: 30rpx 0;
  padding: 10rpx 20rpx;
  width: 100%;
  border: 1rpx solid #eee;
  font-size: 26rpx;
  box-sizing: border-box;
  .require {
    position: absolute;
    left: 8rpx;
    color: #f40;
  }
  label {
    display: flex;
    align-items: center;
    span {
      margin-right: 0.5em;
    }
  }
  .upload_con {
    display: flex;
    flex-wrap: wrap;
    color: #959595;
    padding: 20rpx 0;
    .img_con {
      width: 50%;
      text-align: center;
    }
  }
}
.bio_con {
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
  span {
    white-space: nowrap;
  }
  textarea {
    font-size: 28rpx;
  }
}
</style>