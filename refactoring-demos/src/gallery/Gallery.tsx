export const Gallery = () => {
  const images = [
    'https://picsum.photos/id/13/200',
    'https://picsum.photos/id/14/200',
    'https://picsum.photos/id/15/200',
    'https://picsum.photos/id/16/200',
    'https://picsum.photos/id/17/200',
    'https://picsum.photos/id/18/200',
    'https://picsum.photos/id/19/200',
    'https://picsum.photos/id/20/200',
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4 sm:grid-cols-2 xs:grid-cols-1" data-testid="gallery-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery item ${index + 1}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
      ))}
    </div>
  );
};


