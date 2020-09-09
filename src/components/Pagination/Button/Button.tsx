import React from 'react';
import { FC } from 'react';
import { Button } from '../../Button';
import { PaginationComponentProps } from '../types';
import { Badge } from '../../Badge';

type PaginationButtonProps = PaginationComponentProps;
type PaginationButtonType = FC<PaginationButtonProps>;
export const PaginationButton: PaginationButtonType = ({
    isActive,
    ...props
}) => {
    return <Button {...props} isDisabled={isActive} />;
};
