import { PhotosStructure } from "../../store/types";

interface PhotosCardProps {
  photos: PhotosStructure;
}

const PhotoCard = ({
  photos: { title, author, year, location, category, photoUrl },
}: PhotosCardProps): React.ReactElement => {
  return (
    <article className="card">
      <img
        className="card__image"
        src={photoUrl}
        alt={`${category}`}
        width="284"
        height="187"
      />
      <h3 className="card__title">{`« ${title} »`}</h3>
      <h4 className="card__title">{`by ${author}`}</h4>
      <img
        className="card__icon"
        src="/images/detailIcon.svg"
        alt={`A circular icon with a plus symbol inside`}
        width="27"
        height="27"
      />
      <span className="card__subtitle">{`${location}, ${year}`}</span>
      <span className="card__subtitle">{`${category}`}</span>
    </article>
  );
};

export default PhotoCard;
