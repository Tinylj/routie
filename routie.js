var routie = function(InitParam)
{
    //增加一个getObjById的方法，吼吼你懂得，不可以嚣张，知道吗

    this.currentUrl = location.hash.slice(1);
    var _this = this;
    window.addEventListener('hashchange',function()
    {
        _this.loadHash();
    });
    this.loadHash = function()
    {

    };
    this.UrlList = [];
    //传参一个url 和 一个 函数
    this.state = function(url,funcObj)
    {
        this.UrlList.push(
            {
                url:url,
                fobj:funcObj
            });
    };
    // 处理404 啥的逻辑，你懂吗？啊？你啥也不懂，所以你哔哔啥
    this.OtherWiseList = [];
    this.otherwise = function(funcObj)
    {

    }
}