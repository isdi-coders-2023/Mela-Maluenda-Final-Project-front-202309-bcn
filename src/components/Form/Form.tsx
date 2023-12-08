import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled>
      <h2 className="form__title">ADD your PHOTO</h2>
      <label className="form__label" htmlFor="title">
        Title:
      </label>
      <input className="form__input" required type="text" id="title" />
      <label className="form__label" htmlFor="author">
        Author:
      </label>
      <input className="form__input" required type="text" id="author" />
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
      />
      <label className="form__label" htmlFor="location">
        Location:
      </label>
      <input className="form__input" required type="text" id="location" />
      <label className="form__label" htmlFor="space">
        Public space:
      </label>
      <input className="form__input" required type="text" id="space" />
      <div className="form__category">
        <label className="form__label form__label--select" htmlFor="category">
          Category:
        </label>
        <select className="form__input form__input--select" id="category">
          <option value="">Long shot</option>
          <option value="">Medium shot</option>
        </select>
      </div>
      <label className="form__label" htmlFor="portfolio">
        Portfolio url:
      </label>
      <input className="form__input" required type="url" id="portfolio" />
      <label className="form__label" htmlFor="description">
        What made you click:
      </label>
      <textarea
        className="form__description"
        id="description"
        placeholder="A few lines explaining something about how did you feel or thought when you took that image."
      ></textarea>
      <label className="form__label" htmlFor="photo">
        Add the image url:
      </label>
      <input className="form__input" required type="url" id="photo" />
      <div className="form__button">
        <Button
          className={"butto button__form"}
          type={"submit"}
          text={"add photo"}
        />
      </div>
    </FormStyled>
  );
};

export default Form;
