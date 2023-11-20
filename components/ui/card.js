import Image from "next/image";
import { ButtonSmallLink } from "./buttons";

export default function Card({
  cardImgHeight,
  cardInfo,
  cardTitle,
  cardDesc,
  cardBtn,
  cardPadding,
  cardImg,
  cardLink,
  cardBorder,
  cardBgColor,
  cardImgAlt,
  cardImgSize,
}) {
  const cardImageContainer = `relative w-full ${cardImgHeight} `;

  //Aşağıda ki değişken sitiller eğer kompenenten gelmiyorsa card csslerine eklenmiyor.
  const cardContainerClasses = [
    cardPadding && `${cardPadding}`,
    "h-fit",
    "overflow-hidden",
    "rounded",
    cardBorder && `${cardBorder}`,
    "border-gray-300",
    "space-y-4",
    cardBgColor && `${cardBgColor}`,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cardContainerClasses}>
      <div className={cardImageContainer}>
        <Image
          src={cardImg}
          fill
          className="rounded object-cover"
          alt={cardImgAlt}
          sizes={cardImgSize}
        />
      </div>

      {cardInfo || cardTitle || cardDesc || cardBtn ? (
        <div className=" space-y-2">
          {cardInfo && (
            <p className="text-link-tiny text-on-surface-color">{cardInfo}</p>
          )}
          {cardTitle && (
            <p className="text-normal-bold text-on-surface-color h-12 overflow-hidden text-ellipsis line-clamp-2">
              {cardTitle}
            </p>
          )}
          {cardDesc && (
            <p className="text-small-regular text-on-surface-color line-clamp-3 h-16 overflow-hidden text-ellipsis">
              {cardDesc}
            </p>
          )}
          {cardBtn && (
            <ButtonSmallLink href={cardLink}>{cardBtn} </ButtonSmallLink>
          )}
        </div>
      ) : null}
    </div>
  );
}
