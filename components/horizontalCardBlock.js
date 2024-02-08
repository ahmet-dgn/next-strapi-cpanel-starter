import HorizontalCard from "./ui/horizontalCard";
import Row from "./ui/row";
import Title from "./ui/title";
import Link from "next/link";

export default function HorizontalCardBlock({
  data,
  translation,
  title,
  description,
}) {
  const services = data;

  return (
    <>
      <Title titleDesc={description}>{title}</Title>
      <Row rowCol="grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <Link
            href={
              service?.attributes?.Slug
                ? `/products/${service?.attributes?.Slug}`
                : service?.Link
            }
          >
            <HorizontalCard
              titleCustom="!text-h6"
              key={service?.id}
              cardTitle={service?.attributes?.Title || service?.Baslik}
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                (service?.attributes?.MainImage?.data?.attributes?.url ||
                  service?.Resim?.data?.attributes?.url ||
                  " ")
              }
              cardBorder=" hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
              cardPadding="p-2 xl:p-4"
              cardBgColor="bg-surface-color"
              cardImgClass="aspect-[5/3]"
              cardDesc={service?.attributes?.Description || service?.Aciklama}
            />
          </Link>
        ))}
      </Row>
    </>
  );
}
