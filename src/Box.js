class Box {
    constructor(height, width) {
        this.height = height || 100
        this.width = width || 100
    }
    calculateArea() {
        let area = this.height * this.width
        return area
    }
    increaseWidth(addition) {
        let newWidth = this.width + addition
        return newWidth
    }
    increaseHeight(addition) {
        let newHeight = this.height + addition
        return newHeight
    }
    increment(amount, value) {
        let newValue = this[value] + amount
        return newValue
    }
}


 module.exports = Box;
