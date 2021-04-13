import React, { forwardRef } from 'react';
import { TransferProps } from '../../types';
import { useInnerTransfer, useTransferPosition } from '../../hooks';
import { DEFAULT_WIDTHS_TRANSFER } from '../../constants';
import { ShownTransfer } from '../../components';
import { TransferProvider } from '../../context';
import { StyledTransferContainer } from '../../styles';
import { TransferDefaultFilterInput } from '../../components/ShownTransfer/components/FilterInput';
import { TransferDefaultFooter } from '../../components/ShownTransfer/components/Footer';
import { TransferComposedLeftSide } from '../../components/ShownTransfer/components/LeftSide';
import { TransferDefaultHiddenComponent } from '../../components/HiddenTransfer';
import { TransferDefaultRightHeader } from '../../components/ShownTransfer/components/RightHeader';
import { TransferDefaultRightList } from '../../components/ShownTransfer/components/List';
import { TransferDefaultNoResults } from '../../components/ShownTransfer/components/NoResults';

export const DefaultTransfer = forwardRef<HTMLDivElement, TransferProps>(
    (
        {
            innerTransferController = useInnerTransfer,
            positionController = useTransferPosition,
            size = 'medium',
            customWidth = DEFAULT_WIDTHS_TRANSFER,
            preferredPosition = 'right',
            isFullWidth = false,
            visibleRows = 5,
            hiddenTransferComponent = <TransferDefaultHiddenComponent />,
            leftHeader = <TransferDefaultFilterInput />,
            leftContainer = <TransferComposedLeftSide />,
            rightHeader = <TransferDefaultRightHeader />,
            rightContainer = <TransferDefaultRightList />,
            footer = <TransferDefaultFooter />,
            noResults = <TransferDefaultNoResults />,
            isSorted = true,
            isOpen,
            ...props
        },
        ref
    ) => {
        return (
            <TransferProvider
                innerTransferController={innerTransferController}
                positionController={positionController}
                leftHeader={leftHeader}
                leftContainer={leftContainer}
                rightHeader={rightHeader}
                rightContainer={rightContainer}
                footer={footer}
                noResults={noResults}
                preferredPosition={preferredPosition}
                isOpen={isOpen}
                size={size}
                customWidth={customWidth}
                visibleRows={visibleRows}
                isFullWidth={isFullWidth}
                isSorted={isSorted}
                {...props}
            >
                <StyledTransferContainer size={size} ref={ref}>
                    {!isOpen ? hiddenTransferComponent : <ShownTransfer />}
                </StyledTransferContainer>
            </TransferProvider>
        );
    }
);
