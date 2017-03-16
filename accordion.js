/**
 * 
 * @param {{string}} accordionSelector selector of accordion header
 * @param {{string}} next sibling of accordionSelector clicked on
 * @param {{string}} activeClass add class to accordion haeader
 * @param {{string}} openAllBtnSelector open all button selector
 * @param {{string}} topLevelSelector top level selector
 * @param {{string}} topLevelActiveClass top level active class
 * 
 */


var config = {
    "accordionSelector": ".accordion",
    "accordionPanel": "panel",
    "activeClass": "active",
    "openAllBtnSelector": ".open-all-btn > button",
    "topLevelSelector": ".base",
    "topLevelActiveClass": "acc-active",
    "isOpen": false
}

var accordion = {

    "init": function() {
        var accordions = document.querySelectorAll(config.accordionSelector),
            openAllBTn = document.querySelectorAll(config.openAllBtnSelector);

        accordions.forEach(function(item, i) {
            item.addEventListener("click", accordion.open);
        });

        openAllBTn.forEach(function(btn, i) {
            btn.addEventListener("click", function() {
                accordion.openAll(accordions)
            });
        });

    },

    "getHeight": function(el) {
        var height;

        height = el.scrollHeight;

        return height + "px";
    },

    "open": function(accordions) {

        var panel = this.nextElementSibling,
            panelHeight = accordion.getHeight(panel);


        if (panel.style.height) {
            panel.style.height = null;
        } else {
            panel.style.height = panelHeight;
        }

        this.classList.toggle(config.activeClass);

    },

    "openAll": function(accordions) {

        accordions.forEach(function(acc, i) {

            var panels = acc.nextElementSibling,
                panelsheight = accordion.getHeight(panels);

            if (config.isOpen) {
                acc.classList.remove(config.activeClass);
            } else {
                acc.classList.add(config.activeClass);
            }

            panels.style.height = (config.isOpen) ? null : panelsheight;

            console.log(event.target.classList)
        });



        var base = document.querySelectorAll(config.topLevelSelector);

        // toggle class on body tag 

        base[0].classList.contains(config.topLevelActiveClass) ? base[0].classList.remove(config.topLevelActiveClass) : base[0].classList.add(config.topLevelActiveClass);

        // is open key
        config.isOpen = (config.isOpen) ? false : true;

    }

}


/**
 * TO DO's
 * add gulpfile for sass 
 * rewrite css into sass 
 * style out the accordion 
 */
accordion.init();

module.exports = accordion;