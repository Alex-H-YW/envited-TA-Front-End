import {render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from 'react-router-dom';

test('should render correct text', ()=> {
    
    render(<Home />, {wrapper: MemoryRouter});
    const divElement = screen.getByRole("landingText");
    expect(divElement).toHaveTextContent("Imagine if");
    expect(divElement).toHaveTextContent("Snapchat");
});

test('should render image', ()=> {
    render(<Home />,{wrapper: MemoryRouter});
    const imgElement = screen.getByRole("landingImage");
    expect(imgElement).toHaveAttribute("role", "landingImage");
});

test('should render a button', ()=> {
    render(<Home />,{wrapper: MemoryRouter});
    const btnElement = screen.getByTestId("homeBtn");
    expect(btnElement).toHaveTextContent("🎉 Create my event");
});