import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-modal
 */
 class OXModal extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClick);
    this.title = '成功反馈标题';
    this.content = '成功反馈描述，内容要精简哦！';
    // this.cancelText = '次要操作';
    // this.okText = '主要操作';
    this.hide = 'hide'
    
  }
  static get template() {
    return html `
    <style>
    @import '../elements/ox-modal-liuhao/ox-modal-liuhao.css';
    @import "../assets/css/font-awesome.min.css";
    </style>
    <div class$="ox-modal-outer [[mask]]">
      <div class$="[[mask]] ox-modal-mask"></div>
      <div class="ox-modal-inner">
        <div class$="ox-modal-icon [[themeIcon]]">
          <i class$="fa fa-[[type]]"></i>
        </div>
        <h3 class="title">{{title}}</h3>
        <p class="content">{{content}}</p>
        <div class="ox-modal-btn-wrap clearfix">
        <div class="ox-modal-cancel fl" on-click="onCancel">
        {{cancel-text}}
        </div>
        <div class="ox-modal-ok fr" on-click="onOk">
        {{oktext}}
        </div>
        </div>
      </div>
    </div>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'check',
      },
      title: {
        type: String,
        value: '标题'
      },
      content:{
        type: String,
        value: '内容'
      },
      oktext: {
        type: String,
        value: '确定'
      },
      'cancel-text': {
        type: String,
        value: '取消'
      },
      mask: {
        type:String,
        value:'hide'
      },
      themeIcon:{
        type:String,
        value:'success'
      }
    };
  }
  onClick(e) {
    // var name = document.getElementsByClassName('name')[0]
    // name.innerHTML = "刘浩浩"
  }
  onCancel(){
    console.log('点击了取消')
    this.mask = "hide";
  }
  onOk(){
    console.log('点击了确定')
    this.mask = "hide";
  }
  connectedCallback(){
  super.connectedCallback();
    console.log(2)
  }
  // disconnectedCallback(){
  //   console.log('attributeChangedCallback')

  // }
  ready() {
    console.log('ready')
    // console.log(this.oktext)
    super.ready();
    var that = this;
    var buttons = document.querySelectorAll('ox-button')
    Array.prototype.map.call(buttons,function(button){
      button.addEventListener('click', function (e) {
        var type = e.target.type;
        that.mask = 'show';
        that.title = '我是点击的标题'
        if(type == 'success'){
          that.type = 'check';
          that.themeIcon = 'success'
        }else if(type == 'warning'){
          that.type = 'exclamation'
          that.themeIcon = 'warning'
        }else{
          that.type = 'close'
          that.themeIcon = 'error'
          that.oktext = '确定'
          that['cancel-text'] = '取消'
        }
      })
    })
    var btns = document.getElementsByClassName('btn');
    Array.prototype.map.call(btns,function(btn){
      btn.addEventListener('click',function(e){
        // console.log(e)
        var type = e.target.dataset.type;
        if(type == 'success'){
          that.success({
            title:'调用方法成功',
            content:'成功的内容描述',
            oktext:'成功按钮'
          });
        }else if(type == 'warning'){
          that.warning({
            title:'调用方法警告',
            content:'警告警告警告警告警告警告警告警告警告警告警告',
            oktext:'警告按钮'
          });
        }else{
          that.error({
            title:'调用方法失败',
            content:'失败',
            oktext:'失败按钮'
          });
        }
      })
    })
  }
  success(obj){
    console.log('success')
    this.type = 'check';
    this.mask = 'show';
    this.themeIcon = 'success'
    this.showModal(obj)
  }
  warning(obj){
    console.log('warning')
    this.type = 'exclamation';
    this.mask = 'show';
    this.themeIcon = 'warning'
    this.showModal(obj)
  }
  error(obj){
    console.log('error')
    this.type = 'close';
    this.mask = 'show';
    this.themeIcon = 'error';
    this.showModal(obj)
  }
  showModal(obj){
    if(obj){
      if(obj.title){
        this.title = obj.title
      }
      if(obj.content){
        this.content = obj.content
      }
      if(obj.oktext){
        this.oktext = obj.oktext
      }
      if(obj['cancel-text']){
        console.log('cancel')
        this['cancel-text'] = obj['cancel-text']
      }
    }
  }
}

customElements.define('ox-modal', OXModal);