import React from "react";
import PropTypes from "prop-types";

import styles from "../../../../public/styles/containers/components/Button.module.scss";

const fakeContext = {
  lang: "es",
  theme: "white"
}

const ChipaButton = (props) => {
  const { children, href } = props
  const { theme } = fakeContext

  if (theme == "white") return <button className={`${styles.button} ${styles.white}`}>{children}</button>
  else return <button className={`${styles.button} ${styles.dark}`}>{children}</button>
}

ChipaButton.propTypes = {
  href: PropTypes.string
}

export default ChipaButton;
