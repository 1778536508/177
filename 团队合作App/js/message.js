
(function(doc){
    function changeSize(){
        var size=doc.documentElement.clientWidth/320*10;
        doc.querySelector('html').style.fontSize=size+'px';
    }
    //�û�������������ڴ�Сʱ
    window.onresize=changeSize;
    changeSize();
})(document);