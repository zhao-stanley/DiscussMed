import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage draggable="false" {...rest} />

export default Image
