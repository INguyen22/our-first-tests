 const chai = require('chai');
 const expect = chai.expect;
 const Box = require('../src/Box');

 describe('box', () => {

    it('should return true', () => {
        expect(true).to.equal(true)
    })

    it('should be a function', () => {
        const box = new Box()

        expect(Box).to.be.a('function')
    })

    it('should be an instance of Box', () => {
        const box = new Box()

        expect(box).to.be.an.instanceOf(Box)
    })

    it('should have a default height and width of 100', () => {
        const box = new Box()

        expect(box.height).to.equal(100)
        expect(box.width).to.equal(100)
    })

    it('should be able to pass in a height and width', () => {
        const box = new Box(50, 50)

        expect(box.height).to.equal(50)
        expect(box.width).to.equal(50)
    })

    it('should be able to calculate the area', () => {
        const box = new Box()

        expect(box.calculateArea()).to.equal(10000)
    })

    it('should be able to increase width by a provided value', () => {
        const box = new Box()

        expect(box.increaseWidth(10)).to.equal(110)
    })

    it('should be able to increase height by a provided value', () => {
        const box = new Box()

        expect(box.increaseHeight(10)).to.equal(110)
    })

    it('should be able to increment measurements', () => {
        const box = new Box(60, 50)

        expect(box.increment(10, 'height')).to.equal(70)
        expect(box.increment(10, 'width')).to.equal(60)
    })
 })