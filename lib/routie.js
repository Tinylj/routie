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
    this.currentUrl = "";
    var _this = this;
    window.addEventListener('hashchange',function()
    {
        debugger;
        _this.currentUrl = location.hash.slice(1);
        var myobjList = _this.UrlList.getbyfield("url",_this.currentUrl);
        if(myobjList.length>0)
        {
            myobjList[0].func();
        }
        else
        {
            if(typeof  _this.otherWiseList == "function")
            {
                _this.otherWiseList();
            }
        }
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
    this.otherWiseList = null;
    this.otherwise = function(funcObj)
    {
        this.otherWiseList = funcObj;
        return this;
    }
}