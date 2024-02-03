import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // This disables server-side rendering
});

export default function VideoPlayer({ data }) {
  return (
    <div className="overflow-hidden h-[600px] md:h-[850px] relative w-full">
      <DynamicReactPlayer
        className="react-player brightness-[0.40] object-cover"
        url={
          process.env.NEXT_PUBLIC_DATA_URL + data?.Video?.data?.attributes?.url
        }
        width="100%"
        height="100%"
        controls={false}
        muted={true}
        playing={true}
        loop={true}
        playsinline={true}
      />
    </div>
  );
}
