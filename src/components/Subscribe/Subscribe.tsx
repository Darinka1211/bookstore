import React from "react";
import "./Subscribe.scss"
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

interface IData {
    email: string;
  }
  
  const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm<IData>();
  
    const onSubmit = (data: IData) => {
      reset();
    };
    return (
      <div className="subcribe_title">
        <h2>Subscribe to Newsletter</h2>
        <p>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
  
        <form className="form__input" onSubmit={handleSubmit(onSubmit)}>
          <input className="input__registr"
            placeholder="Your email"
            type="text"
            {...register("email")}
          />
          <div className="div_btn">
            <Button text="Subscribe" />
          </div>
        </form>
      </div>
    );
  };
  
  export default Subscribe;