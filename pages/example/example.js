Page({
  data:{
    //按钮设置
    titleColor : 'rgb(100,170,50)',       //标题按钮背景颜色
    titleHeight:100,                      //标题高度，单位为rpx
    //指示器
    indicatorColor : 'orange',            //指示条颜色
    bgColor : 'white',                    //指示条背景颜色
    indicatorHeight:20,                   //指示器高度
    titles:[
                {
                  name:'标题一',           //此处更改标题内容和数量
                  selected:false,
                  color:''
                },
                {
                  name:'标题二',
                  selected:true,
                  color:''  
                },
                {
                  name:'标题三',
                  selected:true,
                  color:''
                },
                {
                  name:'标题四',
                  selected:true,
                  color:''
                },
                {
                  name:'标题五',
                  selected:true,
                  color:''
                }
            ],
    titleScrollLeft : 0,
    //屏幕宽度
    width:0,
    //平分屏幕宽度,初始化为10%
    divideWidth:10,
    //是否显示
    hidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    },
  onReady:function(){
    // 页面渲染完成
   
  },
  onShow:function(){
        // 页面显示

        //计算按钮宽度
        this.computeWidth();
        //初始化指示器
        this.defaultIndicator(0);

        
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  //标题点击事件
  titleClick:function(e){
    var index = e.currentTarget.id;
    //全部设置为true
    this.defaultIndicator(index);
  },
  //计算按钮宽度
  computeWidth:function(){
      var page = this;
      var count = this.data.titles.length;
      //获取屏幕宽度
      wx.getSystemInfo({
          success: function(res) {
            var divideWidth = 100 / count;
              page.setData({
                width : res.windowWidth,
                divideWidth : divideWidth
              })
          }
      })
  },
  //初始化指示器
  defaultIndicator : function(index){
      //全部设置为true
      var titles = this.data.titles;
      for (var i=0;i<titles.length;i++){
        titles[i].color = this.data.bgColor;
      }
      titles[index].color = this.data.indicatorColor;
        this.setData({
        titles : titles
      })
  }
})