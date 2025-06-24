import { IconStarFilled } from "@tabler/icons-react";

export default function TestimoniCard() {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e shrink-0">
      <div className="mx-auto w-fit mb-3 flex gap-3">
        <IconStarFilled className="text-amber-300" />
        <IconStarFilled className="text-amber-300" />
        <IconStarFilled className="text-amber-300" />
        <IconStarFilled className="text-amber-300" />
        <IconStarFilled className="text-amber-300" />
      </div>
      <blockquote className="max-w-2xl mx-auto mb-4">
        <p className="my-1">If you care for your time, I hands down would go with this."</p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <div className="space-y-0.5 font-medium ms-3">
          <div className="text-primary-700">Bonnie Green</div>
          <div className="text-sm text-gray-400 ">Sumenep</div>
        </div>
      </figcaption>
    </figure>
  )
}