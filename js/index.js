// 声明一个构造函数 存储京东效果对象 使用面向对象的方式


var JDEffect = function(){

}
//JDEffect原型对象
JDEffect.prototype = {
    //头部渐变效果
    headerGradient: function(){
        var header = document.querySelector('#header');
        var slideHeight = document.querySelector('#slide').offsetHeight;
        window.addEventListener('scroll',scroll);
        function scroll(){
            var scrollTop = document.documentElement.scrollTop;
            var opcity = scrollTop / slideHeight;
            header.style.backgroundColor = 'rgba(222,24,27, '+ opcity +')';
        }
    },

    //轮播图效果
    slide: function(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            speed: 500,
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            freeMode: false,
        })
    },

    //倒计时效果
    downTime: function(){
        //  hour  minute second     

        //设置到场的时间
        var futureTime = new Date(2018, 6, 22, 20, 00, 00);
        //获取到当前时间
        var nowTime = new Date();
        //到场时间减去当前时间得到倒计时的总时间
        var time = Math.floor((futureTime - nowTime) / 1000);
        //console.log(time);
        var spans = document.querySelectorAll('.seckill-time span');
        setInterval(setSeckill, 1000); 
        //计算出要倒计时的时分秒
        function setSeckill(){
            time --;
            if(time < 0){
                time = 7200;
            }
            var hour = Math.floor(time / 3600);
           
            var minute = Math.floor(time % 3600 / 60);
            
            var second = Math.floor(time % 60);
            
            //将时分秒设置给span渲染到页面
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);
        }
       
    }
}
window.addEventListener('load',function(){
    var jdEffect = new JDEffect();
    jdEffect.headerGradient();
    jdEffect.slide();
    jdEffect.downTime();
})
