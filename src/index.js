module.exports = function check(str, bracketsConfig) {
  var arr = [],
        new_str = str;

    for (const elem of bracketsConfig) {
        arr.push(elem[0] + elem[1]);
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            new_str = new_str.replace(arr[j], '');
        }
        if (new_str.length == 0) {
            return true;
        }
    }
    return false;
}
