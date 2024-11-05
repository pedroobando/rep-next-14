import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
  href?: string;
}

export const WhiteCard: FC<Props> = ({ children, centered, className, href = '#' }) => {
  return (
    <Link
      href={href}
      className={classNames('bg-white border rounded-[20px] p-10 shadow-3xl shadow-shadow-500 w-full', className, {
        'text-center': centered,
        'flex flex-col items-center': centered,
      })}
    >
      {children}
    </Link>
  );
};
