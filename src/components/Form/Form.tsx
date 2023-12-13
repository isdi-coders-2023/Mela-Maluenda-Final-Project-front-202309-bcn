import React, { useState } from "react";
import { PhotoStructureWithoutId, PhotosStructure } from "../../store/types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

interface FormProps {
  onSubmit: (newPhoto: PhotoStructureWithoutId) => void;
  selectedPhoto?: PhotosStructure;
  buttonText: string;
  titleText: string;
}

const Form = ({
  onSubmit,
  selectedPhoto,
  buttonText,
  titleText,
}: FormProps): React.ReactElement => {
  let emptyPhoto: PhotoStructureWithoutId = {
    title: "",
    author: "",
    year: 0,
    location: "",
    publicSpace: "",
    category: "Long shot",
    portfolioUrl: "",
    whatMadeYouClick: "",
    photoUrl: "",
  };

  if (selectedPhoto) {
    emptyPhoto = selectedPhoto;
  }

  const [newPhoto, setNewPhoto] = useState<PhotoStructureWithoutId>(emptyPhoto);

  const onChangeData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setNewPhoto({
      ...newPhoto,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(newPhoto);
  };

  return (
    <FormStyled onSubmit={onFormSubmit} autoComplete="off">
      <h2 className="form__title">{titleText}</h2>
      <label className="form__label" htmlFor="title">
        Title:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="title"
        onChange={onChangeData}
        value={newPhoto.title}
      />
      <label className="form__label" htmlFor="author">
        Author:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="author"
        onChange={onChangeData}
        value={newPhoto.author}
      />
      <label className="form__label" htmlFor="year">
        Year:
      </label>
      <input
        className="form__input"
        required
        type="number"
        id="year"
        step={1}
        min={2000}
        max={2023}
        onChange={onChangeData}
        value={newPhoto.year}
      />
      <label className="form__label" htmlFor="location">
        Location:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="location"
        onChange={onChangeData}
        value={newPhoto.location}
      />
      <label className="form__label" htmlFor="publicSpace">
        Public space:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="publicSpace"
        onChange={onChangeData}
        value={newPhoto.publicSpace}
      />
      <div className="form__category">
        <label className="form__label form__label--select" htmlFor="category">
          Category:
        </label>
        <select
          className="form__input form__input--select"
          id="category"
          onChange={onChangeData}
          value={newPhoto.category}
        >
          <option value="">Select photo shot:</option>
          <option value="Long shot">Long shot</option>
          <option value="Medium shot">Medium shot</option>
        </select>
      </div>
      <label className="form__label" htmlFor="portfolioUrl">
        Portfolio url:
      </label>
      <input
        className="form__input"
        required
        type="url"
        id="portfolioUrl"
        onChange={onChangeData}
        value={newPhoto.portfolioUrl}
      />
      <label className="form__label" htmlFor="whatMadeYouClick">
        What made you click:
      </label>
      <textarea
        className="form__description"
        id="whatMadeYouClick"
        placeholder="A few lines explaining something about how did you feel or thought when you took that image."
        onChange={onChangeData}
        value={newPhoto.whatMadeYouClick}
      ></textarea>
      <label className="form__label" htmlFor="photoUrl">
        Add the image url:
      </label>
      <input
        className="form__input"
        required
        type="url"
        id="photoUrl"
        onChange={onChangeData}
        value={newPhoto.photoUrl}
      />
      <div className="form__button">
        <Button
          className="button button__form"
          type="submit"
          text={buttonText}
        />
      </div>
    </FormStyled>
  );
};

export default Form;
