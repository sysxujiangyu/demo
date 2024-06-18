// 比较版本号 迭代器
function* walk(str){
    let part = '';
    let terminals = ['.', '-'];
    for(var i = 0; i < str.length; i++){
        if(terminals.indexOf(str[i]) !== -1){ // if(terminals.includes(str[i]) !== -1){
            // 终结符
            yield part; // 为纯数字时候可使用 yield parseInt(part); 
            part = '';
        }
        else{
            part += str[i];
        }
    }
    if(part){
        yield part;
    }
}