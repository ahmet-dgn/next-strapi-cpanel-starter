import Image from "next/image";

export default function ImageBanner({ data }) {
  return (
    <Image
      src={
        data.Resim
          ? process.env.NEXT_PUBLIC_DATA_URL + data.Resim.data.attributes.url
          : ""
      }
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
