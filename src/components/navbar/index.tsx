import React, { useState } from "react";
import { FavoriteButton, FormControl, HomeButton, NavbarBrand, NavbarConfig, NavbarForm, NavbarSearch, NavContainer, SearchButton } from "./styles";
import { useCarros } from "../../context/CarrosContext";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const { buscaTermo, setBuscaTermo } = useCarros();
  const [searchTerm, setSearchTerm] = useState<string>(buscaTermo);
  const navigate = useNavigate(); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setBuscaTermo(searchTerm);
  };

  const handleFavoritosSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setBuscaTermo(searchTerm);
  };

  return (
    <>
      <NavbarConfig>
        <NavContainer>
          <NavbarBrand tabIndex={0} aria-label="Página inicial do iCarros">icarros</NavbarBrand>
          <NavbarForm onSubmit={handleFavoritosSubmit}>
            <HomeButton
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                aria-label="Botão para visualizar os carros marcados como favoritos"
                onClick={() => navigate('/')}
              >
                Home
              </HomeButton>
            <FavoriteButton
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                aria-label="Botão para visualizar os carros marcados como favoritos"
                onClick={() => navigate('/favoritos')}
              >
                Favoritos
              </FavoriteButton>
          </NavbarForm>
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
