import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

import styles from "../../../../public/assets/styles/containers/components/Button.module.scss";

const ActionButton = (props) => {
  const { text, theme, onclick } = props;

  if (theme === "white") {
    return (
      <div
        className={`${styles.button} ${styles.action} ${styles.white}`}
        onClick={onclick}
      >
        {text}
      </div>
    );
  }

  if (theme === "dark") {
    return (
      <div
        className={`${styles.button} ${styles.action} ${styles.dark}`}
        onClick={onclick}
      >
        {text}
      </div>
    );
  }

  throw new Error("Theme not valid");
};

const LinkButton = (props) => {
  const { text, theme, href } = props;

  if (theme === "white") {
    return (
      <div className={`${styles.button} ${styles.link} ${styles.white}`}>
        <Link href={href} legacyBehavior>
          {text}
        </Link>
      </div>
    );
  }

  if (theme === "dark") {
    return (
      <div className={`${styles.button} ${styles.link} ${styles.dark}`}>
        <Link href={href} legacyBehavior>
          {text}
        </Link>
      </div>
    );
  }

  throw new Error("Theme not valid");
};

const Button = ({ text, theme, href, onClick }) => {
  if (onClick) {
    return ActionButton({ text, theme, onClick });
  }

  if (href) {
    return LinkButton({ text, theme, href });
  }

  throw new Error("Bad Button implementation");
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
