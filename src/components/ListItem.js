import UI from './UI';
var $ = require("jquery");

/**
 *  options中的参数
 *      title => 要显示的标题
 *      hook  => dom的钩子
 *      gridNum => 一行的数量
 *      map => 要添加的子元素
 *          {
 *              icon => iconfont编码，
 *              text => 子元素模块名称,
 *              val => 对应的下发的值
 *          }
 *     
 */
class ListItem extends UI{
    constructor(options){
        super(options);
    }
    create(){
        let html = "";
        let _map = this.options.map;
        let _gridNum = this.options.gridNum;
        let _hook = this.options.hook;
        
        if(this.options.value){
            this.value = this.options.value;
        }
        
        if(this.options.title){
           html += `<div class="wrap_title">`+this.options.title+`</div>`; 
        }
        html += `<div class="ui_wrap flex-left">`;
        for(let i in _map){
            if(_map[i].value === this.value){
                html += 
                `<div class="unit-1-`+_gridNum+` site-box text-center list-item on" 
                                                    data-mode-index = "`+_map[i].value+`">
                    <span class="iconfont">`+_map[i].icon+`</span>
                    <span class="mode_name">`+_map[i].text+`</span>
                </div>`;    
            }else{
                html += 
                `<div class="unit-1-`+_gridNum+` site-box text-center list-item" data-mode-index = "`+_map[i].value+`">
                    <span class="iconfont">`+_map[i].icon+`</span>
                    <span class="mode_name">`+_map[i].text+`</span>
                </div>`;     
            }
            
        }
        $(_hook).append(html);
    }
    initEventFn(){
        let selector = this.selectorDom();
        $(document).on("click",selector,(e)=>{
            let _this = $(e.currentTarget);
            let index = _this.data('mode-index');
            let item = this.options.map[Number(index)];
            this.selected(index,_this);
            if(this.options.change){
                this.options.change(item,index,_this);
            }
        });
    }

    selectorDom(){
        return this.options.hook + " .list-item";
    }

    selected(index,dom){
        let selector = this.selectorDom();
        $(selector).removeClass("on");
        $(dom).addClass("on");
    }
    

};




export default ListItem;