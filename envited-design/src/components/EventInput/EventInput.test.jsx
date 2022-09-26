import {render, screen } from "@testing-library/react";
import EventInput from "./EventInput";
import { MemoryRouter } from 'react-router-dom';

test('should render 5 text of input', ()=> {
    render(<EventInput />, {wrapper: MemoryRouter});
    expect(screen.getAllByRole('textbox')).toHaveLength(6);
});

test('should render correct text in upload image', ()=> {
    render(<EventInput />, {wrapper: MemoryRouter});
    expect(screen.queryByText(/Choose a photo/)).toBeInTheDocument();
});

test('should render a create button', ()=> {
    render(<EventInput />, {wrapper: MemoryRouter});
    const btnElement = screen.getByRole("submit-btn");
    expect(btnElement).toHaveTextContent("Create your event");
});
