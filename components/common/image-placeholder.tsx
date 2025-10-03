import { Image } from "lucide-react";

interface IImagePlaceholderProps {
  className?: string;
}

export function ImagePlaceholder({ className }: IImagePlaceholderProps) {
  return <Image className={`${className} size-5`} />;
}
