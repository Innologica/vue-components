/**
 * Created by Nikola nb on 03.01.2017.
 */

module.exports = {

    addClass (CssClass) {
        if (document.body.className.indexOf(CssClass) === -1) {
            document.body.className += ' ' + CssClass
        }
    },

    removeClass (CssClass) {
        if (document.body.className.indexOf(CssClass) !== -1) {
            document.body.className = document.body.className.replace(CssClass, '')
        }
    }

}
