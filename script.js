AFRAME.registerComponent('random-color', {
    init: function(){
        this.el.addEventListener('collide', function(){
            var randomHex = '#' + Math.random().toString(16).substr(-6);
            this.el.setAttribute('material', 'color', randomHex);
                                 });
    }
});