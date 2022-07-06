import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <>{children || <Outlet />}</>;
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
