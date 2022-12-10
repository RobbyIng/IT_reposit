// function HtmlElement() {
// this.click = function(){
//         console.log('Clicked');
//     }
// }
// HtmlElement.prototype.focus = function(){
//     console.log('focused');
// }

// function HtmlSelectElement(...rest){
//     this.items = rest,
//     this.addItems = function(item){
//         this.items.push(item);
//     }
//     this.deleteItem = function(item){
//         this.items.splice(this.items.indexOf(item),1);
//     } 
// }

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlElement() {
this.click = function(){
        console.log('Clicked');
    }
}
HtmlElement.prototype.focus = function(){
    console.log('focused');
}

function HtmlSelectElement(...rest){
    this.items = rest,
    this.addItems = function(item){
        this.items.push(item);
    }
    this.deleteItem = function(item){
        this.items.splice(this.items.indexOf(item),1);
    } 
   this.render = function(){
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    } 
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


function HtmlImageElement(src){
    this.src = src   
    this.render = function(){
    return `<img src="${this.src}" />`;
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
