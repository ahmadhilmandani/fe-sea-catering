import { IconStarFilled } from "@tabler/icons-react";

export default function TestimoniCard({ address, name, star, testimoni }) {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e shrink-0 max-w-xl w-full">
      <div className="mx-auto w-fit mb-3 flex gap-3">
        {Array.from({ length: star }).map(() => (
          <IconStarFilled className="text-amber-300" />
        ))}
      </div>
      <blockquote className="max-w-2xl mx-auto mb-4">
        <p className="my-1">"{testimoni}"</p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <div className="space-y-0.5 font-medium ms-3">
          <div className="text-primary-700">{name}</div>
          <div className="text-sm text-gray-400 ">{address}</div>
        </div>
      </figcaption>
    </figure>
  )
}