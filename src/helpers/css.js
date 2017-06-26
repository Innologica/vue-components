/**
 * Created by Nikola nb on 03.01.2017.
 */

module.exports = {
    addClass: function (CssClass) {
        if (document.body.className.indexOf(CssClass) === -1) {
            document.body.className += ' ' + CssClass
        }
    },

    removeClass: function (CssClass) {
        if (document.body.className.indexOf(CssClass) !== -1) {
            document.body.className = document.body.className.replace(CssClass, '')
        }
    }

}
