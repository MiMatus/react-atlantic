import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { Typography } from '../src';

const children = `test children`;

const { Title, Text } = Typography;

describe('Text', () => {
    const output = shallow(<Text>{children}</Text>);

    it(`Should render`, () => {
        expect(output).toBeDefined();
    });

    it(`Should have children: ${children}`, () => {
        expect(output.text()).toEqual(children);
    });
});

describe('Title', () => {
    const level = 3;
    const output = shallow(<Title level={level}>{children}</Title>);

    it(`Should render`, () => {
        expect(output).toBeDefined();
    });

    it(`Should have children: ${children}`, () => {
        expect(output.text()).toEqual(children);
    });

    it(`Should have level: ${level}`, () => {
        const target = (output.getElement().type as any).target;
        expect(target).toEqual(`h${level}`);
    });
});
