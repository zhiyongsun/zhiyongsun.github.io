/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Link from 'gatsby-link';
import React from 'react';
import {colors, media} from 'theme';

type Props = {
  isActive: boolean,
  title: string,
  to: string,
};

const HeaderLink = ({isActive, title, to}: Props) => (
  <Link css={[style, isActive && activeStyle]} to={to}>
    {title}
    {isActive && <span css={activeAfterStyle} />}
  </Link>
);

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.white,
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,

  ':focus': {
    outline: 0,
    backgroundColor: colors.lighter,
    color: colors.white,
  },

  [media.size('xsmall')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 5,
    paddingRight: 5,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,

    ':hover:not(:focus)': {
      color: colors.brand,
    },
  },
};

const activeStyle = {
  color: colors.brand,

  [media.greaterThan('small')]: {
    position: 'relative',
  },
};

const activeAfterStyle = {
  [media.greaterThan('small')]: {
    position: 'absolute',
    bottom: -1,
    height: 4,
    background: colors.brand,
    left: 0,
    right: 0,
    zIndex: 1,
  },
};

export default HeaderLink;
