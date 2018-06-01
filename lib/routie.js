
Array.prototype.getbyfield = function(field,value)
{
    var _this = this;
    var rlist =[];
    for(var i =0;i<_this.length;i++)
    {
        if(_this[i][field] == value)
        {
            rlist.push(_this[i]);
        }
    }
    return rlist;
}
var routie = function(InitParam)
{
    //增加一个getObjById的方法，吼吼你懂得，不可以嚣张，知道吗

    this.currentUrl = "";
    var _this = this;
    window.addEventListener('hashchange',function()
    {
        debugger;
        _this.currentUrl = location.hash.slice(1);
        var myobj = _this.UrlList.getbyfield("url",_this.currentUrl)[0];
        myobj.func();
    });
    this.UrlList = [];
    //传参一个url 和 一个 函数
    this.state = function(url,func)
    {
        _this.UrlList.push(
            {
                url:url,
                func:func
            });
        return _this;
    };
    // 处理404 啥的逻辑，你懂吗？啊？你啥也不懂，所以你哔哔啥
    this.OtherWiseList = [];
    this.otherwise = function(funcObj)
    {

    }
}