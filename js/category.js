var CategorySlide = function() {

}

CategorySlide.prototype = {
    categoryLeft: function(){
        var swiper1 = new Swiper('#categoryLeft', {
            direction: 'vertical',
            freeMode: true,
            mousewheel: true,
            slidesPerView: 'auto',
        });    
    },
    categoryRight: function() {
        // 2. 初始化右侧滑动
        var swiper2 = new Swiper('#categoryRight', {
            direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            //初始化滚动条  必须子元素的高度超过父元素
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },    
    //分类左侧的点击效果
    //e.target
    categoryLeftClick: function(){
        // 获取要操作的对象
        var swiperWrapper = document.querySelector('.swiper-wrapper');
        var ul = document.querySelector('.category-left ul');
        var lis = document.querySelectorAll('.category-left ul li');
        //给a标签点击事件移除类和添加类
        
        ul.addEventListener('click', function(e){
            for(var i = 0; i < lis.length; i++){
                lis[i].classList.remove('active');
                lis[i].index = i; 
             }
            e.target.parentNode.classList.add('active');

            var translateY = -e.target.parentNode.index *  e.target.parentNode.offsetHeight;
            var swiperWrapperHeight = swiperWrapper.offsetHeight;
            var ulHeight = ul.offsetHeight;
            var maxTranslateY = swiperWrapperHeight - ulHeight;
            if( translateY < maxTranslateY ){
                translateY =  maxTranslateY;
            }
            swiperWrapper.style.transform = 'translate3d(0px, '+translateY+'px,0px)';
            swiperWrapper.style.transition = 'all 0.3s';
        }); 

    }    
}

window.addEventListener('load', function(){
    var categorySlide = new CategorySlide();
    categorySlide.categoryLeft();
    categorySlide.categoryRight();
    categorySlide.categoryLeftClick();
})