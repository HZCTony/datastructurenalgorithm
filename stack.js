function stack(){
    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(element){
        return items.pop();
    };

    this.peek = function(element){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    }

    //custom
    this.all = function(){
        return items;
    }
}


var stack = new stack();

stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());

console.log(stack.all());