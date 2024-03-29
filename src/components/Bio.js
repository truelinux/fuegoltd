import React from 'react'
import 'typeface-raleway'
import { rhythm } from '../utils/typography'

export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      fontFamily: 'Raleway',
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: '25px',
      }}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
