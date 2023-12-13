import Form from "../../components/Form/Form";
import usePhotosApi from "../../hooks/usePhotosApi";
import PageStyled from "../PageStyled";

const AddPage = (): React.ReactElement => {
  const { addPhoto } = usePhotosApi();

  return (
    <PageStyled>
      <section className="data__article">
        <h1 className="data__title">Join the contest</h1>
        <ul className="data__unordered">
          <li className="data__text data__text--rules">
            Territory: The World.
          </li>
          <li className="data__text data__text--rules">
            Theme: street (public spaces)
          </li>
          <li className="data__text data__text--rules">
            Eligibility: Open to All
          </li>
          <li className="data__text data__text--rules">Entry fee: free</li>
          <li className="data__text data__text--rules">
            Prize: Leica M11 (body)
          </li>
        </ul>
      </section>
      <Form onSubmit={addPhoto} buttonText="add photo" />
      <section className="data__detail">
        <h2 className="data__title data__title--detail">
          Contest rules detail
        </h2>
        <ol className="data__ordered">
          <li className="data__rules data__text--detail">
            All photographs have to be taken in Europe in the XXI.
          </li>
          <li className="data__rules data__text--detail">
            Pictures have to be taken in public places like: streets, trains,
            parks, bars… Places where you’ll cohabit with people you do not
            know.
          </li>
          <li className="data__rules data__text--detail">
            We have introduce two categories to approach this theme. These are
            the following:
            <span className="data__rules data__rules--category">
              a. Long shot.
            </span>
            <span className="data__rules data__rules--category">
              b. Medium shot.
            </span>
          </li>
          <li className="data__rules data__text--detail">
            You can send a maximum of 1 image per category. It means a maximum
            of 2 images.
          </li>
          <li className="data__rules data__text--detail">
            Images have to be 35 mm. and horizontal.
          </li>
          <li className="data__rules data__text--detail">
            The resolution of the image must be 800 pixels for the widest side
            and 72 dpi.
          </li>
          <li className="data__rules data__text--detail">
            To register you just have to respond to the form above
          </li>
        </ol>
      </section>
    </PageStyled>
  );
};

export default AddPage;
