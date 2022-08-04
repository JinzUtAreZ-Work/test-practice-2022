import type { ReactElement } from 'react';
import SimpleBar from 'simplebar-react';

type ScrollbarProps = PropsWithChildren;

export const Scrollbar = (props: ScrollbarProps): ReactElement => {
  const { children } = props;
  return <SimpleBar autoHide={false}>{children}</SimpleBar>;
};

export default Scrollbar;
