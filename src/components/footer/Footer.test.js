import {render} from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('should display author name', () => {
    const {getByText} = render(<Footer />);
    expect(getByText('Tomasz Adamczyk')).toBeInTheDocument();
});
