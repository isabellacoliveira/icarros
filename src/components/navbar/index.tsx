import React, { useState } from "react";
import { FormControl, NavbarBrand, NavbarConfig, NavbarForm, NavbarSearch, NavContainer, SearchButton } from "./styles";
import { useCarros } from "../../context/CarrosContext";

export function NavBar() {
  const { buscaTermo, setBuscaTermo } = useCarros();
  const [searchTerm, setSearchTerm] = useState<string>(buscaTermo);
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBuscaTermo(searchTerm);
  };

  return (
    <>
      <NavbarConfig>
        <NavContainer>
          <NavbarBrand tabIndex={0} aria-label="Página inicial do iCarros">icarros</NavbarBrand>
        </NavContainer>
        <NavbarSearch>
          <NavbarForm onSubmit={handleSearchSubmit}>
            <FormControl
              className="form-control"
              type="search"
              placeholder="Busque por marca"
              aria-label="Campo de busca por marca de carro"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchButton
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              aria-label="Botão para buscar carros pela marca"
            >
              Buscar
            </SearchButton>
          </NavbarForm>
        </NavbarSearch>
      </NavbarConfig>
    </>
  );
}

export default NavBar;
