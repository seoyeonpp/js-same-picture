(function(window){
    samePicture = {
        init : function(){
            console.log('dldl');
        },
        imgClick : function(){
            document.getElementsByClassName('img').addEventListener('click',function(){
                console.log('click');
            });
        },
    }
    return samePicture.init();
})(window);