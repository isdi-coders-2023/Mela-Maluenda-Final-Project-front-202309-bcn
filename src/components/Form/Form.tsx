import React, { useState } from "react";
import { PhotStructureWithoutId } from "../../store/types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

interface FormProps {
  onSubmit: (newPhoto: PhotStructureWithoutId) => void;
}

const Form = ({ onSubmit }: FormProps): React.ReactElement => {
  const emptyPhoto: PhotStructureWithoutId = {
    title: "",
    author: "",
    year: "",
    location: "",
    publicSpace: "",
    category: "Long shot",
    portfolioUrl: "",
    whatMadeYouClick: "",
    photoUrl: "",
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(newPhoto);
  };

  const [newPhoto, setNewPhoto] = useState<PhotStructureWithoutId>(emptyPhoto);

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

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <h2 className="form__title">ADD your PHOTO</h2>
      <label className="form__label" htmlFor="title">
        Title:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="title"
        onChange={onChangeData}
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
      />
      <label className="form__label" htmlFor="date">
        Month and year:
      </label>
      <input
        className="form__input"
        required
        type="month"
        id="date"
        min="2000-01"
        max="2023-12"
        onChange={onChangeData}
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
      />
      <label className="form__label" htmlFor="space">
        Public space:
      </label>
      <input
        className="form__input"
        required
        type="text"
        id="space"
        onChange={onChangeData}
      />
      <div className="form__category">
        <label className="form__label form__label--select" htmlFor="category">
          Category:
        </label>
        <select
          className="form__input form__input--select"
          id="category"
          onChange={onChangeData}
        >
          <option value="">Long shot</option>
          <option value="">Medium shot</option>
        </select>
      </div>
      <label className="form__label" htmlFor="portfolio">
        Portfolio url:
      </label>
      <input
        className="form__input"
        required
        type="url"
        id="portfolio"
        onChange={onChangeData}
      />
      <label className="form__label" htmlFor="description">
        What made you click:
      </label>
      <textarea
        className="form__description"
        id="description"
        placeholder="A few lines explaining something about how did you feel or thought when you took that image."
        onChange={onChangeData}
      ></textarea>
      <label className="form__label" htmlFor="photo">
        Add the image url:
      </label>
      <input
        className="form__input"
        required
        type="url"
        id="photo"
        onChange={onChangeData}
      />
      <div className="form__button">
        <Button
          className="button button__form"
          type="submit"
          text="add photo"
        />
      </div>
    </FormStyled>
  );
};

export default Form;
