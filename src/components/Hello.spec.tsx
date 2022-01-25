import { render,screen }  from '@testing-library/react';
import { Hello } from './Hello';

it("Should render Hello component", () => {
    render(<Hello/>)
    const myElem = screen.getByText(/Hello World/);
    expect(myElem).toBeInTheDocument()

});