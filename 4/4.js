new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk"> Ninja wwww </a>'
    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' +  this.name;
        }
    }
});