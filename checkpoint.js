var insertionSort = function(t) {
    for(var i=1;i<t.length;i++){
        var aux=t[i]
        var j=i
        while(j>0 && t[j-1]>aux){
            t[j]=t[j-1]
            j--
        }
            t[j]=aux

    }
    
   
    return t
   }