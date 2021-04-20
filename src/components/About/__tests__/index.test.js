import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup); //cleanup leftover memory data that could give false results


describe('About component', () => { // declare component that is being tested
    // First Test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('mathces snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot(); // expect() is used with a matcher to assert something about a value
    });
})