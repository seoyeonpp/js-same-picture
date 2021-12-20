(function(window){
    samePicture = {
        init : function(){
            samePicture.imgClick();
        },
        imgClick : function(){
            const imgTypeA = document.getElementById('typeA'),
                    imgA = imgTypeA.children,
                    imgTypeB = document.getElementById('typeB'),
                    imgB = imgTypeB.children;

            // imgA
            for (var i = 0; i < imgA.length; i++){
                let eachImg = imgA[i];
                eachImg.addEventListener('click',function(){
                    this.className += ' active';
                    console.log(this.getAttribute('data-img'));
                });
            };

            // imgB
            for (var i = 0; i < imgB.length; i++){
                let eachImg = imgB[i];
                eachImg.addEventListener('click',function(){
                    this.className += ' active';
                    console.log(this.getAttribute('data-img'));
                });
            };
        },
        // data-img값을 리턴 받아서 둘이 같으면 correct 클래스 붙기
    
    }
    return samePicture.init();
})(window);