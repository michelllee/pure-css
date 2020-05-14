import './main.scss'

import Vue from 'vue/dist/vue.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');

    let app = new Vue({
        el: '#app',
        data: {
            earClass: 'ear-right',
            earClassLeft: 'ear-left'
        },
        methods: {
            dragEarRight: function() {
                this.earClass = 'ear-right-active'
                setTimeout(() => { this.earClass = 'ear-right' }, 6000)
            },
            dragEarLeft: function() {
                this.earClassLeft = 'ear-left-active'
                setTimeout(() => { this.earClassLeft = 'ear-left' }, 6000)
            },
        }
    })

})