const modal = {
    modal(obj, callback) {
        let title = obj.title || '';
        let animationtype = obj.animationtype || '';
        let oktext = obj.oktext || '确定';
        let canceltext = obj.canceltext || '取消';
        oxModal = document.createElement('ox-modal');
        oxModal.title = title;
        oxModal.animationtype = animationtype;
        oxModal.oktext = oktext;
        oxModal.canceltext = canceltext;
        oxModal.isadd = true;
        if (obj.content) {
            let content = document.createElement('div')
            content.className = 'content';
            content.slot = 'content';
            content.innerText = obj.content;
            oxModal.appendChild(content)
        }
        // if (obj.type) {
        //     let type = obj.type;
        //     oxModal.type = type;
        //     let iconDiv = document.createElement('div')
        //     iconDiv.className = 'icon-area';
        //     iconDiv.slot = 'icon';
        //     let icon = document.createElement('i')
        //     if (type == 'success') {
        //         icon.className = 'fa fa-check-circle'
        //     } else if (type == 'warning') {
        //         icon.className = 'fa fa-exclamation-circle'
        //     } else if (type == 'error') {
        //         icon.className = 'fa fa-times-circle'
        //     } else {
        //         icon.className = type
        //     }
        //     iconDiv.appendChild(icon)
        //     oxModal.appendChild(iconDiv)
        // }
        // document.body.appendChild(oxModal)
        // setTimeout(()=>{
        //     oxModal.show(callback)
        // },200)

    },

    type(type, color) {
        oxModal.type = type;
        let iconDiv = document.createElement('div')
        iconDiv.className = 'icon-area';
        iconDiv.slot = 'icon';
        let icon = document.createElement('i')
        if (type == 'success') {
            icon.className = 'fa fa-check-circle'
        } else if (type == 'warning') {
            icon.className = 'fa fa-exclamation-circle'
        } else if (type == 'error') {
            icon.className = 'fa fa-times-circle'
        } else {
            icon.className = type;
            icon.style.color = color
        }
        iconDiv.appendChild(icon)
        oxModal.appendChild(iconDiv)
    },
    success(obj,onok,oncancel) {
        this.modal(obj)
        this.type('success')
        document.body.appendChild(oxModal)
        oxModal.show()
        var cancel = oxModal.shadowRoot.children[1].children[1].children[3].children[0]
        var ok = oxModal.shadowRoot.children[1].children[1].children[3].children[1]
        cancel.addEventListener('click',oncancel) 
        ok.addEventListener('click',onok) 
    },
    warning(obj,onok,oncancel) {
        this.modal(obj)
        this.type('warning')
        document.body.appendChild(oxModal)
        oxModal.show()
        var cancel = oxModal.shadowRoot.children[1].children[1].children[3].children[0]
        var ok = oxModal.shadowRoot.children[1].children[1].children[3].children[1]
        cancel.addEventListener('click',oncancel) 
        ok.addEventListener('click',onok) 
    },
    error(obj,onok,oncancel) {
        this.modal(obj)
        this.type('error')
        document.body.appendChild(oxModal)
        oxModal.show()
        var cancel = oxModal.shadowRoot.children[1].children[1].children[3].children[0]
        var ok = oxModal.shadowRoot.children[1].children[1].children[3].children[1]
        cancel.addEventListener('click',oncancel) 
        ok.addEventListener('click',onok) 
    },
    basic(obj,onok,oncancel) {
        this.modal(obj)
        document.body.appendChild(oxModal)
        oxModal.show()
        var cancel = oxModal.shadowRoot.children[1].children[1].children[3].children[0]
        var ok = oxModal.shadowRoot.children[1].children[1].children[3].children[1]
        cancel.addEventListener('click',oncancel) 
        ok.addEventListener('click',onok) 
    },
    //使用font awesome图标库自定义图标
    customType(obj, icon, color,onok,oncancel) {
        this.modal(obj)
        this.type(icon, color)
        document.body.appendChild(oxModal)
        oxModal.show()
        var cancel = oxModal.shadowRoot.children[1].children[1].children[3].children[0]
        var ok = oxModal.shadowRoot.children[1].children[1].children[3].children[1]
        cancel.addEventListener('click',oncancel) 
        ok.addEventListener('click',onok) 
    }
}