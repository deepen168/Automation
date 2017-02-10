function repeatedRows(c){;
    var result ='';
    for(var i=1; i <= c;i++){
        result += i + ' ';
    }
    console.log(result);    
    return result;
}

function matrics(l,c){
    var result = '';
    for(var j = 0; j < l; j++){}
        result += repeatedRows(c) + '\n';
    }
    return result;
}

//matrics(12,12);
repeatedRows(12);