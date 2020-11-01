export function createScrollBehavior(offset) {
    return (to, from, savedPosition) => {
        if (to.hash) {
            return { selector: to.hash, offset }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
}
