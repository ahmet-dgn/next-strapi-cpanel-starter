import Image from "next/image";
import Button from "./buttons";

export default function Card({
  cardImgHeight,
  cardInfo,
  cardTitle,
  cardDesc,
  cardBtn,
  cardBtnType,
  cardPadding,
  cardImg,
  cardLink,
  cardBorder,
  cardBgColor,
  cardImgAlt,
  cardImgSize,
  cardImgClass,
  textAlign,
  titleCustom,
  overleyText,
}) {
  const cardImageContainer = `relative w-full relative ${cardImgHeight} `;
  const titleClasses = `text-small-bold text-on-surface-color h-11 overflow-hidden text-ellipsis line-clamp-2 flex ${titleCustom} `;
  const cardTextAreClasses = `space-y-2 ${textAlign}`;
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
          className={cardImgClass}
          alt={cardImgAlt}
          sizes={cardImgSize}
        />
        <p className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center text-white text-h5">
          {overleyText}
        </p>
      </div>

      {cardInfo || cardTitle || cardDesc || cardBtn ? (
        <div className={cardTextAreClasses}>
          <div>
            {cardInfo && (
              <p className="text-link-tiny text-on-surface-color h-5 overflow-hidden text-ellipsis line-clamp-1">
                {cardInfo}
              </p>
            )}
            {cardTitle && <p className={titleClasses}>{cardTitle}</p>}
          </div>

          {cardDesc && (
            <p className="text-small-regular text-on-surface-color line-clamp-3 h-16 overflow-hidden text-ellipsis">
              {cardDesc}
            </p>
          )}
          {cardBtn && (
            <Button href={cardLink} size="sm" type={cardBtnType}>
              {cardBtn}{" "}
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
