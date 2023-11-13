import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

export default function UI() {
  return (
    <>
      <Container>
        <Title>Lorem ipsum dolor sit amet</Title>
        <p className="text-center max-w-2xl mx-auto text-on-background-color">
          Mauris eleifend lectus erat. Etiam egestas, dui egestas pharetra
          dictum, metus nisi semper urna, nec dignissim quam enim quis eros.
        </p>
      </Container>
      <Container>
        <Title>Buttons</Title>
        <Button href="#">Button </Button>
      </Container>
      <Container>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="bg-red-700 w-full h-32"></div>
          <div className="bg-blue-700 w-full h-32"></div>
          <div className="bg-green-700 w-full h-32"></div>
          <div className="bg-yellow-700 w-full h-32"></div>
          <div className="bg-red-700 w-full h-32"></div>
          <div className="bg-blue-700 w-full h-32"></div>
          <div className="bg-green-700 w-full h-32"></div>
          <div className="bg-yellow-700 w-full h-32"></div>
          <div className="bg-yellow-700 w-full h-32"></div>
          <div className="bg-red-700 w-full h-32"></div>
          <div className="bg-blue-700 w-full h-32"></div>
          <div className="bg-green-700 w-full h-32"></div>
          <div className="bg-yellow-700 w-full h-32"></div>
        </div>
      </Container>
    </>
  );
}
