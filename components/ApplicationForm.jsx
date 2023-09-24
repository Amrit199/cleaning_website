import React from "react";
import CustomInput from "./CustomInput";

const ApplicationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-7 font-bold"
    >
      <CustomInput
        title="Navn"
        type="text"
        name="Navn"
        placeholder="Ditt navn"
      />
      <CustomInput
        title="Telefonnummer"
        type="text"
        name="Telefonnummer"
        placeholder="Ditt telefonnummer"
      />
      <CustomInput
        title="E-post"
        type="email"
        name="E-post"
        placeholder="Din e-post"
      />
      <CustomInput
        title="Fødselsdato"
        type="date"
        name="Fødselsdato"
        placeholder="Din fødselsdato"
      />
      <CustomInput
        title="Adress"
        type="text"
        name="Adress"
        placeholder="Din adresse"
      />
      <div className="w-full flex flex-col gap-1">
        <label>Om deg</label>
        <textarea
          className="p-3 border-2 rounded-lg font-normal"
          name="message"
          placeholder="Fortell oss om deg..."
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Utdanning</label>
        <textarea
          className="p-3 border-2 rounded-lg font-normal"
          name="message"
          placeholder="Din utdanning..."
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Tidligere erfaring</label>
        <textarea
          className="p-3 border-2 rounded-lg font-normal"
          name="message"
          placeholder="Din tidligere arbeidserfaring..."
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Hvorfor søker du jobb hos Oss?</label>
        <textarea
          className="p-3 border-2 rounded-lg font-normal"
          name="message"
          placeholder="Hvorfor søker du jobb hos Oss?..."
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="py-3">Legg gjerne ved din CV</label>
        <input
          className="font-normal"
          type="file"
          id="CV"
          name="CV"
          accept=".pdf, .doc, .docx"
        />
      </div>
      <div className="w-full">
        <label className="font-normal">
          <input type="checkbox" name="consent" className="w-8" />
          Ja, jeg samtykker til personvernserklæringen
        </label>
      </div>
      <button className="w-full py-4 uppercase bg-[#7fafb1] hover:bg-[#C0D7D8] text-black rounded-3xl uppercase font-bold">
        send søknad
      </button>
    </form>
  );
};

export default ApplicationForm;
