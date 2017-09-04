/* global describe, it */

const path = require('path')
const Sassaby = require('sassaby')

describe('_tools.type-checking.scss', function () {
  const file = path.resolve(__dirname, '_tools.type-checking.scss')
  const sassaby = new Sassaby(file)

  describe('is-number', function () {
    it('should return true if a number is provided', function () {
      sassaby.func('is-number').calledWithArgs('2em').isTrue()
    })

    it('should return false if a not a number is provided', function () {
      sassaby.func('is-number').calledWithArgs('a').isFalse()
    })
  })

  describe('is-time', function () {
    it('should return true if a time value is provided', function () {
      sassaby.func('is-time').calledWithArgs('2s').isTrue()
    })
    it('should return false if a none time value is provided', function () {
      sassaby.func('is-time').calledWithArgs('s').isFalse()
    })
  })

  describe('is-angle', function () {
    it('should return true if a angle value is provided', function () {
      sassaby.func('is-angle').calledWithArgs('-200deg').isTrue()
    })
    it('should return false if a none angle value is provided', function () {
      sassaby.func('is-angle').calledWithArgs('deg').isFalse()
    })
  })

  describe('is-integer', function () {
    it('should return true if a integer is provided', function () {
      sassaby.func('is-integer').calledWithArgs(5).isTrue()
    })
    it('should return false if a none integer is provided', function () {
      sassaby.func('is-integer').calledWithArgs(1.5).isFalse()
    })
  })

  describe('is-relative-length', function () {
    it('should return true if a relative length is provided', function () {
      sassaby.func('is-relative-length').calledWithArgs('5em').isTrue()
    })
    it('should return false if a absolute length is provided', function () {
      sassaby.func('is-relative-length').calledWithArgs('10px').isFalse()
    })
  })

  describe('is-absolute-length', function () {
    it('should return true if a absolute length is provided', function () {
      sassaby.func('is-absolute-length').calledWithArgs('10px').isTrue()
    })
    it('should return false if a relative length is provided', function () {
      sassaby.func('is-absolute-length').calledWithArgs('5vw').isFalse()
    })
  })

  describe('is-percentage', function () {
    it('should return true if a percentage value is provided', function () {
      sassaby.func('is-percentage').calledWithArgs('10%').isTrue()
    })
    it('should return false if a none percentage value is provided', function () {
      sassaby.func('is-percentage').calledWithArgs('5px').isFalse()
    })
  })

  describe('is-length', function () {
    it('should return true if a length value (absolute or relative) is provided', function () {
      sassaby.func('is-length').calledWithArgs('0px').isTrue()
    })
    it('should return false if a none length value (absolute or relative) is provided', function () {
      sassaby.func('is-length').calledWithArgs('10s').isFalse()
    })
  })

  describe('is-resolution', function () {
    it('should return true if a resolution value is provided', function () {
      sassaby.func('is-resolution').calledWithArgs('72dpi').isTrue()
    })
    it('should return false if a none resolution value is provided', function () {
      sassaby.func('is-resolution').calledWithArgs('16px').isFalse()
    })
  })

  describe('is-position', function () {
    it('should return true if a position value is provided', function () {
      sassaby.func('is-position').calledWithArgs('top').isTrue()
    })
    it('should return false if a none position value is provided', function () {
      sassaby.func('is-position').calledWithArgs('#f00').isFalse()
    })
  })
})
