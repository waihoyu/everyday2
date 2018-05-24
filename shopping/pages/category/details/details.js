// pages/category/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: {
            id: 1,
            image: '../../../assets/images/goods1.png',
            title: '新鲜梨花带雨',
            price: 0.01,
            stock: '有货',
            detail: '这里是梨花带雨详情',
            service: '不支持退货',
            parameter: '125g/个'
        },
        numbers: 1,
    },

    /**
     * 
     * 生命周期函数--监听页面加载
     * options  页面的参数
     */
    onLoad: function(options) {
        // const id = options.id || 2;
        // let curGoods;
        // for (let index = 0; index < goods.length; index++) {
        //     if (goods[i].id === id) {
        //         curGoods = goods[index];
        //         break;
        //     }
        // }
        // this.setData({ goods: curGoods });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

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