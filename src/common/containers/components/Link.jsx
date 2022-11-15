import React from "react";
import Link from "next/link";
import PropTypes from "prop-types"

import styles from "../../../../public/styles/containers/components/Link.module.scss"

const ChipaLink = (props) => {
  const { href, children, isDark } = props;

  return isDark ? <Link className={ `text ${styles.ChipaLink} ${styles.black}` } href={href}>{children}</Link> : <Link className={ `text ${styles.ChipaLink}` } href={href}>{children}</Link>
};

ChipaLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default ChipaLink;
