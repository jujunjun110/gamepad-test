/* here you require original components. */
require('./my-controller.js')
require('./shader.js')

function main() {}

document.addEventListener('DOMContentLoaded', function () {
    const sceneEl = document.querySelector('a-scene')
    if (sceneEl.hasLoaded) {
        main()
    } else {
        sceneEl.addEventListener('loaded', main)
    }
})

