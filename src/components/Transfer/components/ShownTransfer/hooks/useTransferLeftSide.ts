import { useInnerTransferContext, useTransferContext } from '../../../context';
import { useTransferOpenSides } from '../../../hooks/Inner/useTransferOpenSides';
import { TransferLeftSideProps } from '../../../types';

export const useTransferLeftSide = (_: {}): TransferLeftSideProps => {
    const {
        size,
        noResults,
        isFullWidth,
        isDisabled,
        leftContainer,
        leftHeader,
    } = useTransferContext();
    const { position, innerValue } = useInnerTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides(
        innerValue
    );

    return {
        isValue: false,
        isDisabled,
        isFullWidth,
        isLeftSideOpen,
        isRightSideOpen,
        noResults,
        size,
        leftContainer,
        leftHeader,
        position,
    };
};
