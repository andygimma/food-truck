import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import FoodTruckList from "./FoodTruckList";
import { FOOD_TRUCKS } from "data/trucks";

test("renders learn react link", () => {
  render(
    <IntlProvider locale={"en"}>
      <FoodTruckList trucks={FOOD_TRUCKS} />
    </IntlProvider>
  );

  for (let x = 0; x < FOOD_TRUCKS.length; x++) {
    const el = screen.getByText(new RegExp(FOOD_TRUCKS[x].applicant, "i"));
    expect(el).toBeInTheDocument();
  }
});
