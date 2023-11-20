import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import { ButtonOutline } from "./ui/buttons";

export default function FeaturedProducts() {
  return (
    <Container>
      <Title titleDesc="Laboris qui sit ullamco nostrud. Officia et aute est et amet consectetur aliqua Lorem.">
        Kitaplarımız
      </Title>
      <div className="flex gap-4">
        <ButtonOutline href="#">Hepsi</ButtonOutline>
      </div>
      <Row></Row>
    </Container>
  );
}
