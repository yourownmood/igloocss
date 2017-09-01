/* global describe, it */

const path = require('path')
const Sassaby = require('sassaby')

describe('_tools.aliases.scss', function () {
  const file = path.resolve(__dirname, '_tools.aliases.scss')
  const sassaby = new Sassaby(file, {
    variables: {
      'inuit-global-spacing-unit': '12px',
      'inuit-global-spacing-unit-tiny': '8px',
      'inuit-global-spacing-unit-small': '4px',
      'inuit-global-spacing-unit-large': '20px',
      'inuit-global-spacing-unit-huge': '40px',
      'inuit-global-font-size': '16px',
      'inuit-global-line-height': '1em'
    },
    dependencies: [path.resolve(__dirname, '_tools.font-size.scss')]
  })

  describe('Alias mixins', function () {
    it('should call inuit-font-size correctly with font-size', function () {
      sassaby.includedMixin('font-size').calledWithArgs('12px').declares('font-size', '.75rem')
    })
  })
})
