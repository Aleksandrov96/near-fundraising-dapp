import React from "react";
import { Project } from '../../interfaces';

type Props = {
  children: JSX.Element | JSX.Element[];
  el: Project;
}

function OwnerControl({ children, el }: Props) {
  if (window.accountId === el.wallet) {
    return (
      <div>{children}</div>
    );
  }
  return null;
};

export default OwnerControl;