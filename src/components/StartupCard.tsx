import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({ post }: { post: StartupTypeCard }) {
  const {
    _id,
    author,
    description,
    category,
    _createdAt,
    views,
    title,
    image,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between gap-5 mt-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <figure className="size-8 overflow-hidden rounded-full">
            <Image
              src={author?.image as string}
              alt={`${author?.name} avatar`}
              width={48}
              height={48}
            />
            <figcaption>Author Avatar</figcaption>
          </figure>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc ">{description}</p>
        <Image
          src={image as string}
          alt={`${title} image`}
          width={500}
          height={500}
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn " asChild>
          <Link href={`/startup/${_id}`}>
            <p className="text-16-medium !text-white">Details</p>
          </Link>
        </Button>
      </div>
    </li>
  );
}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);