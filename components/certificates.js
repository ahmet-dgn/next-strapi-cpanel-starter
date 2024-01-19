import Row from "./ui/row";
import Link from "next/link";
import Image from "next/image";
export default function Certificates({ data }) {
  return (
    <Row rowCol="grid-cols-1 md:grid-cols-3">
      {data.Icerik.map((item) => (
        <div>
          <p className="text-center mb-2 mt-5 text-h6">{item.Baslik}</p>
          <div className=" border rounded-lg border-gray-300 p-4 bg-gray-200 shadow-lg">
            <Link
              href={
                process.env.NEXT_PUBLIC_DATA_URL +
                item.Dosya.data.attributes.url
              }
              className="hover:brightness-[.75] transition duration-200 ease-in-out cursor-pointer"
              target="_blank"
            >
              <Image
                width="724"
                height="1024"
                src={
                  process.env.NEXT_PUBLIC_DATA_URL +
                  item.VitrinResim.data.attributes.url
                }
              />
            </Link>
          </div>
        </div>
      ))}
    </Row>
  );
}
