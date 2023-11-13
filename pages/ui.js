import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/buttons/Normal/button";
import ButtonBig from "@/components/ui/buttons/Big/buttonBig";
import ButtonSmall from "@/components/ui/buttons/Small/buttonSmall";
import ButtonOutline from "@/components/ui/buttons/Normal/buttonOutline";
import ButtonOutlineBig from "@/components/ui/buttons/Big/buttonBigOutline";
import ButtonOutlineSmall from "@/components/ui/buttons/Small/buttonSmallOutline";
import ButtonBigLink from "@/components/ui/buttons/Big/buttonBigLink";
import ButtonLink from "@/components/ui/buttons/Normal/buttonLink";
import ButtonSmallLink from "@/components/ui/buttons/Small/buttonSmallLink";

export default function UI() {
  return (
    <>
      <Container>
        <div>
          <Title>Başlık Örneği: Lorem ipsum dolor sit amet</Title>
          <p className="text-center max-w-2xl mx-auto text-on-background-color">
            Mauris eleifend lectus erat. Etiam egestas, dui egestas pharetra
            dictum, metus nisi semper urna, nec dignissim quam enim quis eros.
          </p>
        </div>
      </Container>
      <Container>
        <Title>Buton Örnekleri</Title>
        <div className="flex justify-around">
          <div className=" flex flex-col gap-4">
            <ButtonSmall href="#">Button </ButtonSmall>
            <Button href="#">Button </Button>
            <ButtonBig href="#">Button</ButtonBig>
            <ButtonBig href="#">
              {" "}
              <svg
                className="mr-1.5 -ml-1.5 fill-on-primary-color "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" />
              </svg>
              Button
            </ButtonBig>
          </div>
          <div className=" flex flex-col  gap-4">
            <ButtonOutlineSmall href="#">Button </ButtonOutlineSmall>
            <ButtonOutline href="#">Button </ButtonOutline>
            <ButtonOutlineBig href="#">Button </ButtonOutlineBig>
            <ButtonOutlineBig href="#">
              Button{" "}
              <svg
                className="ml-1.5 -mr-1.5 fill-primary-color "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1188 11.004H5.10876C4.55876 11.004 4.10876 11.454 4.10876 12.004C4.10876 12.554 4.55876 13.004 5.10876 13.004H16.1188V14.794C16.1188 15.244 16.6588 15.464 16.9688 15.144L19.7488 12.354C19.9388 12.154 19.9388 11.844 19.7488 11.644L16.9688 8.85398C16.6588 8.53398 16.1188 8.76398 16.1188 9.20398V11.004Z" />
              </svg>
            </ButtonOutlineBig>
          </div>
          <div className=" flex flex-col   gap-4">
            <ButtonSmallLink href="#">Button </ButtonSmallLink>
            <ButtonLink href="#">Button </ButtonLink>
            <ButtonBigLink href="#">Button</ButtonBigLink>
            <ButtonBigLink href="#">
              Button{" "}
              <svg
                className="ml-1.5 fill-primary-color"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1188 11.004H5.10876C4.55876 11.004 4.10876 11.454 4.10876 12.004C4.10876 12.554 4.55876 13.004 5.10876 13.004H16.1188V14.794C16.1188 15.244 16.6588 15.464 16.9688 15.144L19.7488 12.354C19.9388 12.154 19.9388 11.844 19.7488 11.644L16.9688 8.85398C16.6588 8.53398 16.1188 8.76398 16.1188 9.20398V11.004Z" />
              </svg>
            </ButtonBigLink>
          </div>
        </div>
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
