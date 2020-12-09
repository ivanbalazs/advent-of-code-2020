import Vue from 'vue';

Vue.prototype.existingPages = [];
const context = require.context('.', true, /^.\/([0-9]+)\/$/);
context.keys().forEach(component => {
    const pageNum = component.match(/[0-9]+/);
    Vue.prototype.existingPages.push(parseInt(...pageNum));
});
