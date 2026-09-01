import { OptimizedImage } from './OptimizedImage'

type GalleryImage = {
  src: string
  fallback: string
  alt: string
}

type PhotoGalleryProps = {
  images: GalleryImage[]
  className?: string
}

export function PhotoGallery({ images, className = '' }: PhotoGalleryProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 ${className}`}
      role="list"
    >
      {images.map((image, index) => (
        <div
          key={image.alt + index}
          role="listitem"
          className={`group overflow-hidden rounded-ui shadow-soft ${
            index === 0 ? 'col-span-2 aspect-[2/1] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-square'
          }`}
        >
          <OptimizedImage
            src={image.src}
            fallback={image.fallback}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  )
}
