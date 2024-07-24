import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

//mock de usenavigate
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));


describe("pruebas en <SeachPage />", () => {

    beforeEach( () => jest.clearAllMocks() );

  test("deberia mostrar correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar a Batman y el input con el valor del querystring", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");
    const img = screen.getByRole("img");
    expect(img.src).toContain("batman");
    const alertDiv = screen.getByLabelText("alert-danger");
    expect(alertDiv.style.display).toBe("none");
  });

  test("debe mostrar un error si no se encuentra el hero (barman)", () => {

    render(
      <MemoryRouter initialEntries={["/search?q=barman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alertDiv = screen.getByLabelText("alert-danger");
   expect(alertDiv.style.display).toBe("");
  });

  test("debe llamar el navigate a la pantalla nueva", () => {

    render(
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <SearchPage />
        </MemoryRouter>
      );
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: {name: 'searchText', value: 'superman'} });

      const form = screen.getByRole('form');
      fireEvent.submit( form );

      expect( mockUseNavigate ).toHaveBeenCalledWith('?q=superman');
  });
});
