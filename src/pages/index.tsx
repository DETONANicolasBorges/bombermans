import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const { cep, setCep } = useIndex();
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os fornecedores de bomba da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label="Digite seu cep"
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cep}

          <Typography color="error">Cep Invalido</Typography>

          <Button variant="contained" sx={{ width: "50px" }}>
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name="Nico"
              picture="https://github.com/DETONANicolasBorges.png"
              rating={5}
              description="Imperatriz"
            />
            <UserInformation
              name="Joao dos Venenos"
              picture="data:image/jpeg;base64,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"
              rating={4}
              description="Piracicaba"
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
