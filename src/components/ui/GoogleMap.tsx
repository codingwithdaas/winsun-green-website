type GoogleMapProps = {
  src: string;
  title?: string;
  className?: string;
};

export default function GoogleMap({ src, title = "Google Map", className }: GoogleMapProps) {
  return (
    <iframe
      src={src}
      title={title}
      className={['h-full w-full', className].filter(Boolean).join(' ')}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0 }}
    />
  );
}