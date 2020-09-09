import { PaginationComponentProps } from '../../../types';
import { FC, ReactNode } from 'react';

export type PaginationBaseProps<
    S extends Element = Element,
    T extends PaginationComponentProps<S> = PaginationComponentProps
> = {
    count?: number;
    page?: number;
    as?: FC<T>;
    separator?: ReactNode;
    onClick?: (e: React.MouseEvent<S, MouseEvent>, page: number) => void;
};

export type PaginationBaseType = FC<PaginationBaseProps>;
