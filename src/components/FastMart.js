import { useState } from "react";

const MartSection = ({ id, isVisibel, onShow }) => {
  return (
    <div>
      <h1>{id}</h1>
      {!isVisibel && <button onClick={onShow}>Show</button>}
      {isVisibel && <button onClick={onShow}>Hide</button>}
      {isVisibel && (
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      )}
      <hr />
    </div>
  );
};

const FastMart = () => {
  const [visibelSection, setVisibelSection] = useState("about");
  const [data, setData] = useState([
    {
      id: "about"
    },
    {
      id: "contact"
    },
    {
      id: "help"
    }
  ])
  return (
    <>
    {data.map((one) => {
      return (
        <MartSection
        id={one.id}
        isVisibel={visibelSection === one.id}
        onShow={() =>
          visibelSection === one.id
            ? setVisibelSection(false)
            : setVisibelSection(one.id)
        }
      />
      )
    })}
    </>
  );
};

export default FastMart;
