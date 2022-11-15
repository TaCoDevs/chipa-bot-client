import React from "react";
import PropTypes from "prop-types";

import styles from "../../../../public/styles/containers/components/Button.module.scss";

const ChipaButton = (props) => {
  const { children, href, isDark } = props

  return isDark ? <button className={`${styles.button} ${styles.dark}`}>{children}</button> : <button className={`${styles.button} ${styles.white}`}>{children}</button>
}

ChipaButton.propTypes = {
  href: PropTypes.string
}

export default ChipaButton;
