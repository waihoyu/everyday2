// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category: [{
                name: '推荐专区',
                id: 'tuijianzhuanqu'
            },
            {
                name: '夏季专区',
                id: 'xiajizhuanqu'
            },
            {
                name: '个性专区',
                id: 'gexingzhuanqu'
            },
            {
                name: '居家',
                id: 'jujia'
            },
            {
                name: '配件',
                id: 'peijian'
            },
            {
                name: '服装',
                id: 'fuzhuang'
            },
            {
                name: '电器',
                id: 'dianqi'
            },
            {
                name: '洗护',
                id: 'xihu'
            },
            {
                name: '饮食',
                id: 'yinshi'
            },
            {
                name: '餐厨',
                id: 'canchu'
            },
            {
                name: '婴童',
                id: 'yintong'
            },
            {
                name: '文体',
                id: 'wenti'
            },
            {
                name: '特色区',
                id: 'tesequ'
            }
        ],
        curIndex: 0,
        index: 0,
        detail: [],
        toView: 'xiajizhuanqu',
        xindex: 0,
        display: false,
    },
    switchCategory: function(e) {
        console.log(e);
        // console.log(e.currentTarget.dataset.id);
        this.setData({
            toView: e.currentTarget.dataset.id,
            curIndex: e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0,
        })
    },

    categoryDetail: function(e) {

        wx.navigateTo({
            url: './details/details',
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
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '分类',
            success: function(res) {
                // success
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b051a2b3653f4551c6bc7f2/shopping/category',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: (res) => {
                // success
                this.setData({
                    category: res.data.data.category,
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b051a2b3653f4551c6bc7f2/shopping/catetory-detail#!method=get',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: (res) => {
                // success
                this.setData({
                    detail: res.data.data.detail,
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})