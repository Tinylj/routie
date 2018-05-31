var routie = function(InitParam)
{
    this.currentUrl = location.hash.slice(1);
    var _this = this;
    window.addEventListener('hashchange',function()
    {
        _this.loadHash();
    });
    this.loadHash = function()
    {

    }
    //传参一个url 和 一个 函数
    this.state = function(url,funcObj)
    {
        
    }

}