import React, { FC } from 'react';
import { TransferListProps } from '../../../../types/TransferListProps';
import { StyledTransferList } from './styles';

export const TransferList: FC<TransferListProps> = ({
    Item,
    options,
    size = 'medium',
    value,
    visibleRows,
}) => {
    const selectedOptionsSet = new Set(value?.map((option) => option.value));

    return !!options.length ? (
        <StyledTransferList size={size} visibleRows={visibleRows}>
            {options?.map((option) => (
                <Item
                    option={option}
                    size={size}
                    isChecked={selectedOptionsSet.has(option.value)}
                />
            ))}
        </StyledTransferList>
    ) : null;
};
