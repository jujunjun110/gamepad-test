if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

/* here you write your components. */
AFRAME.registerComponent('my-controller', {
    schema: {},
    multiple: false,
    init: function () {
        const el = this.el
        el.addEventListener('triggerdown', () => {
            console.log('trigger down')
        })
    }
})

