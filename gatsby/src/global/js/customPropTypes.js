import PropTypes from 'prop-types';
/* eslint-disable camelcase */
export const fixedGatsbyImageType = PropTypes.shape({
  localFile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
});

export const fluidGatsbyImageType = PropTypes.shape({
  localFile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
});

export const fixedRelatedGatsbyImage = PropTypes.shape({
  field_image: PropTypes.shape({
    alt: PropTypes.string
  }),
  relationships: PropTypes.shape({
    field_image: fixedGatsbyImageType
  })
});

export const fluidRelatedGatsbyImage = PropTypes.shape({
  field_image: PropTypes.shape({
    alt: PropTypes.string
  }),
  relationships: PropTypes.shape({
    field_image: fluidGatsbyImageType
  })
});

export const requiredChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired;

export const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const metaTagsType = PropTypes.arrayOf(
  PropTypes.shape({
    tag: PropTypes.string,
    attributes: PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string
    })
  })
);

export const pathType = PropTypes.shape({
  alias: PropTypes.string
});

export const locationType = PropTypes.shape({
  href: PropTypes.string.isRequired
}).isRequired;
