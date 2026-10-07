import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Expand } from "lucide-react";
import { useState } from "react";

export default function ProjectImage({
  src,
  alt,
  title,
  width,
  height,
}: {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group block w-full overflow-hidden rounded-xl border border-primary/25 text-left hover:border-primary transition-colors"
          aria-label={`Enlarge ${title}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
            className="w-full h-auto"
          />
          <span className="flex items-center justify-between gap-3 bg-card px-3 py-2 text-sm text-secondary-text">
            View screenshot <Expand size={15} className="text-primary" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="bg-card border-primary/30 sm:max-w-6xl max-h-[90vh] overflow-y-auto p-5 sm:p-6"
      >
        <DialogTitle className="pr-8 text-lg font-semibold">
          {title}
        </DialogTitle>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
