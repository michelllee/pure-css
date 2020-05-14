import './main.scss'

import Vue from 'vue/dist/vue.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');

    let app = new Vue({
        el: '#app',
        data: {
            earClass: 'ear-right'
        },
        methods: {
            dragEarRight: function() {
                this.earClass = 'ear-right-active'
                setTimeout(() => { this.earClass = 'ear-right' }, 6000)
            }
        }
    })

})