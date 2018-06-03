//index.js
//获取应用实例
const app = getApp()

Page({
    gotoSearch: function() {
        wx.navigateTo({
            url: '/pages/search/search',
            success: function(res) {
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})