import { IconLoader2 } from "@tabler/icons-react";

export default function ScreenLoading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80 z-[100] p-8">
      <IconLoader2 className="text-white animate-spin" size={48} />
    </div>
  )
}