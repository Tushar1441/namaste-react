import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("It should load the Restaurant Card", ()=> {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const textData = screen.getByText("Subway");

    expect(textData).toBeInTheDocument();

})
