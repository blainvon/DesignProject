window.onload = function () {

    Vue.component('tags-component', {
        template: '<div><label>Tag Group</label>\n' +
            '<div></div>\n' +
        '<button class="btn btn-default" v-on:click="individualTags">Vinmaster</button></div>',
        data: function () {
            return {
                tag: 'new tag'
            }
        },
        methods: {
            sendTags: function () {
                this.$emit('tag', {tag: this.tag})
            }
        }
    });

    new Vue({
       el: '#tagGroup',
        data: {
           individualTags : []
        },
        method: {

        }

    });

    new Vue({
        el: '#titlePage',
        data: {
            title: 'Commercial Property - Add Field'
        }
    });

    new Vue({
        el: '#fieldGroup',
        data: {
            title: '',
            event: {
                name: '',
                description: ''
            },
            events: []
        },
        created: function () {
            this.fetchEvents();
        },
        methods: {
            fetchEvents: function () {
                this.$http.get("data.json").then(function (response) {
                    this.events = response.data;
                }, function (response) {
                    console.error(response.status + " : Could not fetch data");
                    this.events = [];
                });
            },
            addEvent: function () {
                if (this.event.name) {
                    this.events.push(this.event);
                    this.event = {
                        name: '',
                        description: '',
                        date: ''
                    };
                }
            },
            deleteEvent: function (id) {
                this.events = this.events.filter(function (event) {
                    return event.id !== id;
                });
            }
        }
    });


};
