import React from "react";
import Link from "next/link";
import PropTypes from "prop-types"

import styles from "../../../../public/styles/containers/components/Link.module.scss"

const fakeContext = {
    theme: "white",
    lang: "en"
}

const ChipaLink = (props) => {
  const { href, children } = props;
  const { theme } = fakeContext

  if (theme == "white") return <Link className={ `${styles.ChipaLink} ${styles.white}` } href={href}>{children}</Link>;
  else return <Link className={ `${styles.ChipaLink} ${styles.dark}` } href={href}>{children}</Link>;
};

ChipaLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default ChipaLink;
