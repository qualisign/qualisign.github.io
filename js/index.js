var vm = new Vue({
    el: "#app",
    data: {
        cv: false,
        blog: false,
        

    }
});


Vue.component('modal', {
    template: '#modal-template'
})
