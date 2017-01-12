var vm = new Vue({
    el: "#app",
    data: {
        cv: false,
        blog: false,
        

    },
    methods: {

    }
});


Vue.component('modal', {
    template: '#modal-template',
    methods: {
        close: function(){
            vm.cv = false;
            vm.blog = false;
        }        
    }
})
