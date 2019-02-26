var extractions = [
    {   name: "rows",
        get:  function(data,span,block,member){
                  return data[block][member];
              }
    },
    {   name: "cols",
        get:  function(data,span,block,member) {
                  return data[member][block];
              }
    },
    {   name: "minis",
        get:  function(data,span,block,member) {
                  var coloff = (block % span) * span;
                  var rowoff = (block / span) * span;
                  return data[parseInt(rowoff + (member / span))][parseInt(coloff + (member % span))];
              }
    },
]

function isvalid(data) {
    var size = data.length;
    var slot = Math.sqrt(size);
    for (var block_size = 0; block_size < size; block_size++) {
        if (data[block_size].length != size) {
            return false;
        }
        for (var ext = 0; ext < extractions.length; ext++) {
            var tmp = [];
            for (var member = 0; member < size; member++) {
                tmp.push(extractions[ext].get(data, slot, block_size, member));
            }
            for (var i = 1; i <= size; i++) {
                if (tmp.indexOf(i) < 0) {
                    return false;
                }
            }
        }
    }
    return true;
}

var correctArray = [
    [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

console.log(isvalid(correctArray));
