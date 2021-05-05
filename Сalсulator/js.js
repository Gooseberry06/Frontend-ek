btn.addEventListener("click", f_out);

    function f_out (){
         P = (Number(D0.value)*(1+Number(g.value)))/(Number(K.value)-Number(g.value));
         result.innerHTML ="P="+P;
    }