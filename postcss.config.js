module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'lost': {},
    'postcss-assets': {
      loadPaths: ['assets/'],
    },
    'postcss-font-magician': {
      variants: {
              'Lato': {
                  '300': [],
                  '400': [],
                  '700': []
              }
          },
          foundries: ['google']
    },
    'postcss-responsive-type': {}
  },
};