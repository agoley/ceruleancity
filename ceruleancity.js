/**
 * CERULEANCITY JS
 * CERULEANCITY is a light JavaScript Library for data binding and common web interfaces. Compatible with most browsers.
 * 
 * DEPENDENCIES
 * 1. palletetownJS
 * 
 * Alex Goley
 */

// VARIABLES
var ceruleancity = {}; // Initialize the ceruleancity object.

// CLASSES
class JooCarousel {
    constructor(mems) {

        this.members = mems; // members: Element[] - all members must share the same parent.
        this.currId = 0; // currId: number
        this.paused = false; // paused: boolean
    }

    goTo(id) {

        // TODO
    }

    start(milliseconds) {
        if (!palletetown) {
            console.error('ceruleancity: missing dependency palletetown.js');
            return;
        }
        this.paused = false;

        // Function to progress the carousel.
        var next = function () {

            var nextId = (that.currId == (that.members.length - 1)) ? 0 : (that.currId + 1);
            var currEl = that.members[that.currId];
            var nextEl = that.members[nextId];
            that.currId = nextId;

            // Position the next Element to be animated.
            nextEl.style.top = currEl.clientTop + 'px';
            nextEl.style.left = currEl.clientWidth + 'px';
            nextEl.style.display = 'inline';

            // Animate the current and next Elements.
            palletetown.move(currEl, 'left', null, 2); // Moves the current element out of its container.
            palletetown.move(nextEl, 'left', null, 2); // Moves the next element into the container.

            var me = that;
            setTimeout(function () {
                if (!me.paused) {
                    next.apply(me);
                }
            }, milliseconds);
        }

        var that = this;
        next.apply(that);
    }

    stop() {
        this.paused = true;
    }
}


// FUNCTIONS