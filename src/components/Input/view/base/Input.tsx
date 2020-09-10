import React, { FC, forwardRef } from 'react';
import { StyledInput } from './style';
import { InputProps } from './types';

export type InputBaseType = FC<InputProps>;

export const InputBase: InputBaseType = forwardRef<
    HTMLInputElement,
    InputProps
>(({ ...props }, ref) => {
    return <StyledInput {...props} ref={ref} />;
});
