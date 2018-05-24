// pages/cart/cart.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        hasList: false,
        carts: [],
        totalPrice: 0,
        selectAllStatus: true
    },
    selectAll(e) {
        let selectAllStatus = this.data.selectAllStatus;
        selectAllStatus = !selectAllStatus;
        let carts = this.data.carts;

        for (let i = 0; i < carts.length; i++) {
            carts[i].selected = selectAllStatus;
        }
        this.setData({
            carts,
            selectAllStatus
        })
        this.getTotalPrice();
    },
    selectList(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        console.log(e);
        const selected = carts[index].selected;

        carts[index].selected = !selected;
        this.setData({
            carts,
        })
        this.getTotalPrice();
    },
    addCount: function(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        let num = carts[index].num;
        num++;
        carts[index].num = num;
        this.setData({
            carts
        })
        this.getTotalPrice();
    },
    minusCount: function(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        let num = carts[index].num;
        if (num === 0) return false;
        num--;
        carts[index].num = num;
        this.setData({
            carts
        })
        this.getTotalPrice();
    },
    /**
     * 总价的计算方法
     * compute
     */
    getTotalPrice() {
        let carts = this.data.carts;
        let total = 0;
        for (let index = 0; index < carts.length; index++) {
            if (carts[index].selected) {
                total += carts[index].num * carts[index].price;
            }
        }
        this.setData({ totalPrice: total.toFixed(2) })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
        this.setData({
            carts: [{ id: 1, title: '新鲜芹菜 半斤', image: '../../assets/images/s5.png', num: 4, price: 0.01, selected: true },
                { id: 2, title: '素米 500g', image: '../../assets/images//s6.png', num: 1, price: 0.03, selected: true }
            ],
            hasList: true,
        });
        this.getTotalPrice();
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